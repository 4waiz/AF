type TagPillProps = {
  label: string
  tone?: "light" | "solid"
}

const TagPill = ({ label, tone = "light" }: TagPillProps) => {
  const classes =
    tone === "solid"
      ? "bg-apple-red text-white"
      : "bg-white/80 text-apple-red border border-apple-red/20 dark:bg-dark-surface/80 dark:border-apple-red/30"

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors ${classes}`}>
      {label}
    </span>
  )
}

export default TagPill
