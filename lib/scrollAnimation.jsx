import { useRef, useEffect, useState } from "react";

// Check if the device is likely a low-performance device
const isLowPerformanceDevice = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return false;
  
  // Simple heuristic: mobile devices or older browsers
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return isMobile;
};

export const FadeInOnScroll = ({ children }) => {
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
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? "fade-in-up" : ""}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
};

const FadeInSides = ({ children, direction }) => {
    const [isLowPerf, setIsLowPerf] = useState(false);
    
    useEffect(() => {
      setIsLowPerf(isLowPerformanceDevice());
    }, []);
    
    // If it's a low-performance device, don't animate
    if (isLowPerf) {
      return <div>{children}</div>;
    }
    
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    const fadeInVariants = {
      hidden: {
        opacity: 0,
        visibility: 'hidden',
        x: direction === 'left' ? '-70%' : '70%', // Move the element off the screen to the left or right
      },
      visible: {
        opacity: 1,
        visibility: 'visible',
        x: 0, // Move the element to its original position
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