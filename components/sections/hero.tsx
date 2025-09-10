"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 coffee-gradient opacity-50" />

      <div
        className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-primary/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-2 h-2 bg-primary/25 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-foreground mb-6 text-balance">Your Name</h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Creative Designer & Developer crafting beautiful digital experiences with passion and precision
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 hover-lift"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-muted px-8 py-3 bg-transparent hover-lift"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}

export default Hero
