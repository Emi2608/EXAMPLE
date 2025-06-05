
import React from "react"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import CorporateAI from "@/components/CorporateAI"
import HowItWorks from "@/components/HowItWorks"
import Results from "@/components/Results"
import Clients from "@/components/Clients"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <CorporateAI />
        <Features />
        <HowItWorks />
        <Results />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
