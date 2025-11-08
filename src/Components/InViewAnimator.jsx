import { motion } from "framer-motion"

const InViewAnimator = ({children}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once: false, amount: 0.2}}
    transition={{ duration: 1, ease: "easeInOut"}}
    >
       {children} 
    </motion.div>
  )
}

export default InViewAnimator
