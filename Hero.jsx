
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, Upload } from "lucide-react"

function Hero() {
  const [placeholder, setPlaceholder] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const texts = [
    "Prueba nuestra IA: pide un email para tu campaña de marketing...",
    "Prueba nuestra IA: crea una imagen para tu próxima presentación...",
    "Prueba nuestra IA: genera una presentación profesional..."
  ]

  useEffect(() => {
    const text = texts[currentTextIndex]
    
    if (isDeleting) {
      if (placeholder.length === 0) {
        setIsDeleting(false)
        setCurrentTextIndex((current) => (current + 1) % texts.length)
        setTypingSpeed(150)
      } else {
        const timeout = setTimeout(() => {
          setPlaceholder(text.substring(0, placeholder.length - 1))
        }, 50)
        return () => clearTimeout(timeout)
      }
    } else {
      if (placeholder === text) {
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setPlaceholder(text.substring(0, placeholder.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      }
    }
  }, [placeholder, currentTextIndex, isDeleting, typingSpeed])

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
        <div className="container mx-auto px-4 pt-20 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tu negocio, potenciado por{" "}
            <span className="gradient-text">IA</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-white/80 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Automatiza tus procesos, conecta con tus clientes y lidera con libertad.
            Todo en un solo lugar, 100% personalizado para ti.
          </motion.p>

          <motion.div
            className="max-w-4xl mx-auto bg-black/30 rounded-xl p-8 border border-[#0033CC]/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <textarea
              className="w-full h-40 bg-black/50 rounded-lg p-6 text-xl text-white placeholder-white/50 border border-[#00A3FF]/30 focus:outline-none focus:border-[#00A3FF] transition-colors mb-4"
              placeholder={placeholder}
              style={{ resize: "none" }}
            />
            <div className="flex gap-4 justify-end">
              <Button
                variant="outline"
                className="flex items-center gap-2 text-white hover:text-black"
              >
                <Upload className="w-5 h-5" />
                Añadir archivo
              </Button>
              <Button
                className="button-gradient flex items-center gap-2"
                onClick={() => window.location.href = "https://studio.pickaxe.co/STUDIOXJRBMGDG55R6OJW"}
              >
                <Send className="w-5 h-5" />
                Enviar
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              className="button-gradient text-lg px-8 py-6"
              onClick={() => window.location.href = "https://studio.pickaxe.co/STUDIOXJRBMGDG55R6OJW"}
            >
              Descubre Cómo
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 text-black bg-white hover:bg-white/90"
              onClick={scrollToDemo}
            >
              Ver Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="demo-section" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <iframe 
              src="https://studio.pickaxe.co/_embed/Z5PUJOX5T2?d=deployment-50839ed0-4f4b-4f38-9dcb-5b1d75ed6855" 
              style={{ width: '100%', height: '500px', maxWidth: '700px', borderRadius: '4px' }}
              frameBorder="0"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero
