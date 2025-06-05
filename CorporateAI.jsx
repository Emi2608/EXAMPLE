
import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

function CorporateAI() {
  const [count, setCount] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const targetCount = 20
  const controls = useAnimation()

  useEffect(() => {
    if (count < targetCount) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + 1, targetCount))
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [count])

  useEffect(() => {
    if (percentage < 75) {
      const timer = setTimeout(() => {
        setPercentage(prev => Math.min(prev + 1, 75))
      }, 30)
      return () => clearTimeout(timer)
    }
  }, [percentage])

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,51,204,0.1),transparent)]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Descubre la IA Corporativa para Tu{" "}
            <span className="gradient-text">Negocio</span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-12">
            La IA Corporativa lleva la tecnología de las grandes corporaciones a las PYMES. 
            Ofrecemos sistemas de IA 100% personalizables, adaptados a tus procesos operativos 
            a bajo costo. Aumenta tu productividad, atrae más clientes, reduce tu inversión y 
            libera tiempo y estrés con una solución elegante y eficiente.
          </p>

          <motion.div
            className="relative rounded-xl overflow-hidden mb-16 max-w-5xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0ab336cd-f87a-4e8c-aacc-11d04814e566/47adb13fc7443cb0b81e2c087568cdcf.png"
              alt="Plataforma de IA Corporativa"
              className="w-full rounded-xl border-2 border-[#007BFF]/30"
            />
          </motion.div>
          
          <p className="text-2xl font-semibold bg-gradient-to-r from-[#007BFF] to-[#00c6ff] bg-clip-text text-transparent mb-16">
            La plataforma que llevará tu negocio al siguiente nivel
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#007BFF]/10 to-transparent p-6 rounded-xl border border-[#007BFF]/30"
            >
              <div className="text-3xl font-bold text-[#007BFF] mb-2">{count}+</div>
              <p className="text-white/80">Clientes Satisfechos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#007BFF]/10 to-transparent p-6 rounded-xl border border-[#007BFF]/30"
            >
              <div className="relative h-20 w-20 mx-auto mb-2">
                <svg className="transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#444"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#007BFF"
                    strokeWidth="3"
                    strokeDasharray={`${percentage}, 100`}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-[#007BFF]">
                  {percentage}%
                </div>
              </div>
              <p className="text-white/80">Aumento de Productividad</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#007BFF]/10 to-transparent p-6 rounded-xl border border-[#007BFF]/30"
            >
              <div className="h-6 bg-[#444] rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: "100%" }}
                  whileInView={{ width: "30%" }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-[#007BFF]"
                />
              </div>
              <p className="text-white/80">Reducción de Inversión</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#007BFF]/10 to-transparent p-6 rounded-xl border border-[#007BFF]/30"
            >
              <div className="flex justify-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-4xl mb-2"
                >
                  😊
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  className="text-4xl mb-2"
                >
                  <Clock className="w-8 h-8 text-[#007BFF]" />
                </motion.div>
              </div>
              <p className="text-white/80">Tiempo y Estrés Liberado</p>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Button 
              className="button-gradient text-xl px-10 py-7 relative group overflow-hidden"
              onClick={() => window.location.href = "https://studio.pickaxe.co/STUDIOXJRBMGDG55R6OJW"}
            >
              <span className="relative z-10 flex items-center gap-2">
                Probar beta 1.0
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CorporateAI
