import { motion } from "framer-motion"
import type { ReactNode } from "react"

type PageTransitionProps = {
  children: ReactNode
  className?: string
}

const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.01, y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12 ${className}`}
    >
      {children}
    </motion.main>
  )
}

export default PageTransition
