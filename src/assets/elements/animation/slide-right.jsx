import { motion } from "framer-motion";

const SlideRight = ({children, delay,className}) =>{
    return(
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 0.6, 
          delay,
          ease: [0.25, 0.1, 0.25, 1] 
        }}
        viewport={{ once: true }}
      >
        <motion.div
            className={className}
            initial={{ opacity: 0, scaleX: 0, transformOrigin: "left center" }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            viewport={{ once: true }}
        />
      </motion.div>
    </div>
  );
}

export default SlideRight;