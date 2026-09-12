import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import RailNav from "@/components/RailNav";
import { ease } from "@/components/motion";

/**
 * Horizontal panel deck.
 *
 * On desktop the page does not scroll. One section fills the viewport at a
 * time; a scroll gesture retires the current panel to the left and brings the
 * next in from the right. On phones this collapses to an ordinary vertical
 * stack, because a horizontal deck on a small screen is miserable to use.
 *
 * Panels never scroll: each one is laid out to fit the viewport, so every
 * gesture moves to the next section.
 */

const STEP_LOCK_MS = 680;

const PanelDeck = ({ panels }) => {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  // Starts stacked so the server and the first client render agree; the deck
  // switches on after mount, which is a re-render rather than a hydration diff.
  const [deck, setDeck] = useState(false);

  const locked = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setDeck(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // The deck owns the viewport, so the document itself must not scroll.
  useEffect(() => {
    if (!deck) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [deck]);

  const go = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(panels.length - 1, next));
      setIndex((cur) => {
        if (clamped === cur) return cur;
        setDirection(clamped > cur ? 1 : -1);
        return clamped;
      });
    },
    [panels.length]
  );

  const step = useCallback(
    (delta) => {
      if (locked.current) return;
      locked.current = true;
      window.setTimeout(() => {
        locked.current = false;
      }, STEP_LOCK_MS);
      setIndex((cur) => {
        const clamped = Math.max(0, Math.min(panels.length - 1, cur + delta));
        if (clamped === cur) {
          locked.current = false;
          return cur;
        }
        setDirection(delta > 0 ? 1 : -1);
        return clamped;
      });
    },
    [panels.length]
  );

  useEffect(() => {
    if (!deck) return undefined;

    const onWheel = (event) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) < 6) return;
      step(event.deltaY > 0 ? 1 : -1);
    };

    const onKey = (event) => {
      if (["ArrowRight", "ArrowDown", "PageDown"].includes(event.key)) {
        event.preventDefault();
        step(1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        step(-1);
      } else if (event.key === "Home") {
        event.preventDefault();
        go(0);
      } else if (event.key === "End") {
        event.preventDefault();
        go(panels.length - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [deck, step, go, panels.length]);

  // --- Stacked (phones, and the server render) -----------------------------
  if (!deck) {
    return (
      <>
        <main>
          {panels.map((panel) => (
            <section key={panel.id} id={panel.id}>
              {panel.node}
            </section>
          ))}
        </main>
        <StackRail panels={panels} />
      </>
    );
  }

  // --- Deck (desktop) -------------------------------------------------------
  // Every panel stays mounted and only its opacity and offset change. Mounting
  // and unmounting through AnimatePresence left exiting panels stranded in the
  // DOM whenever an exit animation did not finish, so they piled up.
  const shift = reduced ? 0 : 64;

  return (
    <>
      <main className="fixed inset-0 overflow-hidden">
        {panels.map((panel, i) => {
          const isCurrent = i === index;
          // Retired panels rest to the left, upcoming ones wait on the right.
          const offset = isCurrent ? 0 : i < index ? -shift : shift;

          return (
            <motion.section
              key={panel.id}
              id={panel.id}
              aria-hidden={!isCurrent}
              initial={false}
              animate={{ opacity: isCurrent ? 1 : 0, x: offset }}
              transition={reduced ? { duration: 0 } : { duration: 0.42, ease }}
              style={{ pointerEvents: isCurrent ? "auto" : "none" }}
              className="absolute inset-0 overflow-hidden"
            >
                <div className="flex h-full flex-col justify-center overflow-hidden pb-24 short:pb-20">
                {panel.node}
              </div>
            </motion.section>
          );
        })}
      </main>

      <RailNav active={index} onSelect={go} />
    </>
  );
};

/**
 * On phones the rail stays visible as navigation, driven by which section is
 * currently on screen rather than by a panel index.
 */
const StackRail = ({ panels }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = panels
      .map((p) => document.getElementById(p.id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const i = sections.indexOf(visible.target);
        if (i >= 0) setActive(i);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [panels]);

  const onSelect = (i) => {
    const el = document.getElementById(panels[i].id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <RailNav active={active} onSelect={onSelect} />;
};

export default PanelDeck;
