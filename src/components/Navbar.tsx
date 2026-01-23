import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import appleLogo from "../assets/apple-logo.svg"
import Button, { buttonStyles } from "./Button"

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    {open ? (
      <path d="M6 6l12 12M18 6l-12 12" />
    ) : (
      <path d="M4 7h16M4 12h16M4 17h16" />
    )}
  </svg>
)

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Recipes", path: "/recipes" },
  { label: "Our Story", path: "/our-story" },
  { label: "Locations", path: "/locations" },
  { label: "Contact", path: "/contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-apple-cream/90 backdrop-blur transition-colors duration-300 dark:bg-dark-bg/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={appleLogo} alt="Apple Foods" className="h-10 w-10" />
          <div>
            <p className="text-lg font-semibold text-slate-800 dark:text-dark-text">Apple Foods</p>
            <p className="text-xs uppercase tracking-[0.2em] text-apple-red/70">Fresh & Playful</p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive ? "text-apple-red" : "text-slate-600 hover:text-apple-red dark:text-dark-muted dark:hover:text-apple-red"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/products" className={buttonStyles("secondary")}>Shop</NavLink>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-apple-red shadow-sm transition-colors dark:bg-dark-card md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white/95 dark:bg-dark-card/95 md:hidden"
          >
            <div className="flex flex-col gap-3 px-6 pb-6 pt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-semibold ${
                      isActive ? "bg-apple-red/10 text-apple-red" : "text-slate-600 dark:text-dark-muted"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button variant="primary" onClick={() => setOpen(false)}>
                Shop Best Sellers
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
