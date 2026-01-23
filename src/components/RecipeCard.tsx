import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import type { Recipe } from "../data/recipes"
import TagPill from "./TagPill"

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <motion.article
      whileHover={{ rotate: -1.2, y: -4 }}
      className="group relative flex h-full flex-col rounded-3xl bg-white/80 p-5 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-apple-cream via-white to-apple-green/20 dark:from-dark-surface dark:via-dark-card dark:to-apple-green/10">
        <motion.img
          src={recipe.image}
          alt={recipe.title}
          className="h-32 w-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-dark-bg/60" />
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-dark-text">
          <Link to={`/recipes/${recipe.id}`} className="focus-ring">
            {recipe.title}
          </Link>
        </h3>
        <span className="mt-1 inline-block h-0.5 w-10 origin-left rounded-full bg-apple-red transition-all duration-300 group-hover:w-20" />
        <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted">{recipe.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {recipe.tags.slice(0, 2).map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-dark-muted">
          <span>{recipe.time}</span>
          <span>{recipe.difficulty}</span>
          <span>Serves {recipe.servings}</span>
        </div>
      </div>
    </motion.article>
  )
}

export default RecipeCard
