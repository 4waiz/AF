import PageTransition from "../components/PageTransition"

const locations = [
  {
    city: "Abu Dhabi",
    address: "Corniche Road, Al Markaziyah, Abu Dhabi",
    hours: "Sun-Thu 9am-9pm, Fri-Sat 10am-10pm",
  },
  {
    city: "Dubai",
    address: "Sheikh Zayed Road, Downtown Dubai",
    hours: "Daily 10am-10pm",
  },
  {
    city: "Sharjah",
    address: "Al Majaz Waterfront, Sharjah",
    hours: "Sun-Thu 9am-8pm, Fri-Sat 10am-9pm",
  },
  {
    city: "Al Ain",
    address: "Jebel Hafeet Road, Al Ain",
    hours: "Daily 9am-8pm",
  },
  {
    city: "Ras Al Khaimah",
    address: "Al Hamra Mall, Ras Al Khaimah",
    hours: "Daily 10am-9pm",
  },
]

const Locations = () => {
  return (
    <PageTransition className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apple-red">Locations</p>
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-dark-text">Find Apple Foods nearby</h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-dark-muted">
          Drop by a market, grab a tasting, or schedule a pickup. We are spreading orchard
          joy across the map.
        </p>
      </section>

      <section className="grid items-start gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {locations.map((location) => (
            <div key={location.city} className="rounded-3xl bg-white/80 p-5 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-dark-text">{location.city}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-dark-muted">{location.address}</p>
              <p className="mt-1 text-xs font-semibold text-apple-red">{location.hours}</p>
              <div className="mt-2 inline-flex rounded-full bg-apple-red/10 px-3 py-1 text-xs font-semibold text-apple-red">
                In-store tastings available
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl bg-white/80 p-5 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft">
            <div className="overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232998.43625093908!2d54.29861821787099!3d24.35376988168025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1706012345678!5m2!1sen!2s"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abu Dhabi Location Map"
                className="w-full"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-dark-muted">
              <span className="rounded-full bg-apple-green/10 px-3 py-1">Pickup</span>
              <span className="rounded-full bg-apple-red/10 px-3 py-1">Tastings</span>
              <span className="rounded-full bg-apple-cream px-3 py-1 dark:bg-dark-surface">Community events</span>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-apple-green/10 via-white to-apple-red/10 p-5 transition-colors duration-300 dark:from-apple-green/5 dark:via-dark-card dark:to-apple-red/5">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-dark-text">Visit us</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted">
              Every location offers fresh samples, friendly staff, and a colorful selection of our full product range.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-dark-muted">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-apple-red"></span>
                Free tastings every weekend
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-apple-green"></span>
                Same-day pickup available
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-apple-red"></span>
                Seasonal exclusive products
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white/80 p-5 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-dark-text">Contact a location</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted">
              Call ahead to check product availability or schedule a group tasting event.
            </p>
            <a
              href="tel:+971504754950"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-apple-red px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-apple-red/90"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              050-475-4950
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Locations
