import { motion } from "framer-motion";

export function HeaderVisible({children}) {
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 }
        }}
      >
        {children}
      </motion.div>
    )
}

export function TextVisible({children}) {
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0, }
        }}
      >
        {children}
      </motion.div>
    )
}