import { motion } from "framer-motion"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"

type AnimatedTextProps = {
  text: string
  className?: string
  as?: "h1" | "h2" | "p"
}

const AnimatedText = ({ text, className = "", as = "h1" }: AnimatedTextProps) => {
  const reducedMotion = usePrefersReducedMotion()
  const Tag = as

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  const letters = text.split("")

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.03,
            },
          },
          hidden: {},
        }}
        aria-label={text}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}

export default AnimatedText
