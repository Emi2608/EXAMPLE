
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

function MobileNav({ isOpen, onClose, onOpen }) {
  const menuItems = [
    { title: "Inicio", href: "#" },
    { title: "Inteligencia Corporativa", href: "#inteligencia-corporativa" },
    { title: "Resultados", href: "#resultados" },
    { title: "Clientes", href: "#clientes" },
    { title: "Contacto", href: "#contacto" }
  ]

  const socialLinks = [
    { 
      icon: <Twitter className="w-6 h-6" />, 
      href: "https://x.com/emilian28015211?s=21" 
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://www.linkedin.com/in/emiliano-castillo-040042336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      href: "https://www.instagram.com/e_vior.developments?igsh=ZHluNXp2eGkyajU2" 
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    onClose()
  }

  const handleNavClick = (href) => {
    if (href === "#") {
      scrollToTop()
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        onClose()
      }
    }
  }

  return (
    <>
      <button
        onClick={onOpen}
        className="md:hidden text-white/80 hover:text-white"
      >
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-nav"
          >
            <div className="mobile-nav-content">
              <div>
                <div className="flex justify-between items-center mb-8">
                  <img 
                    src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0ab336cd-f87a-4e8c-aacc-11d04814e566/1b483e4fefee5abad9a5d39afe1d371f.png" 
                    alt="E-vior Developments" 
                    className="h-10" 
                  />
                  <button
                    onClick={onClose}
                    className="text-white/80 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav>
                  <ul className="space-y-6">
                    {menuItems.map((item) => (
                      <li key={item.title}>
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="w-full text-left text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="space-y-6">
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <Button
                  className="button-gradient w-full py-6 text-lg"
                  onClick={() => {
                    window.location.href = "https://studio.pickaxe.co/STUDIOXJRBMGDG55R6OJW"
                    onClose()
                  }}
                >
                  Prueba Gratis
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNav
