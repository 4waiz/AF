import { motion, useScroll, useTransform } from "framer-motion"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"
import shapeOne from "../assets/fruit-shape-1.svg"
import shapeTwo from "../assets/fruit-shape-2.svg"
import shapeThree from "../assets/fruit-shape-3.svg"

const FloatingShapes = () => {
  const reducedMotion = usePrefersReducedMotion()
  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 500], [0, -40])
  const yMid = useTransform(scrollY, [0, 500], [0, -70])
  const yFast = useTransform(scrollY, [0, 500], [0, -90])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.img
        src={shapeOne}
        alt=""
        className="absolute -left-2 top-4 h-16 w-16 opacity-40 md:left-4 md:top-8 md:h-20 md:w-20 md:opacity-50"
        style={{ y: reducedMotion ? 0 : ySlow }}
      />
      <motion.img
        src={shapeTwo}
        alt=""
        className="absolute -right-2 bottom-1/3 h-16 w-16 opacity-40 md:right-4 md:h-20 md:w-20 md:opacity-50"
        style={{ y: reducedMotion ? 0 : yMid }}
      />
      <motion.img
        src={shapeThree}
        alt=""
        className="absolute bottom-4 left-1/4 h-14 w-12 opacity-30 md:bottom-8 md:h-16 md:w-14 md:opacity-40"
        style={{ y: reducedMotion ? 0 : yFast }}
      />
    </div>
  )
}

export default FloatingShapes
