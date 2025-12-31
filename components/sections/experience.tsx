import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Research Assistant",
    company: "San Jose State University",
    location: "San Jose, CA",
    period: "July 2025 - Present",
    duration: "Current",
    type: "Research",
    description: "Conducting advanced research on Landslide Prediction by engineering ML pipelines and integrating neural networks for terrain analysis.",
    achievements: [
      "Conducting advanced research on <strong>Landslide Prediction</strong> by engineering <strong>ML pipelines</strong> in Python, integrating CNN–LSTM models for image-based terrain analysis and combining them with structured environmental datasets.",
      "Implementing <strong>reinforcement-learning–based feature selection</strong> and optimized training workflows using <strong>TensorFlow, PyTorch, and scikit-learn</strong>, improving <strong>model accuracy</strong> and reducing <strong>training time</strong> through automated preprocessing.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Capgemini (Client - RexelUSA)",
    location: "Hyderabad, India",
    period: "July 2020 - July 2023",
    duration: "3 years",
    type: "Full-time",
    description: "Built and optimized distributed microservices architectures handling high-traffic systems with 1000+ concurrent users globally.",
    achievements: [
      "Migrated a legacy system to a <strong>distributed microservices architecture</strong> using <strong>Java, Spring Boot and PostgreSQL</strong>, boosting <strong>work efficiency by 40%</strong> and supporting <strong>1,000+ concurrent global users</strong>.",
      "Optimized <strong>server-side performance by 30%</strong> through multi-threading and concurrency control, enabling seamless processing of <strong>1M+ data requests</strong> daily.",
      "Developed a <strong>React toolkit with 30+ customizable options</strong>, enabling product owners and developers to autonomously create projects, reducing <strong>developer involvement by 90%</strong>.",
      "Implemented <strong>connection pooling and query caching</strong> in PostgreSQL, integrated <strong>Apache Kafka</strong> for real-time message processing, handling <strong>40,000+ messages per second</strong> and enhancing <strong>system resilience by 50%</strong>.",
      "Resolved <strong>Redis standby mode issues</strong> during high traffic by implementing <strong>rate limiting (Token Bucket Algorithm)</strong>, keeping CPU consumption under 70% and improving system stability.",
      "Configured <strong>Jenkins CI/CD pipelines</strong> to automate SDLC for 7 microservices, managing containerized workloads using <strong>AWS ECS</strong>, achieving <strong>99.9% uptime</strong> and improved scalability.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Exposys Data Labs",
    location: "Remote",
    period: "Jan 2020 - Apr 2020",
    duration: "4 months",
    type: "Internship",
    description: "Built responsive web dashboards for visualizing AI/ML model predictions and system performance metrics.",
    achievements: [
      "Built <strong>responsive web dashboards</strong> using <strong>React and JavaScript</strong> to visualize model predictions and system performance metrics, improving <strong>accessibility of AI research outputs</strong> for non-technical users.",
      "Integrated <strong>RESTful APIs</strong> with front-end components to display real-time inference results and sensor data, enabling interactive exploration of computer vision and ML experiments.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group card-hover">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-teal-400 mb-2">{exp.company}</CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-400/10 text-teal-400 border border-teal-400/20">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-teal-400 text-sm">Key Achievements & Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <span className="text-teal-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: achievement }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}