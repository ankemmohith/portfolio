import { Code, Server, Cloud, Database, Brain } from "lucide-react"

const highlights = [
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Microservices architectures, API design, and distributed system optimization",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Multi-cloud deployments with AWS, Azure, GCP, Docker & Kubernetes",
  },
  {
    icon: Database,
    title: "Data Systems",
    description: "Scalable SQL and NoSQL database solutions with optimization",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "End-to-end systems from API design to deployment and monitoring",
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description: "Integrating machine learning models into production systems",
  },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-teal-400/10 rounded-3xl mb-8 hover:bg-teal-400/20 transition-colors group">
              <Code className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              <p>
                I'm a <strong>Full Stack Software Engineer</strong> with a <strong>Master's degree in Computer Science</strong> from San José State University and <strong>3+ years of professional experience</strong> building and scaling distributed systems in real-world production environments.
              </p>
              <p>
                My work has centered around designing <strong>microservices-based architectures</strong>, building reliable <strong>backend systems</strong>, and deploying <strong>cloud-native applications</strong> that can handle high traffic and large volumes of data. I've worked extensively with <strong>event-driven systems, caching layers, relational databases, and CI/CD pipelines</strong> to deliver services that are resilient, performant, and easy to evolve over time.
              </p>
              <p>
                On the frontend, I enjoy crafting clean, responsive user experiences using modern frameworks, with a strong focus on usability and maintainability. I like working <strong>end-to-end</strong> — from API design and data flow to deployment and monitoring — because it helps me understand how systems behave as a whole, not just in isolation.
              </p>
              <p>
                I'm particularly interested in <strong>backend engineering, distributed systems, cloud infrastructure</strong>, and the growing intersection of software engineering with <strong>AI/ML-driven products</strong>. I care deeply about writing <strong>code that scales, systems that last, and solutions that actually solve problems</strong>.
              </p>
              <p>
                I'm currently open to <strong>internship, part-time, and full-time opportunities</strong> in Software Engineering and AI/ML-focused roles, where I can continue building impactful systems and learning from strong engineering teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
              {highlights.map((highlight) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={highlight.title}
                    className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-teal-400/5 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-400/20 transition-colors">
                      <Icon size={24} className="text-teal-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-400 mb-2 text-base">{highlight.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}