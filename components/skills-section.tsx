import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Infrastructure & Networking",
    color: "text-green-400",
    skills: [
      { name: "Cisco Networking", level: 95 },
      { name: "Windows Server", level: 90 },
      { name: "Prometheus/Grafana", level: 85 },
      { name: "Network Security", level: 92 },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "text-blue-400",
    skills: [
      { name: "AWS/Azure", level: 88 },
      { name: "Terraform", level: 85 },
      { name: "Docker/Kubernetes", level: 82 },
      { name: "CI/CD Pipelines", level: 90 },
    ],
  },
  {
    title: "AI & Machine Learning",
    color: "text-cyan-400",
    skills: [
      { name: "OpenAI/LLMs", level: 90 },
      { name: "TensorFlow/PyTorch", level: 85 },
      { name: "RAG Systems", level: 88 },
      { name: "Predictive Analytics", level: 82 },
    ],
  },
  {
    title: "Development",
    color: "text-purple-400",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "React/Next.js", level: 88 },
      { name: "Node.js", level: 85 },
    ],
  },
]

const certifications = ["CompTIA Security+", "CCNA", "AWS Solutions Architect", "Azure Fundamentals"]

export function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-mono text-green-400 mb-2">{"> cat /skills/expertise.json"}</div>
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cross-domain skills spanning legacy IT infrastructure to modern AI integration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-900 border-green-500">
              <CardHeader>
                <CardTitle className={`font-mono ${category.color}`}>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-mono text-sm">{skill.name}</span>
                        <span className="text-gray-400 font-mono text-sm">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-gray-800" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-900 border-cyan-500">
          <CardHeader>
            <CardTitle className="font-mono text-cyan-400 text-center">Professional Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  className="bg-cyan-600 text-black font-mono px-4 py-2 text-sm hover:bg-cyan-500 cursor-pointer"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
