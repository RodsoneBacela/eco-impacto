import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import { 
  BookOpen, 
  Users, 
  Award, 
  Globe, 
  Leaf, 
  UserCheck, 
  Target, 
  Lightbulb, 
  Shield,
  ArrowRight
} from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#10b981] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#f97316] hover:bg-[#ea580c] text-white mb-4">
                E-admin
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforme o Futuro com
                <span className="block text-[#34d399]">Conhecimento</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Formações práticas em sustentabilidade, desenvolvimento social e segurança ocupacional. 
                Capacitamos líderes para gerar impacto positivo em Moçambique e além.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cursos">
                  <Button 
                    size="lg" 
                    className="bg-[#f97316] hover:bg-[#ea580c] text-white w-full"
                  >
                    Explorar Cursos
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-[#2563eb]"
                >
                  Registrar
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/le.png"
                  alt="Learning platform"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* escolha Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a EcoImpacto Academy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma oferece uma experiência de aprendizagem única, focada no impacto real e no desenvolvimento sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-t-4 border-[#2563eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-[#2563eb]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cursos Práticos</h3>
                <p className="text-gray-600">
                  Formações baseadas em experiências reais e alinhadas às melhores práticas internacionais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#10b981] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-[#10b981]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comunidade Ativa</h3>
                <p className="text-gray-600">
                  Conecte-se com profissionais e líderes comunitários comprometidos com o impacto social.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#f97316] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-[#f97316]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certificação</h3>
                <p className="text-gray-600">
                  Obtenha certificados reconhecidos que validam suas competências e conhecimentos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#2563eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="text-[#2563eb]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Impacto Global</h3>
                <p className="text-gray-600">
                  Contribua para o desenvolvimento sustentável em Moçambique e além-fronteiras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trainamento Areas Section */}
      <section id="cursos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Áreas de Formação
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos cursos especializados nas áreas mais importantes para o desenvolvimento sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1667844551497-686b8847986f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1pbmluZyUyMGVudmlyb25tZW50JTIwYWZyaWNhfGVufDF8fHx8MTc3MjEzMzk2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mining course"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-[#10b981] text-white mb-3">Sustentabilidade</Badge>
                <h3 className="text-xl font-semibold mb-2">
                  Fundamentos e Práticas em Exploração e Mineração Sustentável
                </h3>
                <p className="text-gray-600 mb-4">
                  Aprenda técnicas modernas de mineração sustentável e gestão ambiental.
                </p>
                <Button variant="outline" className="w-full border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white">
                  Saber Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="/roya-ann-miller-MWzWYV2jCfM-unsplash.jpg"
                  alt="Ambiental course"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-[#f97316] text-white mb-3">Ambiental</Badge>
                <h3 className="text-xl font-semibold mb-2">
                  Gestão Ambiental e Avaliação de Impactos
                </h3>
                <p className="text-gray-600 mb-4">
                  Desenvolva competências em avaliação de impactos ambientais, elaboração de Planos de Gestão
                </p>
                <Button variant="outline" className="w-full border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white">
                  Saber Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1747699529551-a2d41eaebf93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBzYWZldHklMjBvY2N1cGF0aW9uYWwlMjBoZWFsdGh8ZW58MXx8fHwxNzcyMTMzOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Safety course"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-[#2563eb] text-white mb-3">Segurança</Badge>
                <h3 className="text-xl font-semibold mb-2">
                  Segurança e Saúde Ocupacional
                </h3>
                <p className="text-gray-600 mb-4">
                  Implemente práticas de segurança eficazes no ambiente de trabalho.
                </p>
                <Button variant="outline" className="w-full border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                  Saber Mais
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guiados por princípios sólidos que orientam nossa missão de transformação social e ambiental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cursos Práticos</h3>
              <p className="text-gray-600">
                Formações aplicadas com experiências reais do terreno.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
              <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center mb-4">
                <Leaf className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
              <p className="text-gray-600">
                Promovemos práticas responsáveis que respeitam o ambiente.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
              <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inclusão</h3>
              <p className="text-gray-600">
                Valorizamos a diversidade e igualdade de gênero.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excelência</h3>
              <p className="text-gray-600">
                Garantimos qualidade e rigor em todos os nossos cursos.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
              <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inovação</h3>
              <p className="text-gray-600">
                Incorporamos tecnologias modernas na aprendizagem.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
              <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ética e Transparência</h3>
              <p className="text-gray-600">
                Atuamos com integridade e responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#f97316] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Junte-se a centenas de profissionais que já transformaram suas carreiras e comunidades através dos nossos cursos especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#2563eb] hover:bg-gray-100"
            >
              Registrar Agora
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Link to="/cursos">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-white/10 hover:bg-white hover:text-[#2563eb] w-full"
              >
                Ver Cursos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}