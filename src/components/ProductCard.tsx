import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import type { Product } from "../data/products"
import TagPill from "./TagPill"

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      d="M12 21s-6.4-4.4-9-8.3C1 9.4 2.4 6 5.7 6c2 0 3.4 1.2 4.3 2.6C10.9 7.2 12.3 6 14.3 6c3.3 0 4.7 3.4 2.7 6.7C18.4 16.6 12 21 12 21Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ProductCard = ({ product }: { product: Product }) => {
  const [favorite, setFavorite] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (!showToast) return
    const timer = setTimeout(() => setShowToast(false), 1400)
    return () => clearTimeout(timer)
  }, [showToast])

  const toggleFavorite = () => {
    const next = !favorite
    setFavorite(next)
    if (next) setShowToast(true)
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/80 p-5 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft"
    >
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${product.accent}`}>
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-36 w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-dark-bg/60" />
        <button
          type="button"
          aria-pressed={favorite}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          onClick={toggleFavorite}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-apple-red shadow-sm transition focus-ring dark:bg-dark-card/90"
        >
          <motion.span
            animate={{ scale: favorite ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <HeartIcon filled={favorite} />
          </motion.span>
        </button>
        <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 transition group-hover:opacity-100">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-apple-red dark:bg-dark-card/90">
            Quick View
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-dark-text">{product.name}</h3>
            <p className="text-xs uppercase tracking-wide text-apple-red/70">
              {product.category}
            </p>
          </div>
          <span className="text-sm font-semibold text-apple-red">{product.price}</span>
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted">{product.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
        <ul className="mt-4 space-y-1 text-xs text-slate-500 dark:text-dark-muted">
          {product.nutritionHighlights.map((highlight) => (
            <li key={highlight}>- {highlight}</li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            role="status"
            aria-live="polite"
            className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-apple-red px-3 py-1 text-xs font-semibold text-white shadow-lg"
          >
            Saved!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default ProductCard
