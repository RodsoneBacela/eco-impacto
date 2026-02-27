import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart,
  Leaf,
  UserCheck,
  Award,
  Lightbulb,
  Shield,
  ArrowRight,
  Users,
  BookOpen,
  TrendingUp,
  Globe2,
  CheckCircle2
} from "lucide-react";

export function About() {

  const timeline = [
    {
      year: "2020",
      title: "Fundação",
      description: "Início da EcoImpacto Academy com foco em formação prática e contextualizada",
    },
    {
      year: "2021",
      title: "Expansão Digital",
      description: "Lançamento da plataforma online de e-learning",
    },
    {
      year: "2022",
      title: "Parcerias Internacionais",
      description: "Estabelecimento de parcerias com instituições internacionais",
    },
    {
      year: "2023",
      title: "Certificação Regional",
      description: "Reconhecimento como centro de formação de excelência na região",
    },
    {
      year: "2024",
      title: "Crescimento Sustentável",
      description: "Mais de 1,500 profissionais formados e expansão para novos países",
    },
  ];

  const team = [
    {
      name: "Dra. Amélia Santos",
      role: "Directora Executiva",
      description: "Especialista em Desenvolvimento Sustentável com 15 anos de experiência",
      image: "https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NzIwNjU3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2563eb] to-[#10b981] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Sobre Nós
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              EcoImpacto
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Somos uma plataforma de formação especializada que oferece cursos práticos e inovadores nas áreas social, ambiental e de saúde e segurança ocupacional.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-t-4 border-[#2563eb]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-[#2563eb]" size={32} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Nossa Missão</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Capacitar pessoas e instituições através de formações acessíveis, práticas e contextualizadas, promovendo o desenvolvimento sustentável, a justiça social e a segurança nas comunidades e locais de trabalho.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#10b981]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-[#10b981]" size={32} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Nossa Visão</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ser a plataforma de referência em formação de qualidade nas áreas social, ambiental e de segurança em Moçambique e além-fronteiras, contribuindo para a transformação de comunidades e organizações.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Na EcoImpacto Academy, acreditamos que a transformação social e ambiental começa pelo conhecimento. Fundada por um grupo de especialistas com vasta experiência em projetos de desenvolvimento em África, nossa academia nasceu da necessidade de oferecer formações práticas e contextualizadas.
                </p>
                <p>
                  O nosso propósito é formar profissionais, líderes comunitários e organizações para que possam gerir projetos de impacto, implementar salvaguardas sociais e ambientais, promover ambientes de trabalho mais seguros e contribuir para um desenvolvimento sustentável em Moçambique e além-fronteiras.
                </p>
                <p>
                  Todos os nossos cursos são construídos a partir de experiências reais em terreno, alinhados às melhores práticas internacionais e adaptados à realidade africana. Trabalhamos com uma rede de instrutores experientes que combinam conhecimento académico com experiência prática.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1590084700235-5e5b781e05b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMG1vemFtYmlxdWUlMjBhZnJpY2F8ZW58MXx8fHwxNzcyMTMzOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community development"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos valores fundamentais guiam cada decisão e ação que tomamos, moldando nossa cultura e nossa abordagem à educação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-[#2563eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="text-[#2563eb]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Impacto Social</h3>
                    <p className="text-gray-600">
                      Trabalhamos para gerar mudanças positivas e duradouras nas comunidades.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#10b981] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-[#10b981]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
                    <p className="text-gray-600">
                      Promovemos práticas responsáveis que respeitam o ambiente e a sociedade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#f97316] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserCheck className="text-[#f97316]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inclusão</h3>
                    <p className="text-gray-600">
                      Valorizamos a diversidade, a igualdade de gênero e a participação de todos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#2563eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-[#2563eb]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Excelência</h3>
                    <p className="text-gray-600">
                      Garantimos qualidade e rigor em todos os nossos cursos e serviços.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#10b981] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="text-[#10b981]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inovação</h3>
                    <p className="text-gray-600">
                      Incorporamos tecnologias e metodologias modernas para enriquecer a aprendizagem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#f97316] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-[#f97316]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ética e Transparência</h3>
                    <p className="text-gray-600">
                      Atuamos com integridade, responsabilidade e respeito.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#f97316] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte da Nossa Missão
          </h2>
          <p className="text-lg md:text-xl mb-4 text-white/90">
            Junte-se a nós na construção de um futuro mais sustentável e justo.
          </p>
          <p className="text-lg mb-8 text-white/90">
            Descubra como nossos cursos podem transformar sua carreira e impacto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#2563eb] hover:bg-gray-100"
            >
              Explorar Cursos
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-white/10 hover:bg-white hover:text-[#2563eb]"
            >
              Contactar-nos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}