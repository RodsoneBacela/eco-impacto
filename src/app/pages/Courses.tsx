import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { 
  BookOpen,
  Clock,
  Users,
  Award,
  Search,
  Filter,
  Star,
  Play,
  CheckCircle2,
  Globe,
  Leaf,
  Shield,
  Heart,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Fundamentos e Práticas em Exploração e Mineração Sustentável",
    description: "Domine as técnicas modernas de mineração sustentável, gestão ambiental e implementação de salvaguardas sociais em projetos de mineração.",
    image: "https://images.unsplash.com/photo-1667844551497-686b8847986f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1pbmluZyUyMGVudmlyb25tZW50JTIwYWZyaWNhfGVufDF8fHx8MTc3MjEzMzk2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sustentabilidade",
    level: "Intermediário",
    duration: "8 semanas",
    students: 245,
    rating: 4.8,
    price: "15.000 MZN",
    color: "green",
  },
  {
    id: 2,
    title: "Gestão de Salvaguardas Sociais e Ambientais",
    description: "Aprenda a implementar e monitorar salvaguardas sociais e ambientais em conformidade com padrões internacionais (IFC, Banco Mundial).",
    image: "https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBkZXZlbG9wbWVudCUyMGNvbW11bml0eSUyMHByb2plY3QlMjBhZnJpY2F8ZW58MXx8fHwxNzcyMTM1NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Social",
    level: "Avançado",
    duration: "10 semanas",
    students: 189,
    rating: 4.9,
    price: "18.000 MZN",
    color: "blue",
  },
  {
    id: 3,
    title: "Segurança e Saúde Ocupacional - SST",
    description: "Formação completa em sistemas de gestão de SST, identificação de riscos, e implementação de medidas preventivas no ambiente de trabalho.",
    image: "https://images.unsplash.com/photo-1764154739233-659b2681d162?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50JTIwd29ya2VyfGVufDF8fHx8MTc3MjEzNTc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Segurança",
    level: "Intermediário",
    duration: "6 semanas",
    students: 312,
    rating: 4.7,
    price: "12.000 MZN",
    color: "orange",
  },
  {
    id: 4,
    title: "Gestão Ambiental e Avaliação de Impactos",
    description: "Desenvolva competências em avaliação de impactos ambientais, elaboração de Planos de Gestão Ambiental e monitoramento de conformidade.",
    image: "/roya-ann-miller-MWzWYV2jCfM-unsplash.jpg",
    category: "Ambiental",
    level: "Intermediário",
    duration: "8 semanas",
    students: 198,
    rating: 4.8,
    price: "15.000 MZN",
    color: "green",
  },
  {
    id: 5,
    title: "Engajamento Comunitário e Resolução de Conflitos",
    description: "Técnicas práticas de engajamento comunitário, gestão de expectativas e mediação de conflitos em contextos de desenvolvimento.",
    image: "https://images.unsplash.com/photo-1590084700235-5e5b781e05b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMG1vemFtYmlxdWUlMjBhZnJpY2F8ZW58MXx8fHwxNzcyMTMzOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Social",
    level: "Básico",
    duration: "5 semanas",
    students: 267,
    rating: 4.6,
    price: "10.000 MZN",
    color: "blue",
  },
];

const categories = [
  { name: "Todos", icon: BookOpen, count: 6 },
  { name: "Sustentabilidade", icon: Leaf, count: 2 },
  { name: "Social", icon: Heart, count: 2 },
  { name: "Segurança", icon: Shield, count: 1 },
  { name: "Ambiental", icon: Globe, count: 1 },
  { name: "Saúde", icon: Award, count: 1 },
];

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sustentabilidade":
      case "Ambiental":
        return "bg-[#10b981] text-white";
      case "Social":
      case "Saúde":
        return "bg-[#2563eb] text-white";
      case "Segurança":
        return "bg-[#f97316] text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#10b981] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Nossos Cursos
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Formações especializadas em sustentabilidade, desenvolvimento social e segurança ocupacional
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Pesquisar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-white text-gray-900 border-0 focus-visible:ring-2 focus-visible:ring-[#f97316]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="text-gray-500 flex-shrink-0" size={20} />
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category.name
                      ? "bg-[#2563eb] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={16} />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'Curso Encontrado' : 'Cursos Encontrados'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getCategoryColor(course.category)}>
                      {course.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="lg" className="bg-white text-[#2563eb] hover:bg-gray-100">
                      <Play className="mr-2" size={20} />
                      Ver Prévia
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="text-[#f97316] fill-[#f97316]" size={16} />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-2xl font-bold text-[#2563eb]">{course.price}</p>
                    </div>
                    <Button className="bg-[#2563eb] hover:bg-[#1e40af] text-white">
                      Inscrever-se
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Nenhum curso encontrado
              </h3>
              <p className="text-gray-500">
                Tente ajustar seus filtros ou termo de pesquisa
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Você Recebe
            </h2>
            <p className="text-lg text-gray-600">
              Cada curso inclui recursos completos para seu desenvolvimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="text-[#2563eb]" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Aulas em Vídeo</h3>
              <p className="text-gray-600 text-sm">
                Conteúdo em vídeo de alta qualidade
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-[#10b981]" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Material Didático</h3>
              <p className="text-gray-600 text-sm">
                PDFs, guias e recursos adicionais
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#f97316]" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Certificado</h3>
              <p className="text-gray-600 text-sm">
                Certificação reconhecida ao concluir
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#2563eb]" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Suporte</h3>
              <p className="text-gray-600 text-sm">
                Acesso a instrutores e comunidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563eb] to-[#10b981] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto Para Começar?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Escolha seu curso e comece sua jornada de transformação hoje mesmo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#2563eb] hover:bg-gray-100">
              Ver Todos os Cursos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-[#2563eb]">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
