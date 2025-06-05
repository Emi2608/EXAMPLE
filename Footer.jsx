
import React from "react"
import { motion } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"

function Footer() {
  const socialLinks = [
    { icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ), href: "https://x.com/emilian28015211?s=21" },
    { icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/e_vior.developments?igsh=ZHluNXp2eGkyajU2" },
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/emiliano-castillo-040042336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" }
  ]

  const footerLinks = [
    { title: "Términos", href: "#" },
    { title: "Privacidad", href: "#" },
    { title: "Contacto", href: "#contacto" }
  ]

  return (
    <footer className="bg-black py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-6 md:mb-0"
          >
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0ab336cd-f87a-4e8c-aacc-11d04814e566/1b483e4fefee5abad9a5d39afe1d371f.png" 
              alt="E-vior Developments" 
              className="h-10" 
            />
            <span className="ml-2 text-xl font-bold gradient-text">
              E-vior Developments
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
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
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/60 mb-4 md:mb-0"
            >
              © 2025 E-vior Developments. Todos los derechos reservados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-6"
            >
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
