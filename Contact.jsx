
import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, MessageSquare, ArrowRight } from "lucide-react"

function Contact() {
  const contactOptions = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agenda una Demo",
      description: "Conoce cómo podemos transformar tu negocio",
      action: "Agendar Ahora",
      href: "https://tally.so/r/w8r6RO"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Prueba Gratis",
      description: "Experimenta el poder de la IA sin compromiso",
      action: "Comenzar",
      href: "https://studio.pickaxe.co/STUDIOXJRBMGDG55R6OJW"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Contáctanos",
      description: "Resolvemos todas tus dudas",
      action: "Enviar Mensaje",
      href: "https://wa.me/message/O776JEHOXDIUF1"
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,51,204,0.1),transparent)]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Empieza hoy mismo
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Descubre cómo la Inteligencia Corporativa puede transformar tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="contact-background bg-gradient-to-br from-[#0033CC]/10 to-[#00A3FF]/5 rounded-xl"
              />
              <motion.div
                className="contact-button bg-gradient-to-br from-[#0033CC]/10 to-[#00A3FF]/5 rounded-xl p-8 text-center h-full relative z-10"
              >
                <div className="mb-6 text-[#00A3FF] flex justify-center">{option.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
                <p className="text-white/70 mb-6">{option.description}</p>
                <Button 
                  className="button-gradient w-full"
                  onClick={() => window.location.href = option.href}
                >
                  {option.action}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#0033CC]/20 to-[#00A3FF]/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes preguntas específicas?
            </h3>
            <p className="text-lg text-white/80 mb-6">
              Nuestro equipo está listo para ayudarte a encontrar la mejor solución para tu negocio
            </p>
            <Button 
              className="button-gradient text-lg px-8 py-6"
              onClick={() => window.location.href = "https://wa.me/message/O776JEHOXDIUF1"}
            >
              Contáctanos
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
