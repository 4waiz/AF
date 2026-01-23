import { motion, useScroll, useTransform } from "framer-motion"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"

const BackgroundDecor = () => {
  const reducedMotion = usePrefersReducedMotion()
  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 800], [0, -60])
  const yFast = useTransform(scrollY, [0, 800], [0, -90])
  const yDots = useTransform(scrollY, [0, 800], [0, -30])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-apple-red/10 blur-3xl dark:bg-apple-red/5"
        style={{ y: reducedMotion ? 0 : ySlow }}
      />
      <motion.div
        className="absolute right-10 top-10 h-64 w-64 rounded-full bg-apple-green/15 blur-3xl dark:bg-apple-green/10"
        style={{ y: reducedMotion ? 0 : yFast }}
      />
      <motion.div
        className="absolute left-0 right-0 top-0 h-full bg-dots opacity-60 dark:opacity-30"
        style={{ y: reducedMotion ? 0 : yDots }}
      />
      <div className="absolute left-10 top-1/3 h-64 w-64 rounded-full border border-apple-green/20 dark:border-apple-green/10" />
    </div>
  )
}

export default BackgroundDecor
