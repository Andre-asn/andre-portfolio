import { motion, useReducedMotion } from "framer-motion";
import { nav } from "@/data/content";

/**
 * The rail is the site's navigation. Each stop is a section, the line fills in
 * behind you, and the orange signal marker travels to the stop you are on.
 *
 * The marker is one absolutely positioned element whose `left` is animated,
 * rather than a layoutId shared between stops. A shared-layout animation strands
 * the marker at its old stop if it ever fails to run.
 */
const RailNav = ({ active, onSelect }) => {
  const reduced = useReducedMotion();
  const n = nav.length;
  const edge = 50 / n; // half a stop's width: where the first and last dots sit
  const markerLeft = ((active + 0.5) / n) * 100;

  const travel = reduced
    ? { duration: 0 }
    : { type: "spring", stiffness: 260, damping: 32 };

  return (
    <nav
      aria-label="Sections"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 bg-gradient-to-t from-paper via-paper/95 to-transparent pb-4 pt-6 sm:pb-5"
    >
      <div className="pointer-events-auto px-5 sm:px-8">
        <ol className="relative flex">
          {/* Track, then the portion already travelled. */}
          <span
            aria-hidden="true"
            className="absolute top-[5px] hidden h-[2px] bg-rule md:block"
            style={{ left: `${edge}%`, right: `${edge}%` }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute top-[5px] hidden h-[2px] bg-route md:block"
            style={{ left: `${edge}%` }}
            animate={{ width: `${(active / n) * 100}%` }}
            transition={travel}
          />

          {/* The travelling signal marker. */}
          <motion.span
            aria-hidden="true"
            className="absolute top-0 z-10 hidden h-3 w-3 md:block"
            animate={{ left: `calc(${markerLeft}% - 0.375rem)` }}
            transition={travel}
          >
            <span className="relative block h-3 w-3 rounded-full bg-signal">
              {!reduced && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-signal"
                  animate={{ scale: [1, 2.8], opacity: [0.75, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </span>
          </motion.span>

          {nav.map((item, i) => {
            const isCurrent = i === active;
            return (
              <li key={item.id} className="relative flex-1 text-center">
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  aria-current={isCurrent ? "true" : undefined}
                  className="group flex w-full flex-col items-center gap-2 py-1"
                >
                  <span
                    aria-hidden="true"
                    // The travelling marker is the only orange on the rail, so
                    // the current stop's own dot stays neutral underneath it.
                    className={`block h-3 w-3 rounded-full border-2 transition-colors ${
                      i < active
                        ? "border-route bg-route"
                        : "border-rule bg-paper group-hover:border-route"
                    }`}
                  />
                  <span
                    className={`text-micro transition-colors ${
                      isCurrent ? "font-semibold text-ink" : "text-muted group-hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default RailNav;
