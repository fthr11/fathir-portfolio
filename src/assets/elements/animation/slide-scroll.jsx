import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const SlideScroll = ({
  children,
  className,
  direction = "x",
  inputRange = [0, 0.5],
  outputRange = [50, 0], 
  outputOpacity = [0, 1, 1, 1],
  inputOpacity = [0, 0.2, 0, 1]
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.95", "start 0.4"] 
  });

  const rawSlide = useTransform(scrollYProgress, inputRange, outputRange);
  const slide = useSpring(rawSlide, {
    stiffness: 300,
    damping: 30,
  });

  const opacity = useTransform(scrollYProgress, inputOpacity, outputOpacity);
  const motionStyle = { [direction]: slide, opacity };

  return (
    <div className="overflow-hidden"> 
      <motion.div
        ref={targetRef}
        style={motionStyle}
        className={className}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideScroll;
