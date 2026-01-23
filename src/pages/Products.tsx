import { useMemo, useState } from "react"
import FilterChips from "../components/FilterChips"
import PageTransition from "../components/PageTransition"
import ProductCard from "../components/ProductCard"
import { productCategories, products, productTags } from "../data/products"

const Products = () => {
  const [category, setCategory] = useState("All")
  const [tag, setTag] = useState("All")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = category === "All" || product.category === category
      const tagMatch =
        tag === "All" || product.tags.map((item) => item.toLowerCase()).includes(tag)
      return categoryMatch && tagMatch
    })
  }, [category, tag])

  return (
    <PageTransition className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apple-red">Products</p>
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-dark-text">Taste the orchard lineup</h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-dark-muted">
          Mix and match snacks, sips, sauces, and cozy pantry staples. Filter by what you
          crave most today.
        </p>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-dark-muted">
            Category
          </p>
          <FilterChips
            options={productCategories}
            value={category}
            onChange={setCategory}
            layoutId="category-chip"
          />
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-dark-muted">
            Dietary tags
          </p>
          <FilterChips
            options={productTags}
            value={tag}
            onChange={setTag}
            layoutId="tag-chip"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </PageTransition>
  )
}

export default Products
