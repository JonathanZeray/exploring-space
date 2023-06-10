import { motion } from "framer-motion";

export function WhenVisible({children}) {
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

//Ta bort koden nedtill/Skapa separat komponent för den på måndag.
// Skillnaden är variants, nedre kod animation påverkar bara opacity och inte Y axeln. 

export function WhenVisible2({children}) {
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