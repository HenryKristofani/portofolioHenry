"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const About = () => {
  const skills = [
    "UI/UX Design",
    "Frontend Development",
    "Brand Identity",
    "Typography",
    "Prototyping",
    "User Research",
    "React & Next.js",
    "Figma & Adobe Creative Suite",
  ]

  const experience = [
    {
      role: "Senior Designer",
      company: "Creative Studio",
      period: "2022 - Present",
      description:
        "Leading design projects for international clients, focusing on brand identity and digital experiences.",
    },
    {
      role: "Product Designer",
      company: "Tech Startup",
      period: "2020 - 2022",
      description: "Designed user interfaces for mobile and web applications, improving user engagement by 40%.",
    },
    {
      role: "Junior Designer",
      company: "Design Agency",
      period: "2018 - 2020",
      description: "Collaborated on various branding projects and learned the fundamentals of design thinking.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Passionate about creating meaningful digital experiences that connect with people
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              <div className="relative">
                <div className="w-full h-80 bg-card rounded-lg overflow-hidden">
                  <img
                    src="/professional-portrait-of-a-creative-designer-in-a-.jpg"
                    alt="Professional portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Hello! I'm a passionate designer and developer with over 5 years of experience creating digital
                  experiences that matter. My journey began with a love for both art and technology, which naturally led
                  me to the world of design.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe great design is not just about making things look beautiful—it's about solving problems,
                  telling stories, and creating connections between brands and their audiences. Every project is an
                  opportunity to craft something meaningful.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not designing, you can find me exploring coffee shops for inspiration, reading about design
                  trends, or experimenting with new creative techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-8 animate-slide-up">
            {/* Skills */}
            <Card className="p-6 bg-card border-border">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-secondary/10 text-secondary-foreground border-secondary/20 hover:bg-secondary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Experience */}
            <Card className="p-6 bg-card border-border">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{exp.role}</h4>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
