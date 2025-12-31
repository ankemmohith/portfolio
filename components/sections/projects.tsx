import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ArrowRight, Code } from "lucide-react"

const projectsList = [
  {
    title: "MongoDB Sharded Cluster Deployment on AWS",
    description: "Deployed and configured a sharded MongoDB cluster with three shards and a replica set of three config servers, ensuring scalability and fault tolerance using AWS EC2 instances.",
    link: "https://github.com/MohithAnkem/MongoDB-Sharded-Cluster-Deployment-on-AWS",
    technologies: ["MongoDB", "AWS", "Python"],
    achievements: [
      "Deployed and configured a <strong>sharded MongoDB cluster</strong> with three shards and a replica set of three config servers, ensuring <strong>scalability and fault tolerance</strong> using AWS EC2 instances.",
      "Implemented <strong>sharding strategies</strong> with hash-based shard keys to evenly distribute data across shards, optimizing <strong>query performance and data storage</strong>.",
    ],
    highlights: "Scalability & Fault Tolerance",
  },
  {
    title: "Spotify 2.0 Clone Using React and Redux",
    description: "Built a full-featured music streaming application with state management using React and Redux, featuring responsive UI with Tailwind CSS.",
    link: "https://github.com/MohithAnkem/Spotify-Clone-using-React",
    technologies: ["React", "Redux", "CSS", "RapidAPI"],
    achievements: [
      "Gained expertise in creating <strong>React functional components</strong> and their efficient reusability. Utilized <strong>MERN Stack and Redux Toolkit</strong> for efficient application state management, ensuring smooth data flow.",
      "Applied proficiency in developing <strong>responsive user interfaces</strong> by leveraging the power of <strong>Tailwind CSS</strong>. Demonstrated the ability to seamlessly retrieve data from diverse sources using <strong>RapidAPI</strong>.",
    ],
    highlights: "Full Stack Development",
  },
  {
    title: "AI-Driven Text Summarization using Feature Modelling",
    description: "Developed an AI-powered text summarization tool using NLP techniques and machine learning models including Word2Vec, BERT, and TFHub.",
    link: "https://github.com/MohithAnkem/News-Summarization-using-Feature-Selection",
    technologies: ["Python", "Machine Learning", "AI", "NLP"],
    achievements: [
      "Spearheaded development of an <strong>AI-powered text summarization tool</strong> leveraging <strong>NLP techniques and machine learning models</strong>, including Word2Vec, BERT, and TFHub, to distill essential information from the News sports dataset.",
      "Utilized <strong>Python</strong> for scripting and to conduct business analytics and data science tasks, <strong>Gensim</strong> for Word2Vec implementation, and <strong>TensorFlow</strong> for integrating pre-trained models from TFHub.",
    ],
    highlights: "AI/ML Integration",
  },
  {
    title: "API Rate Limiter: Token Bucket",
    description:
      "Built a production-grade API rate limiter using token bucket and sliding window algorithms with Redis and Nginx to enforce per-user, per-IP, and global quotas.",
    link: "https://github.com/MohithAnkem",
    technologies: ["Node.js", "Express", "Redis", "Docker", "Nginx"],
    achievements: [
      "Built a production-grade <strong>API rate limiter</strong> using <strong>token bucket</strong> and <strong>sliding window</strong> algorithms, enforcing per-user, per-IP, and global quotas with Redis-backed <strong>atomic Lua scripts</strong> for consistency across multiple servers.",
      "Implemented a full throttling workflow with <strong>HTTP 429 responses</strong>, <strong>X-RateLimit headers</strong>, dynamic configuration, whitelisting, and monitoring dashboards to track abuse patterns and protect against automated attacks.",
    ],
    highlights: "High-Throughput API Protection",
  },
  {
    title: "Time Series-Based Landslide Prediction using Reinforcement Learning & ML",
    description:
      "Developed a time-series landslide prediction system using environmental sensor data, reinforcement learning for dynamic feature selection, and machine learning models for accurate forecasting.",
    link: "https://github.com/MohithAnkem/Landslide_Prediction_CS_297",
    technologies: ["Python", "Machine Learning", "Reinforcement Learning", "Time Series"],
    achievements: [
      "Developed a time-series <strong>landslide prediction system</strong> using environmental sensor data, applying <strong>reinforcement learning</strong> for dynamic <strong>feature selection</strong> and achieving <strong>97.31% accuracy</strong> with Random Forest.",
      "Compared traditional machine learning and <strong>deep learning models (CNN-LSTM)</strong>, demonstrating improved generalization and reduced overfitting using adaptively selected features over static methods.",
    ],
    highlights: "Reinforcement Learning for Feature Selection",
  },
  {
    title: "Task Management Application Using React and TypeScript",
    description:
      "Built a full-stack task management system with secure authentication, role-based access control, and a responsive front-end for managing tasks.",
    link: "https://github.com/MohithAnkem/lumaa-spring-2025-swe",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "Bcrypt",
    ],
    achievements: [
      "Developed a <strong>full-stack task management system</strong> with user authentication using <strong>JWT</strong> and <strong>Bcrypt</strong>, exposing secure API endpoints for task CRUD operations.",
      "Implemented <strong>role-based access control</strong> ensuring only authenticated users can manage tasks, leveraging <strong>Nest.js, PostgreSQL, and TypeORM migrations</strong>, and efficiently handling state management and API calls for an improved user experience.",
    ],
    highlights: "Secure Full-Stack Task Management",
  },
  {
    title: "Real-Time Stock Trading Engine",
    description:
      "Developed a high-performance, low-latency real-time stock trading engine in C++ for rapid market data ingestion, concurrent order processing, and deterministic order matching.",
    link: "https://github.com/MohithAnkem/Real_Time_Stock_Trading_Engine",
    technologies: ["C++", "Multithreading", "Low-latency Systems", "Networking", "Algorithms"],
    achievements: [
      "Engineered a <strong>low-latency, high-throughput trading engine</strong> in <strong>C++</strong>, built for real-time market data ingestion and deterministic order matching as part of an Onymos assessment.",
      "Implemented <strong>multithreaded order processing</strong> with optimized concurrency and memory management to minimize latency and improve throughput, demonstrating strong systems and performance engineering skills.",
    ],
    highlights: "Low-Latency C++ Trading System",
  },
  {
    title: "Connect4 Game in Python using AI",
    description:
      "Implemented an interactive Connect Four game with a Tkinter GUI and an AI opponent using Minimax with alpha-beta pruning for competitive play.",
    link: "https://github.com/MohithAnkem/Connect-4-Game-using-Python",
    technologies: ["Python", "Tkinter", "Game AI", "Minimax", "Alpha-Beta Pruning"],
    achievements: [
      "Built an interactive <strong>Connect Four game</strong> with a responsive <strong>Tkinter GUI</strong>, restart support, and smooth user interactions for competitive human vs AI play.",
      "Engineered a strong AI opponent using <strong>Minimax with alpha-beta pruning</strong>, tactical pre-checks, and a custom heuristic over a robust 6x7 game engine to deliver smart, efficient move selection.",
    ],
    highlights: "Interactive Game AI — Minimax + Alpha-Beta",
  },
  {
    title: "Airline Reservation System in C# and .NET",
    description:
      "Implemented a comprehensive airline reservation system with booking, management, and tracking of flights and passenger information using C# and .NET.",
    link: "https://github.com/KetakiDeoskar/Team1_AirLine_Reservation_System",
    technologies: ["C#", ".NET", "Windows Forms", "SQL Server"],
    achievements: [
      "Implemented an <strong>end-to-end airline reservation platform</strong> with user-friendly UIs for passengers and admins to search, book, cancel, and manage flights backed by robust business logic for schedules, seats, and fares.",
      "Designed a secure, <strong>role-based C#/.NET backend</strong> with authentication/authorization, normalized <strong>SQL Server</strong> schema, admin tools, and transaction-safe operations for reliable, enterprise-style reservation workflows.",
    ],
    highlights: "Enterprise-Grade C# Reservation System",
  },
]

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A selection of my projects showcasing expertise in full-stack development, cloud infrastructure, and AI/ML systems.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {projectsList.map((project, index) => (
            <Card key={index} className="group card-hover overflow-hidden">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
                  <div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-teal-400/10 text-teal-400 rounded-full border border-teal-400/20">
                      {project.highlights}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-teal-400 text-sm">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <span className="text-teal-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: achievement }} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-md border border-gray-700 hover:border-teal-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-800 bg-gray-900/40 px-6 py-4 flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="gap-1 text-teal-300 hover:text-teal-100 hover:bg-teal-400/10"
                >
                  <Link
                    href={project.link || "https://github.com/MohithAnkem"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">More projects coming soon! Check out my GitHub for my latest work.</p>
          <Button size="lg" asChild>
            <Link href="https://github.com/MohithAnkem" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              View GitHub Profile
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}