import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export type FAQItem = {
  question: string
  answer: string
}

type AccordionFAQProps = {
  items: FAQItem[]
}

const AccordionFAQ = ({ items }: AccordionFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = index === openIndex
        const panelId = `faq-panel-${index}`
        return (
          <div key={item.question} className="rounded-2xl border border-apple-red/10 bg-white/80 transition-colors dark:border-dark-surface dark:bg-dark-surface/80">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-slate-800 focus-ring dark:text-dark-text"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span className="text-xl text-apple-red">{isOpen ? "-" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-slate-600 dark:text-dark-muted">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default AccordionFAQ
