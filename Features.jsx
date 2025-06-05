
import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageSquare, Settings, Users, Zap } from "lucide-react"

function Features() {
  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Procesos Internos",
      description: "Automatiza inventarios, facturación y coordinación para ahorrar tiempo y reducir estrés."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Relaciones con Clientes",
      description: "Mejora la comunicación, responde rápido y fideliza con facilidad."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Comunicación Inteligente",
      description: "Chatbots personalizados que entienden y responden como tu mejor empleado."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización Total",
      description: "Integración perfecta con tus herramientas actuales (WhatsApp, email, POS)."
    }
  ]

  return (
    <section id="qué-es" className="py-20 bg-black relative overflow-hidden">
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
            Tu equipo virtual, <span className="gradient-text">100% personalizado</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            La Inteligencia Corporativa de E-vior Developments es una plataforma de IA que 
            revoluciona cómo las PYMES operan. Con agentes virtuales personalizados, optimizamos 
            cada aspecto de tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0033CC]/10 to-[#00A3FF]/5 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="mb-4 text-[#00A3FF]">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
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
              Tú sigues siendo el cerebro de tu negocio
            </h3>
            <p className="text-lg text-white/80 mb-6">
              Decides y apruebas lo que la IA hace, mientras lideras con más libertad.
              Nuestra tecnología te empodera, no te reemplaza.
            </p>
            <Button className="button-gradient text-lg px-8 py-6">
              Conoce más
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
