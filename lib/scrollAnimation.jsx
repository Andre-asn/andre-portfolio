import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Check if the device is likely a low-performance device
const isLowPerformanceDevice = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return false;
  
  // Simple heuristic: mobile devices or older browsers
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return isMobile;
};

/**
 * FadeInOnScroll
 * @param {children} ReactNode
 * @param {animation} string - one of 'fade-in-up', 'fade-in-left', 'fade-in-right', 'fade-in-scale'
 */
export const FadeInOnScroll = ({ children, animation = "fade-in-up" }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before element comes into view
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? animation : 'opacity-0 invisible pointer-events-none'}`}
      style={{ 
        willChange: "opacity, transform",
        transform: !isVisible ? 'translateY(20px)' : 'translateY(0)'
      }}
    >
      {children}
    </div>
  );
};

const FadeInSides = ({ children, direction }) => {
  const [isLowPerf, setIsLowPerf] = useState(false);
  // Always call hooks at the top level
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsLowPerf(isLowPerformanceDevice());
  }, []);

  if (isLowPerf) {
    return <div>{children}</div>;
  }

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      visibility: 'hidden',
      x: direction === 'left' ? '-70%' : '70%',
    },
    visible: {
      opacity: 1,
      visibility: 'visible',
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export { FadeInSides };