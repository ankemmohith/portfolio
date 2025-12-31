"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Code } from "lucide-react"

const typingStrings = [
  "Full Stack Software Engineer.",
  "MSCS Graduate from SJSU.",
  "Building Scalable Systems.",
  "Distributed Systems Architect.",
  "Backend Engineering Enthusiast.",
  "Cloud-Native & Microservices.",
  "Java | Python | TypeScript.",
]

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MohithAnkem",
    icon: Github,
    label: "Visit Mohith's GitHub profile",
    hoverColor: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohith-ankem-linkedin",
    icon: Linkedin,
    label: "Connect with Mohith on LinkedIn",
    hoverColor: "hover:text-blue-500",
  },
  {
    name: "Email",
    href: "mailto:mohith.ankem@gmail.com",
    icon: Mail,
    label: "Send Mohith an email",
    hoverColor: "hover:text-teal-400",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/MohithAnkem/",
    icon: Code,
    label: "View Mohith's LeetCode profile",
    hoverColor: "hover:text-yellow-400",
  },
]

export function Hero() {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentString = typingStrings[currentStringIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentStringIndex((prev) => (prev + 1) % typingStrings.length)
      } else {
        setCurrentText(
          isDeleting
            ? currentString.substring(0, currentText.length - 1)
            : currentString.substring(0, currentText.length + 1),
        )
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentStringIndex])

  const scrollToExperience = () => {
    const element = document.getElementById("experience")
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi! I'm <span className="gradient-text whitespace-nowrap">Mohith Ankem</span>.
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 min-h-[2.5rem] lg:min-h-[3rem]">
                A{" "}
                <span className="text-teal-400 font-medium">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <div className="inline-block px-4 py-2 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full border border-teal-400/30 animate-pulse">
                <p className="text-sm sm:text-base text-teal-300 font-semibold">✨ Open for Software Engineer Roles</p>
              </div>

              <p className="text-lg text-gray-400 italic">
                "Resilient <strong>Backend Engineer</strong>, I believe in building for scale<br />
                whether it's <strong>Distributed Systems</strong> or my own career trajectory."
              </p>

              <p className="text-base sm:text-lg text-gray-500 flex items-center justify-center gap-2">
                <span>📍</span> United States
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={scrollToExperience} className="group" rightIcon={<ArrowRight size={18} />}>
                View My Experience
              </Button>
              <Button size="lg" variant="outline">
                <Link href="mailto:mohith.ankem@gmail.com" className="flex items-center gap-2">
                  <Mail size={18} />
                  Get in Touch
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`p-3 text-gray-400 ${link.hoverColor} transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full`}
                    aria-label={link.label}
                  >
                    <Icon size={24} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}