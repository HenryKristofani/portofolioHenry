"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const Portfolio = () => {
  const [filter, setFilter] = useState("all")

  const categories = [
    { id: "all", label: "All Work" },
    { id: "web", label: "Web Design" },
    { id: "branding", label: "Branding" },
    { id: "mobile", label: "Mobile Apps" },
  ]

  const projects = [
    {
      id: 1,
      title: "Coffee Shop Branding",
      category: "branding",
      description:
        "Complete brand identity design for a local artisan coffee shop including logo, packaging, and store design.",
      image: "/modern-coffee-shop-branding-design-with-elegant-.jpg",
      tags: ["Branding", "Logo Design", "Packaging"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      description:
        "Modern e-commerce website with clean design, intuitive navigation, and seamless checkout experience.",
      image: "/modern-e-commerce-website-design-with-clean-mi.jpg",
      tags: ["Web Design", "E-commerce", "UX/UI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Meditation Mobile App",
      category: "mobile",
      description:
        "Calming mobile app interface for meditation and mindfulness with soothing colors and intuitive flow.",
      image: "/meditation-mobile-app-interface-design-with-c.jpg",
      tags: ["Mobile Design", "UX/UI", "Wellness"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Restaurant Website",
      category: "web",
      description:
        "Elegant restaurant website featuring menu showcase, reservation system, and immersive food photography.",
      image: "/elegant-restaurant-website-design-with-warm-c.jpg",
      tags: ["Web Design", "Restaurant", "Photography"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Tech Startup Identity",
      category: "branding",
      description:
        "Modern brand identity for a tech startup including logo system, business cards, and digital assets.",
      image: "/modern-tech-startup-branding-design-with-mini.jpg",
      tags: ["Branding", "Tech", "Identity"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Comprehensive fitness app with workout tracking, progress visualization, and social features.",
      image: "/fitness-tracking-mobile-app-interface-design-.jpg",
      tags: ["Mobile Design", "Fitness", "Data Viz"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A collection of projects that showcase my passion for creating meaningful digital experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 transition-all duration-300 ${
                filter === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent border-border text-foreground hover:bg-muted"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-background text-foreground hover:bg-background/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-background text-foreground hover:bg-background/90"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary-foreground border-secondary/20 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Interested in working together?</p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Let's Create Something Amazing
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
