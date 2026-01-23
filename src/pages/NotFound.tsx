import { Link } from "react-router-dom"
import PageTransition from "../components/PageTransition"

const NotFound = () => {
  return (
    <PageTransition className="space-y-4 text-center">
      <h1 className="text-4xl font-semibold text-slate-800 dark:text-dark-text">Page not found</h1>
      <p className="text-sm text-slate-600 dark:text-dark-muted">That page wandered off to the orchard.</p>
      <Link to="/" className="text-sm font-semibold text-apple-red">
        Return home
      </Link>
    </PageTransition>
  )
}

export default NotFound
