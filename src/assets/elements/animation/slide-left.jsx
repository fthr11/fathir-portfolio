import { motion } from "framer-motion";

const SlideLeft = ({children, delay, duration}) =>{
    return(
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration, 
          delay,
          ease: [0.25, 0.1, 0.25, 1] 
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default SlideLeft;