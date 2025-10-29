import { Card } from "@/components/ui/card"
import { Code2, Rocket, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código mantível, escalável e seguindo as melhores práticas da indústria.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimizo aplicações para máxima velocidade e eficiência em todos os dispositivos.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho bem em equipe, comunicando ideias técnicas de forma clara e efetiva.",
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Sou um desenvolvedor apaixonado por criar soluções digitais que fazem a diferença. Com experiência em
              desenvolvimento front-end e back-end, transformo ideias em realidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-muted-foreground leading-relaxed">
              Nos últimos anos, trabalhei em diversos projetos desafiadores, desde startups inovadoras até grandes
              empresas. Minha jornada no desenvolvimento web me ensinou a importância de equilibrar funcionalidade,
              design e performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Quando não estou codificando, você pode me encontrar explorando novas tecnologias, contribuindo para
              projetos open source, ou compartilhando conhecimento com a comunidade dev.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
