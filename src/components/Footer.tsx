const Footer = () => {
  return (
    <footer className="mt-12 bg-white/80 transition-colors duration-300 dark:bg-dark-card/80 md:mt-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 md:gap-8 md:py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-dark-text">Apple Foods</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted">
            Playful, plant-forward favorites from our orchards to your kitchen.
          </p>
          <p className="mt-3 text-sm text-slate-600 dark:text-dark-muted">
            Abu Dhabi, UAE
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 dark:text-dark-text">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-dark-muted">
            <li>Seasonal boxes</li>
            <li>Wholesale</li>
            <li>Nutrition</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 dark:text-dark-text">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-dark-muted">
            <li>
              <a href="tel:+971504754950" className="hover:text-apple-red transition-colors">
                050-475-4950
              </a>
            </li>
            <li>
              <a href="mailto:awaiz42ad@gmail.com" className="hover:text-apple-red transition-colors">
                awaiz42ad@gmail.com
              </a>
            </li>
            <li>Abu Dhabi, UAE</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-apple-red/10 py-4 text-center text-xs text-slate-500 dark:border-dark-surface dark:text-dark-muted">
        <p>Apple Foods &copy; {new Date().getFullYear()}. Crafted with orchard love.</p>
        <p className="mt-1">
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/awaiz-ahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-apple-red hover:underline"
          >
            Awaiz Ahmed
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
