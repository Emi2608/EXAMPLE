
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Check, Bell, Calendar, Gift, Star, Users, Mail, TrendingUp, Zap } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { supabase } from "@/lib/supabase"

function NewsletterModal({ isOpen, onClose }) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: ""
  })
  const [showSuccess, setShowSuccess] = React.useState(false)
  const { toast } = useToast()

  const benefits = [
    {
      icon: <Bell className="w-5 h-5 text-[#007BFF]" />,
      text: "Recibe actualizaciones sobre los nuevos desarrollos de E-vior"
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#007BFF]" />,
      text: "Participa en eventos exclusivos"
    },
    {
      icon: <Star className="w-5 h-5 text-[#007BFF]" />,
      text: "Disfruta de webinars gratuitos de alto valor"
    },
    {
      icon: <Users className="w-5 h-5 text-[#007BFF]" />,
      text: "Conoce los próximos eventos online"
    },
    {
      icon: <Zap className="w-5 h-5 text-[#007BFF]" />,
      text: "Aprovecha descuentos exclusivos para desarrolladores"
    },
    {
      icon: <Gift className="w-5 h-5 text-[#007BFF]" />,
      text: "Obtén de regalo nuestra guía 'Transforma tu negocio con IA de 0 a 100'"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#007BFF]" />,
      text: "Recibe un correo semanal con tendencias empresariales en IA"
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([formData])

      if (error) throw error

      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        onClose()
      }, 3000)
    } catch (error) {
      toast({
        title: "Error al suscribirse",
        description: "Por favor, intenta nuevamente más tarde.",
        variant: "destructive"
      })
    }
  }

  if (!isOpen) return null

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center relative"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="mb-4 text-green-500">
            <Check className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Gracias por tu suscripción!
          </h3>
          <p className="text-gray-600">
            Revisa tu email y consulta cómo la IA puede transformar tu negocio
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-black rounded-xl border border-[#0033CC]/30 w-full max-w-6xl max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/60 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¡Suscríbete a la Newsletter de{" "}
              <span className="gradient-text">E-vior Developments!</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div>
                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  required
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] border border-[#0033CC]/30"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Ingresa tu email"
                  required
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] border border-[#0033CC]/30"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Ingresa tu número de teléfono o WhatsApp"
                  required
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] border border-[#0033CC]/30"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <Button 
                type="submit"
                className="w-full button-gradient text-lg py-6 relative group overflow-hidden"
              >
                <span className="relative z-10">Obtener</span>
                <div className="absolute inset-0 bg-white/20 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Button>
            </form>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-gradient-to-r from-[#0033CC]/10 to-transparent border border-[#0033CC]/30 hover:shadow-lg hover:shadow-[#0033CC]/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    {benefit.icon}
                    <p className="text-white">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0ab336cd-f87a-4e8c-aacc-11d04814e566/1aca30731abed61ebf398abcc7163094.png"
                alt="Guía Transforma tu negocio con IA"
                className="w-full rounded-xl border-2 border-[#0033CC]/30"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0ab336cd-f87a-4e8c-aacc-11d04814e566/ec102dff32aa7d57cabb8f744fa0afdd.png"
                alt="Trabajando con E-vior"
                className="w-full rounded-xl border-2 border-[#0033CC]/30"
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00A3FF] bg-clip-text text-transparent text-center mt-8"
            >
              Obtén de regalo nuestra guía: Transforma tu negocio con IA de 0 a 100
            </motion.h3>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default NewsletterModal
