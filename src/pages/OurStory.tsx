import PageTransition from "../components/PageTransition"
import awaizPhoto from "../assets/photos/Awaiz.jpg"

const timeline = [
  {
    year: "2014",
    title: "Orchard beginnings",
    description: "A small family orchard starts selling fresh apple chips at weekend markets.",
  },
  {
    year: "2018",
    title: "First production kitchen",
    description: "We build a bright kitchen and start our juice and sauce line.",
  },
  {
    year: "2022",
    title: "Community orchards",
    description: "Partnerships with local growers expand our heritage apple varieties.",
  },
  {
    year: "2025",
    title: "Nationwide shelves",
    description: "Apple Foods launches in over 150 stores across the country.",
  },
  {
    year: "2026",
    title: "Global expansion",
    description: "Opening our first international location in Abu Dhabi, bringing orchard freshness to the UAE.",
  },
]

const values = [
  "Celebrate real fruit and honest flavors.",
  "Make healthy choices feel joyful and colorful.",
  "Support growers with long-term partnerships.",
  "Keep packaging playful and planet-friendly.",
]

const sustainability = [
  "100% recyclable cartons and compostable snack bags.",
  "Solar-powered kitchens by 2027 with energy tracking now.",
  "Water-smart orchards using drip irrigation and rain capture.",
  "Food rescue partnerships that reroute surplus produce weekly.",
]

const OurStory = () => {
  return (
    <PageTransition className="space-y-12 md:space-y-16">
      <section className="space-y-3 md:space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apple-red">Our story</p>
        <h1 className="text-3xl font-semibold text-slate-800 dark:text-dark-text md:text-4xl">From orchard roots to kitchen magic</h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-dark-muted md:text-base">
          Apple Foods is a playful blend of heritage orchards, curious chefs, and neighbors
          who love good food. Every season brings a new flavor idea to share.
        </p>
      </section>

      <section className="grid items-start gap-6 md:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-dark-text md:text-3xl">Timeline</h2>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-2xl bg-white/80 p-5 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft md:rounded-3xl md:p-6">
                <p className="text-sm font-semibold text-apple-red">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-800 dark:text-dark-text md:mt-2 md:text-xl">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-dark-muted md:mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 md:space-y-6">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-apple-red/10 via-white to-apple-green/10 p-5 shadow-soft transition-colors duration-300 dark:from-apple-red/5 dark:via-dark-card dark:to-apple-green/5 dark:shadow-dark-soft md:rounded-3xl md:p-6">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-dark-surface md:h-24 md:w-24">
                <img
                  src={awaizPhoto}
                  alt="Awaiz Ahmed - Founder"
                  className="h-full w-full object-cover object-[40%_15%]"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-apple-red">Founder</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-800 dark:text-dark-text">Awaiz Ahmed</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-dark-muted">
                  Passionate about creating delicious, healthy apple-based treats for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white/80 p-5 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft md:rounded-3xl md:p-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-dark-text md:text-2xl">Our values</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-dark-muted md:mt-4">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-apple-green/10 via-white to-apple-red/10 p-5 transition-colors duration-300 dark:from-apple-green/5 dark:via-dark-card dark:to-apple-red/5 md:rounded-3xl md:p-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-dark-text md:text-2xl">Sustainability commitments</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-dark-muted md:mt-4">
              {sustainability.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white/80 p-5 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft md:rounded-3xl md:p-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-dark-text md:text-2xl">Join our journey</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-dark-muted">
              We're always looking for passionate people who love good food and want to make a difference.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-apple-red px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-apple-red/90"
              >
                Get in touch
              </a>
              <a
                href="/locations"
                className="inline-flex items-center gap-2 rounded-full border border-apple-red/20 bg-white px-4 py-2 text-sm font-semibold text-apple-red transition-all hover:bg-apple-red hover:text-white dark:border-apple-red/30 dark:bg-dark-surface"
              >
                Visit a location
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default OurStory
