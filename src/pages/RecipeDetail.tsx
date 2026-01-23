import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Button from "../components/Button"
import PageTransition from "../components/PageTransition"
import TagPill from "../components/TagPill"
import { recipes } from "../data/recipes"

const RecipeDetail = () => {
  const { id } = useParams()
  const recipe = recipes.find((item) => item.id === id)
  const [toast, setToast] = useState(false)

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(false), 1400)
    return () => clearTimeout(timer)
  }, [toast])

  const handleCopy = async () => {
    if (!recipe) return
    const text = recipe.ingredients.join("\n")
    try {
      await navigator.clipboard.writeText(text)
      setToast(true)
    } catch (error) {
      setToast(true)
    }
  }

  if (!recipe) {
    return (
      <PageTransition className="space-y-6">
        <h1 className="text-3xl font-semibold text-slate-800 dark:text-dark-text">Recipe not found</h1>
        <Link to="/recipes" className="text-sm font-semibold text-apple-red">
          Back to recipes
        </Link>
      </PageTransition>
    )
  }

  return (
    <PageTransition className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link to="/recipes" className="text-xs font-semibold uppercase tracking-[0.2em] text-apple-red">
            Back to recipes
          </Link>
          <h1 className="mt-3 text-4xl font-semibold text-slate-800 dark:text-dark-text">{recipe.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-dark-muted">{recipe.description}</p>
        </div>
        <Button variant="secondary" onClick={handleCopy}>
          Copy ingredients
        </Button>
      </div>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-64 w-full rounded-3xl object-cover shadow-soft dark:shadow-dark-soft"
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white/80 p-6 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-dark-text">Ingredients</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-dark-muted">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-apple-cream via-white to-apple-red/10 p-6 transition-colors duration-300 dark:from-dark-surface dark:via-dark-card dark:to-apple-red/5">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-dark-text">Steps</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-600 dark:text-dark-muted">
            {recipe.steps.map((step, index) => (
              <li key={step}>
                <span className="mr-2 font-semibold text-apple-red">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3 text-xs text-slate-500 dark:text-dark-muted">
            <span>{recipe.time}</span>
            <span>{recipe.difficulty}</span>
            <span>Serves {recipe.servings}</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white/80 p-6 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-dark-text">Nutrition highlights</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {recipe.nutritionHighlights.map((highlight) => (
            <TagPill key={highlight} label={highlight} tone="solid" />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-8 right-8 rounded-full bg-apple-red px-4 py-2 text-xs font-semibold text-white shadow-lg"
          >
            Ingredients copied!
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}

export default RecipeDetail
