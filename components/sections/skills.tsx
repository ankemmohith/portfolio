import { Code, Layout, Server, Brain, Cloud, Database } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "📘" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "C#", icon: "💜" },
    ],
  },
  {
    title: "Libraries",
    icon: Server,
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Angular", icon: "🅰️" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Flask", icon: "🍶" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "Redux", icon: "🔄" },
      { name: "GraphQL", icon: "◈" },
    ],
  },
  {
    title: "Tools & Frameworks",
    icon: Layout,
    skills: [
      { name: "Spring Boot", icon: "🍃" },
      { name: "Pandas", icon: "🐼" },
      { name: "Excel", icon: "📊" },
      { name: "Numpy", icon: "🔢" },
      { name: "Tensorflow", icon: "🧠" },
      { name: "Git", icon: "📝" },
      { name: "Android", icon: "🤖" },
      { name: "JIRA", icon: "🎯" },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    skills: [
      { name: "MySQL", icon: "🐬" },
      { name: "MS SQL", icon: "💾" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Neo4J", icon: "🕸️" },
      { name: "Oracle", icon: "📖" },
      { name: "NoSQL", icon: "🔑" },
      { name: "DynamoDB", icon: "⚡" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🟦" },
      { name: "Google Cloud", icon: "🌈" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚓" },
      { name: "Terraform", icon: "🏗️" },
      { name: "GitLab CI", icon: "🔄" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            I build scalable systems using a modern tech stack spanning full-stack development, cloud infrastructure, and data systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-teal-400/5"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-400/10 rounded-lg flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                    <Icon size={20} className="text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 p-3 bg-gray-700/30 rounded-lg hover:bg-teal-400/10 transition-colors"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}