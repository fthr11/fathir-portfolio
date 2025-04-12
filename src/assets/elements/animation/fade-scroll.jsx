import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const FadeScroll = ({ children, className }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"], // Triggers fade in/out effect
    });
  
    const opacity = useTransform(scrollYProgress, [0, .3, 1, 1], [0, 1, 1, 1]); // Fade in & out effect
  
    return (
      <div ref={targetRef} className="overflow-hidden">
        <motion.div style={{ opacity }} className={className}>
          {children}
        </motion.div>
      </div>
    );
  };

export default FadeScroll;