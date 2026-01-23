import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"
import Button from "./Button"

const confettiDots = Array.from({ length: 10 })

const NewsletterForm = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success">("idle")
  const reducedMotion = usePrefersReducedMotion()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!email) return
    setStatus("success")
    setTimeout(() => setStatus("idle"), 2200)
    setEmail("")
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-soft backdrop-blur transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-apple-red">
            Sweet updates
          </p>
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-dark-text">Fresh drops and orchard news</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted">
            Join for recipes, seasonal releases, and playful perks.
          </p>
        </div>
        <form className="flex w-full flex-col gap-3 md:w-auto md:flex-row" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@applefoods.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-full border-apple-red/20 bg-white px-4 py-3 text-sm transition-colors focus:border-apple-red focus:ring-apple-red/30 dark:border-dark-surface dark:bg-dark-surface dark:text-dark-text dark:placeholder-dark-muted"
          />
          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </form>
      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            role="status"
            aria-live="polite"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-apple-green/15 px-4 py-2 text-sm font-semibold text-apple-green"
          >
            You are in! Check your inbox for a welcome treat.
          </motion.div>
        )}
      </AnimatePresence>

      {!reducedMotion && status === "success" && (
        <div className="pointer-events-none absolute inset-0">
          {confettiDots.map((_, index) => (
            <motion.span
              key={`confetti-${index}`}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.6 }}
              animate={{
                opacity: [0, 1, 0],
                x: (index - 4) * 8,
                y: -20 - index * 2,
                scale: 1.2,
              }}
              transition={{ duration: 1.1, delay: index * 0.03 }}
              className="absolute left-1/2 top-8 h-2 w-2 rounded-full bg-apple-red"
              style={{ marginLeft: `${index * 6 - 30}px` }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default NewsletterForm
