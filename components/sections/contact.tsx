"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@yourname.com",
      href: "mailto:hello@yourname.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourname",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourname",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourname",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-permanent-marker text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border animate-slide-up">
            <h3 className="font-playfair font-permanent-marker text-2xl font-semibold text-foreground mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:ring-ring"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:ring-ring"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-input border-border focus:ring-ring"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-input border-border focus:ring-ring resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card className="p-8 bg-card border-border">
              <h3 className="font-playfair font-permanent-marker text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a href={info.href} className="text-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="font-playfair font-permanent-marker text-2xl font-semibold text-foreground mb-6">Follow Me</h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about design
                  and technology. Don't hesitate to reach out!
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Henry Kristofani. All rights reserved. Built with passion and lots of coffee.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
