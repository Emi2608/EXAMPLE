
import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

function Clients() {
  const testimonials = [
    {
      name: "Jimena Cuen",
      position: "Directora, CAM Irapuato",
      quote: "La automatización nos permitió enfocarnos en lo que realmente importa: nuestros clientes.",
      logo: "https://storage.googleapis.com/hostinger-horizons-assets-prod/0ab336cd-f87a-4e8c-aacc-11d04814e566/d0d4fe109d5b206da1a906f6be223524.png",
      href: "https://www.camirapuato.com"
    },
    {
      name: "David Castillo",
      position: "Fundador, Hackminds",
      quote: "Nuestra productividad aumentó significativamente desde que implementamos la plataforma.",
      logo: "https://storage.googleapis.com/hostinger-horizons-assets-prod/0ab336cd-f87a-4e8c-aacc-11d04814e566/5315cc791290db14157b66f781e26131.png",
      href: "https://e-vior-developments-x-hackminds-innovacion-y-t-mnlqqb5mzein3yg9.builder-preview.com"
    }
  ]

  return (
    <section id="clientes" className="py-20 bg-gradient-to-b from-[#0033CC] to-black relative">
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
            Negocios transformados
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empresas que ya están experimentando el poder de la Inteligencia Corporativa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.logo}
                  alt={testimonial.name}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-white/60">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-lg text-white/80 italic">"{testimonial.quote}"</p>
              <a 
                href={testimonial.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[#00A3FF] hover:text-[#0033CC] transition-colors"
              >
                Ver más →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#0033CC]/20 to-[#00A3FF]/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-lg text-white/80 mb-6">
              Únete a las empresas que ya están aprovechando el poder de la IA
            </p>
            <Button 
              className="button-gradient text-lg px-8 py-6"
              onClick={() => window.location.href = "https://studio.pickaxe.co/STUDIOXJRBMGDG55R6OJW"}
            >
              Comienza Ahora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients
