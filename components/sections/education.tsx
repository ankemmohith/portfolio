import { GraduationCap, Calendar, MapPin, FileText, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const education = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    institution: "San Jose State University",
    period: "Aug 2023 - May 2025",
    location: "San Jose, CA",
    status: "Completed",
    type: "Master's Degree",
    gpa: "GPA: 3.8/4.0",
    coursework: "Database System Principles, Artificial Intelligence, Topics in Machine Learning, Mobile Development",
  },
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
    period: "Aug 2017 - May 2021",
    location: "Vijayawada, India",
    status: "Completed",
    type: "Bachelor's Degree",
    gpa: "GPA: 3.7/4.0",
    coursework: "Database Management Systems, Object Oriented Programming, Data Structures & Algorithms",
  },
]

const publications = [
  {
    title: "Time Series Modelling of Landslides using Reinforcement Learning for Feature Selection",
    conference: "2025 International Conference Automatics, Robotics and Artificial Intelligence (ICARAI), IEEE",
    year: "2025",
    link: "https://ieeexplore.ieee.org/document/11137887",
    icon: "🤖",
  },
  {
    title: "Classification and Prediction of Snake Species using Machine Learning",
    conference: "2021 2nd Global Conference for Advancement in Technology (GCAT), IEEE",
    year: "2021",
    link: "https://ieeexplore.ieee.org/document/9587711",
    icon: "🐍",
  },
]

const certifications = [
  {
    title: "Microsoft Azure Developer Associate",
    cert: "AZ-204",
    icon: "☁️",
  },
  {
    title: "Microsoft Azure Fundamentals",
    cert: "AZ-900",
    icon: "📘",
  },
]

export function Education() {
  return (
    <section id="education" className="section-padding bg-gray-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-teal-400 mb-8 text-center">Academic Background</h3>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="group card-hover">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-teal-400/10 rounded-xl flex items-center justify-center">
                          <GraduationCap size={24} className="text-teal-400" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                          <CardDescription className="text-lg font-medium text-teal-400 mb-2">
                            {edu.field}
                          </CardDescription>
                          <p className="text-gray-300 font-medium mb-2">{edu.institution}</p>
                          <p className="text-sm text-gray-400">{edu.coursework}</p>
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar size={16} className="mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                        <p className="text-sm font-semibold text-teal-400">{edu.gpa}</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400 border border-green-400/20">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-teal-400 mb-8 text-center">Published Papers</h3>
            <div className="grid gap-6">
              {publications.map((pub, index) => (
                <Card key={index} className="group card-hover">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="text-3xl">{pub.icon}</div>
                      <div className="flex-1">
                        <Link
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold text-teal-400 hover:text-teal-300 transition-colors mb-2 block"
                        >
                          {pub.title}
                        </Link>
                        <p className="text-gray-400 text-sm mb-2">{pub.conference}</p>
                        <div className="flex items-center gap-2">
                          <FileText size={16} className="text-gray-500" />
                          <span className="text-xs text-gray-500">{pub.year}</span>
                          <Link
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-teal-400 hover:text-teal-300 ml-2"
                          >
                            View on IEEE →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-8 text-center">Certifications</h3>
            <Card className="group card-hover">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-teal-400/5"
                    >
                      <Award size={24} className="text-teal-400 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-300 font-medium">{cert.title}</p>
                        <p className="text-xs text-gray-500">{cert.cert}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}