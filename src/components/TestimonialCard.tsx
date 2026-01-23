type TestimonialCardProps = {
  quote: string
  name: string
  role: string
}

const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl bg-white/80 p-6 shadow-soft transition-colors duration-300 dark:bg-dark-card/80 dark:shadow-dark-soft">
      <p className="text-sm leading-relaxed text-slate-700 dark:text-dark-muted">"{quote}"</p>
      <div className="mt-6">
        <p className="text-sm font-semibold text-slate-800 dark:text-dark-text">{name}</p>
        <p className="text-xs text-slate-500 dark:text-dark-muted">{role}</p>
      </div>
    </article>
  )
}

export default TestimonialCard
