import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MohithAnkem",
    icon: Github,
    label: "Visit Mohith's GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohith-ankem",
    icon: Linkedin,
    label: "Connect with Mohith on LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:Mohith.Ankem@gmail.com",
    icon: Mail,
    label: "Send Mohith an email",
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center w-16 h-16 bg-primary-400/10 rounded-full">
            <span className="text-2xl font-bold text-teal-400">MA</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 text-gray-400 hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-full"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </Link>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Mohith Ankem. All rights reserved.</p>
            <p className="mt-1">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
