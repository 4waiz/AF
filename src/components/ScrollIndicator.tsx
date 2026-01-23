import { motion } from "framer-motion"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"

const ScrollIndicator = () => {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div className="flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-apple-red/70">
      <span>Scroll</span>
      <motion.div
        className="h-8 w-5 rounded-full border-2 border-apple-red/60"
        animate={
          reducedMotion
            ? {}
            : {
                y: [0, 6, 0],
              }
        }
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        <motion.span
          className="mx-auto mt-1 block h-2 w-2 rounded-full bg-apple-red"
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, 8, 0],
                }
          }
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}

export default ScrollIndicator
