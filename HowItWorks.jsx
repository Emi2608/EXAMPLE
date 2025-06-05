
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Bot, Cpu, MessageCircle } from "lucide-react"

function HowItWorks() {
  const steps = [
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Análisis Inicial",
      description: "Nuestros agentes estudian tus procesos y necesidades específicas"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Personalización",
      description: "Creamos modelos de IA adaptados a tu forma de trabajo"
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Integración",
      description: "Conectamos todo con tus herramientas actuales"
    }
  ]

  return (
    <section id="inteligencia-corporativa" className="py-20 bg-[#0033CC] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.2),transparent)]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Un sistema simple con resultados poderosos
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Nuestra plataforma une agentes de IA existentes con modelos personalizados 
            que creamos para ti, usando herramientas como GitHub Copilot, Google Colab, 
            Zapier y Make.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-8 backdrop-blur-sm relative z-10"
              >
                <div className="mb-6 text-[#00A3FF]">{step.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="hidden md:flex absolute items-center"
                  style={{
                    left: `${33.33 * (index + 1)}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '64px'
                  }}
                >
                  <ArrowRight className="w-16 h-16 text-[#00A3FF]" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-black/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Estos agentes:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <p className="text-lg text-white/80">
                  Analizan tus procesos y los automatizan
                </p>
              </div>
              <div className="p-4">
                <p className="text-lg text-white/80">
                  Gestionan comunicaciones con clientes y proveedores
                </p>
              </div>
              <div className="p-4">
                <p className="text-lg text-white/80">
                  Se integran a tus herramientas actuales
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
