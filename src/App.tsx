import { AnimatePresence } from "framer-motion"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import BackgroundDecor from "./components/BackgroundDecor"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ThemeToggle from "./components/ThemeToggle"
import { ThemeProvider } from "./context/ThemeContext"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Locations from "./pages/Locations"
import NotFound from "./pages/NotFound"
import OurStory from "./pages/OurStory"
import Products from "./pages/Products"
import RecipeDetail from "./pages/RecipeDetail"
import Recipes from "./pages/Recipes"
import { useEffect } from "react"

const ScrollToTop = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])
  return null
}

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative min-h-screen bg-apple-cream transition-colors duration-300 dark:bg-dark-bg">
          <BackgroundDecor />
          <Navbar />
          <ScrollToTop />
          <AnimatedRoutes />
          <Footer />
          <ThemeToggle />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
