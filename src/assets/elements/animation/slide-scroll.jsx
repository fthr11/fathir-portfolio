import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const SlideScroll = ({ children, className, direction ="x", inputRange =[0, 0.5], outputRange = [100, 0], delay=0, outputOpacity =[0, 1, 1, 1], inputOpacity=[0, 0.2, 0, 1]}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"]
    });
  
    // Transform the scroll progress to slideX
    const slide = useTransform(scrollYProgress, inputRange, outputRange);
    const slideDelay = useSpring(slide, {
      damping: 40,     // higher = less bounce
      stiffness: 300,  // higher = faster settle
      mass: 1,
      delay})
  
    const opacity = useTransform(scrollYProgress, inputOpacity, outputOpacity );
  
    const motionStyle = {[direction]:slideDelay, opacity}
  
    return (
      <div className="overflow-hidden">
        <motion.div
          ref={targetRef}
          style={motionStyle}
          className={className}
          viewport={{ once: true}}
        >
          {children}
        </motion.div>
      </div>
    );
};

export default SlideScroll;