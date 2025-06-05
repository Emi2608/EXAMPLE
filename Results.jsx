
import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, animate } from "framer-motion"
import { ArrowUpRight, Clock, DollarSign, Heart } from "lucide-react"

function Results() {
  const [clientCount, setClientCount] = useState(0)
  const [productivityPercentage, setProductivityPercentage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef(null)
  const circleRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && !isAnimating) {
      setIsAnimating(true)

      // Animate client counter
      animate(0, 20, {
        duration: 1.5,
        onUpdate: (value) => setClientCount(Math.floor(value)),
      })

      // Animate productivity percentage
      animate(0, 75, {
        duration: 2,
        onUpdate: (value) => setProductivityPercentage(Math.floor(value)),
      })
    }
  }, [isInView, isAnimating])

  const circumference = 2 * Math.PI * 36
  const offset = circumference - (productivityPercentage / 100) * circumference

  const metrics = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Tiempo Ahorrado",
      value: "66%",
      description: "menos tiempo en tareas administrativas"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Costos Reducidos",
      value: "40%",
      description: "reducción en costos operativos"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Satisfacción",
      value: "95%",
      description: "de clientes satisfechos"
    }
  ]

  const cases = [
    {
      client: "CAM Irapuato",
      before: "30 horas/semana en tareas administrativas",
      after: "10 horas/semana y respuesta en <1 hora",
      improvement: "↓66% tiempo, ↓40% costos"
    },
    {
      client: "Fundación Hackminds",
      before: "Procesos manuales, baja eficiencia",
      after: "Automatización completa de flujos",
      improvement: "↑25% productividad"
    }
  ]

  return (
    <section ref={sectionRef} id="resultados" className="py-20 bg-black relative overflow-hidden">
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
            La plataforma que llevará tu negocio al <span className="gradient-text">siguiente nivel</span>
          </h2>
          <div className="flex justify-center items-center gap-16 mt-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-2 gradient-text counter-animation">
                {clientCount}+
              </div>
              <p className="text-white/70">Clientes Satisfechos</p>
            </motion.div>
            <div className="text-center relative">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="36"
                  stroke="#1a1a1a"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  ref={circleRef}
                  cx="48"
                  cy="48"
                  r="36"
                  stroke="url(#blue-gradient)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className="progress-circle circle-animation"
                />
                <defs>
                  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0033CC" />
                    <stop offset="100%" stopColor="#00A3FF" />
                  </linearGradient>
                </defs>
              </svg>
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl font-bold">{productivityPercentage}%</span>
              </motion.div>
              <p className="text-white/70 mt-2">Aumento de Productividad</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0033CC]/10 to-[#00A3FF]/5 rounded-xl p-8 text-center"
            >
              <div className="mb-4 text-[#00A3FF] flex justify-center">{metric.icon}</div>
              <h3 className="text-3xl font-bold mb-2 gradient-text">{metric.value}</h3>
              <p className="text-lg font-semibold mb-2">{metric.title}</p>
              <p className="text-white/70">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0033CC]/10 to-[#00A3FF]/5 rounded-xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{case_.client}</h3>
                <ArrowUpRight className="w-6 h-6 text-[#00A3FF]" />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60">Antes:</p>
                  <p className="text-lg">{case_.before}</p>
                </div>
                <div>
                  <p className="text-white/60">Después:</p>
                  <p className="text-lg">{case_.after}</p>
                </div>
                <div className="pt-4">
                  <p className="text-xl font-semibold gradient-text">{case_.improvement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
