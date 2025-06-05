
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import NewsletterModal from "@/components/NewsletterModal"
import MobileNav from "@/components/MobileNav"
import { ThemeToggle } from "@/components/ui/theme-toggle"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNewsletter, setShowNewsletter] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-sm" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0ab336cd-f87a-4e8c-aacc-11d04814e566/1b483e4fefee5abad9a5d39afe1d371f.png" 
              alt="E-vior Developments" 
              className="h-10" 
            />
            <span className="gradient-text text-xl font-bold hidden md:block">
              E-vior Developments
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Inicio", "Inteligencia Corporativa", "Resultados", "Clientes", "Contacto"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={item === "Inicio" ? "#" : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={item === "Inicio" ? scrollToTop : undefined}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Button 
                className="button-gradient"
                onClick={() => window.location.href = "https://studio.pickaxe.co/STUDIOXJRBMGDG55R6OJW"}
              >
                Prueba Gratis
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="md:text-black md:bg-white md:hover:bg-white/90 button-gradient md:!bg-none"
                onClick={() => setShowNewsletter(true)}
              >
                Registrarse
              </Button>
            </motion.div>
            <MobileNav 
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
              onOpen={() => setIsMobileMenuOpen(true)}
            />
          </div>
        </div>
      </motion.header>

      <NewsletterModal 
        isOpen={showNewsletter}
        onClose={() => setShowNewsletter(false)}
      />
    </>
  )
}

export default Header
