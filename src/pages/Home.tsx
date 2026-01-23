import { motion } from "framer-motion"
import { useRef } from "react"
import { buttonStyles } from "../components/Button"
import NewsletterForm from "../components/NewsletterForm"
import PageTransition from "../components/PageTransition"
import ProductCard from "../components/ProductCard"
import TestimonialCard from "../components/TestimonialCard"
import { products } from "../data/products"
import { Link } from "react-router-dom"
import awaizPhoto from "../assets/photos/Awaiz.jpg"

const testimonials = [
  {
    quote: "The apple chips are gone before movie night even starts.",
    name: "Maya C.",
    role: "Parent + Snack Enthusiast",
  },
  {
    quote: "Bright flavors, clean ingredients, and the cutest packaging.",
    name: "Jordan L.",
    role: "Food stylist",
  },
  {
    quote: "My team grabs the juices after every morning meeting.",
    name: "Elias R.",
    role: "Studio lead",
  },
]

const stats = [
  { label: "Orchards", value: "12" },
  { label: "Weekly batches", value: "40+" },
  { label: "Happy tasters", value: "9k" },
]

const Home = () => {
  const bestSellers = products.filter((product) => product.bestSeller)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: number) => {
    scrollRef.current?.scrollBy({ left: direction * 280, behavior: "smooth" })
  }

  return (
    <PageTransition className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-apple-red/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-apple-red">
            Freshly picked joy
          </span>
          <h1 className="text-4xl font-bold leading-tight text-slate-800 dark:text-dark-text md:text-5xl lg:text-6xl">
            Apple-made snacks that taste like sunshine
          </h1>
          <p className="max-w-lg text-base text-slate-600 dark:text-dark-muted md:text-lg">
            Apple Foods blends orchard freshness with playful creativity. Discover snacks,
            sips, and sauces made to brighten your day.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/products" className={buttonStyles("primary")}>
              Shop Best Sellers
            </Link>
            <Link to="/our-story" className={buttonStyles("secondary")}>
              Meet the Founder
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-apple-red/10 via-white to-apple-green/10 p-6 shadow-soft transition-colors duration-300 dark:from-apple-red/5 dark:via-dark-card dark:to-apple-green/5 dark:shadow-dark-soft md:p-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-dark-surface md:h-40 md:w-40">
              <img
                src={awaizPhoto}
                alt="Awaiz Ahmed - Founder"
                className="h-full w-full object-cover object-[40%_15%]"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-apple-red">Meet the Founder</p>
            <h3 className="mt-1 text-2xl font-semibold text-slate-800 dark:text-dark-text">Awaiz Ahmed</h3>
            <p className="mt-2 max-w-xs text-sm text-slate-600 dark:text-dark-muted">
              Crafting delicious apple-based treats with passion and creativity.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/80 px-4 py-3 text-center transition-colors duration-300 dark:bg-dark-surface/80">
                <p className="text-xl font-bold text-slate-800 dark:text-dark-text">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-dark-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-apple-red">
              Best Sellers
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-800 dark:text-dark-text md:text-3xl">Fan favorites with a crunch</h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-full border border-apple-red/20 bg-white px-4 py-2 text-sm font-semibold text-apple-red transition-all hover:bg-apple-red hover:text-white dark:border-apple-red/30 dark:bg-dark-card dark:hover:bg-apple-red"
              onClick={() => scrollCarousel(-1)}
            >
              Prev
            </button>
            <button
              type="button"
              className="rounded-full border border-apple-red/20 bg-white px-4 py-2 text-sm font-semibold text-apple-red transition-all hover:bg-apple-red hover:text-white dark:border-apple-red/30 dark:bg-dark-card dark:hover:bg-apple-red"
              onClick={() => scrollCarousel(1)}
            >
              Next
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="-mx-2 flex gap-5 overflow-x-auto px-2 pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="min-w-[260px] max-w-[280px] flex-shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-6 lg:grid-cols-2 lg:gap-8"
      >
        <div className="rounded-3xl bg-white/80 p-8 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft">
          <p className="text-sm font-semibold uppercase tracking-widest text-apple-red">Our Story</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-800 dark:text-dark-text md:text-3xl">From orchard to pantry</h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-dark-muted md:text-base">
            Apple Foods began as a family orchard with one simple goal: make healthy snacks
            feel joyful. Today we roast, press, and simmer in small batches with colorful
            creativity.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-apple-cream px-4 py-3 text-center transition-colors duration-300 dark:bg-dark-surface">
                <p className="text-xl font-bold text-slate-800 dark:text-dark-text">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-dark-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-apple-green/10 via-white to-apple-red/10 p-8 transition-colors duration-300 dark:from-apple-green/5 dark:via-dark-card dark:to-apple-red/5">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-dark-text">What makes us different</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-dark-muted md:text-base">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-apple-red"></span>
              Real apples in every recipe, never concentrates.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-apple-green"></span>
              Small-batch cooking to keep flavors bright.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-apple-red"></span>
              Sustainable packaging designed for reuse.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-apple-green"></span>
              Community orchards that grow with every season.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-apple-red">
            Happy tasters
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-800 dark:text-dark-text md:text-3xl">What our community says</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <NewsletterForm />
      </motion.section>
    </PageTransition>
  )
}

export default Home
