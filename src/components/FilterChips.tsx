import { motion } from "framer-motion"

type FilterChipsProps = {
  options: string[]
  value: string
  onChange: (value: string) => void
  layoutId: string
}

const FilterChips = ({ options, value, onChange, layoutId }: FilterChipsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const selected = option === value
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={selected}
            className={`relative overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition focus-ring ${
              selected
                ? "border-apple-red/40 text-apple-red"
                : "border-transparent bg-white/70 text-slate-600 hover:text-apple-red dark:bg-dark-card/70 dark:text-dark-muted dark:hover:text-apple-red"
            }`}
          >
            {selected && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-apple-red/15"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        )
      })}
    </div>
  )
}

export default FilterChips
