import { motion } from "framer-motion";

const SlideDown = ({ children, delay, className,}) => {
  return (
    <div className={`overflow-hidden py-3 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: '-300%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay,
          ease: [0.25, 0.1, 0.25, 1] 
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideDown;