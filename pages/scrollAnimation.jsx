import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true, // Animation triggers only once when element enters the viewport
      threshold: .4, // Change this value according to your needs
    });
  
    const fadeInVariants = {
      hidden: { opacity: 0, visibility: 'hidden'},
      visible: { opacity: 1, visibility: 'visible'},
    };
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        transition={{ duration: .65 }} // Adjust the duration as needed
      >
        {children}
      </motion.div>
    );
  };
  

const FadeInSides = ({ children, direction }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: .2,
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
        transition={{ duration: 0.65 }}
      >
        {children}
      </motion.div>
    );
  };

export { FadeInOnScroll, FadeInSides };