import { useState } from "react"
import FilterChips from "../components/FilterChips"
import PageTransition from "../components/PageTransition"
import RecipeCard from "../components/RecipeCard"
import TagPill from "../components/TagPill"
import { recipeTags, recipes } from "../data/recipes"

const spotlights = [
  {
    ingredient: "Apple",
    description: "Sweet-tart apples bring natural sweetness and a juicy crunch.",
    benefits: ["Fiber", "Vitamin C", "Bright flavor"],
  },
  {
    ingredient: "Cinnamon",
    description: "Warm spice that makes every bite taste like cozy comfort.",
    benefits: ["Aromatic", "Pairs with oats", "Comforting"],
  },
  {
    ingredient: "Kale",
    description: "Leafy green packed with color and a gentle earthy finish.",
    benefits: ["Vitamin A", "Fresh greens", "Balance"],
  },
]

const Recipes = () => {
  const [tag, setTag] = useState("All")
  const [selectedSpotlight, setSelectedSpotlight] = useState(spotlights[0])

  const filteredRecipes =
    tag === "All" ? recipes : recipes.filter((recipe) => recipe.tags.includes(tag))

  return (
    <PageTransition className="space-y-14">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apple-red">Recipes</p>
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-dark-text">Cook with bright ideas</h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-dark-muted">
          Quick bites and cozy bowls, all built around orchard-fresh inspiration.
        </p>
      </section>

      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-dark-muted">
          Filter by vibe
        </p>
        <FilterChips options={recipeTags} value={tag} onChange={setTag} layoutId="recipe-chip" />
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>

      <section className="rounded-3xl bg-white/80 p-8 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apple-red">
              Ingredient spotlight
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-800 dark:text-dark-text">Taste the hero</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted">
              Tap an ingredient to discover flavor notes and nutrition perks.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {spotlights.map((spotlight) => (
                <button
                  key={spotlight.ingredient}
                  type="button"
                  onClick={() => setSelectedSpotlight(spotlight)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-ring ${
                    selectedSpotlight.ingredient === spotlight.ingredient
                      ? "bg-apple-red/15 text-apple-red"
                      : "bg-white text-slate-600 dark:bg-dark-surface dark:text-dark-muted"
                  }`}
                >
                  {spotlight.ingredient}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-apple-cream via-white to-apple-green/20 p-6 transition-colors duration-300 dark:from-dark-surface dark:via-dark-card dark:to-apple-green/10">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-dark-text">
              {selectedSpotlight.ingredient}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted">{selectedSpotlight.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedSpotlight.benefits.map((benefit) => (
                <TagPill key={benefit} label={benefit} tone="solid" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Recipes
