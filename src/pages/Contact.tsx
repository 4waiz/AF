import AccordionFAQ, { type FAQItem } from "../components/AccordionFAQ"
import Button from "../components/Button"
import PageTransition from "../components/PageTransition"

const faqs: FAQItem[] = [
  {
    question: "Where do you source your apples?",
    answer: "We partner with family orchards in the Pacific Northwest and the Midwest.",
  },
  {
    question: "Are your products allergy-friendly?",
    answer: "Many items are gluten-free and vegan. Each label notes allergens clearly.",
  },
  {
    question: "How can I request a tasting?",
    answer: "Send us a note with your city and we will coordinate a pop-up tasting.",
  },
]

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ),
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <PageTransition className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-apple-red">Contact</p>
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-dark-text">Let us chat</h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-dark-muted">
          Have a question or a bright idea? Drop us a note and our team will reply within two
          business days.
        </p>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="rounded-3xl bg-white/80 p-6 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-600 dark:text-dark-muted">
              First name
              <input
                type="text"
                required
                className="mt-2 w-full rounded-2xl border-apple-red/20 bg-white px-4 py-3 text-sm transition-colors focus:border-apple-red focus:ring-apple-red/30 dark:border-dark-surface dark:bg-dark-surface dark:text-dark-text"
              />
            </label>
            <label className="text-sm font-semibold text-slate-600 dark:text-dark-muted">
              Last name
              <input
                type="text"
                required
                className="mt-2 w-full rounded-2xl border-apple-red/20 bg-white px-4 py-3 text-sm transition-colors focus:border-apple-red focus:ring-apple-red/30 dark:border-dark-surface dark:bg-dark-surface dark:text-dark-text"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-slate-600 dark:text-dark-muted">
            Email
            <input
              type="email"
              required
              className="mt-2 w-full rounded-2xl border-apple-red/20 bg-white px-4 py-3 text-sm transition-colors focus:border-apple-red focus:ring-apple-red/30 dark:border-dark-surface dark:bg-dark-surface dark:text-dark-text"
            />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-600 dark:text-dark-muted">
            Topic
            <select className="mt-2 w-full rounded-2xl border-apple-red/20 bg-white px-4 py-3 text-sm transition-colors focus:border-apple-red focus:ring-apple-red/30 dark:border-dark-surface dark:bg-dark-surface dark:text-dark-text">
              <option>Wholesale inquiry</option>
              <option>Press</option>
              <option>Event request</option>
              <option>General question</option>
            </select>
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-600 dark:text-dark-muted">
            Message
            <textarea
              rows={5}
              className="mt-2 w-full rounded-2xl border-apple-red/20 bg-white px-4 py-3 text-sm transition-colors focus:border-apple-red focus:ring-apple-red/30 dark:border-dark-surface dark:bg-dark-surface dark:text-dark-text"
            />
          </label>
          <div className="mt-6">
            <Button type="submit">Send message</Button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="rounded-3xl bg-white/80 p-6 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-dark-text">FAQ</h3>
            <div className="mt-4">
              <AccordionFAQ items={faqs} />
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-apple-cream via-white to-apple-red/10 p-6 transition-colors duration-300 dark:from-dark-surface dark:via-dark-card dark:to-apple-red/5">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-dark-text">Follow along</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-dark-muted">
              Behind-the-scenes orchard stories, recipe reels, and seasonal drops.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-apple-red/20 bg-white px-4 py-2 text-sm font-semibold text-apple-red transition-all hover:bg-apple-red hover:text-white dark:border-apple-red/30 dark:bg-dark-surface dark:hover:bg-apple-red"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
