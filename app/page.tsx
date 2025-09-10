import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Portfolio from "@/components/sections/portfolio"
import Contact from "@/components/sections/contact"
import Navigation from "@/components/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <ScrollToTop />
      </main>
    </>
  )
}
