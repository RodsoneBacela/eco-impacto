import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#10b981] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contacto
            </h1>
            <p className="text-xl text-blue-100">
              Estamos aqui para ajudar. Envie-nos uma mensagem e responderemos o mais breve possível.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 mb-16">
            <Card className="border-t-4 border-[#2563eb] shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[#2563eb]" size={28} />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:info@ecoimpacto.co.mz" 
                  className="text-[#2563eb] hover:underline"
                >
                  info@ecoimpacto.co.mz
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  suporte@ecoimpacto.co.mz
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#10b981] shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-[#10b981]" size={28} />
                </div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-gray-700">+258 84 123 4567</p>
                <p className="text-sm text-gray-500 mt-1">
                  +258 87 765 4321
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#f97316] shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#f97316]" size={28} />
                </div>
                <h3 className="font-semibold mb-2">Localização</h3>
                <p className="text-gray-700">Av. Julius Nyerere, 1234</p>
                <p className="text-sm text-gray-500 mt-1">
                  Cidade de Tete, Moçambique
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#2563eb] shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-[#2563eb]" size={28} />
                </div>
                <h3 className="font-semibold mb-2">Horário</h3>
                <p className="text-gray-700">Segunda - Sexta</p>
                <p className="text-sm text-gray-500 mt-1">
                  08:00 - 17:00
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envie-nos uma Mensagem
                </h2>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e nossa equipe entrará em contacto consigo em breve.
                </p>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle2 className="text-green-600" size={24} />
                  <div>
                    <p className="font-semibold text-green-900">Mensagem Enviada!</p>
                    <p className="text-sm text-green-700">Entraremos em contacto em breve.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">Nome *</Label>
                    <Input
                      id="firstName"
                      placeholder="Seu nome"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apelido *</Label>
                    <Input
                      id="lastName"
                      placeholder="Seu apelido"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+258 84 123 4567"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    placeholder="Como podemos ajudar?"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[#2563eb] hover:bg-[#1e40af] text-white"
                >
                  <Send className="mr-2" size={20} />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-[#2563eb] to-[#10b981] text-white">
                <CardContent className="p-8">
                  <MessageSquare size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Precisa de Ajuda Imediata?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Nossa equipe está pronta para responder suas perguntas sobre cursos, inscrições e certificações.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-blue-100">Ligue agora</p>
                        <p className="font-semibold">+258 84 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-blue-100">Email direto</p>
                        <p className="font-semibold">info@ecoimpacto.co.mz</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Siga-nos nas Redes Sociais</h3>
                  <p className="text-gray-600 mb-6">
                    Mantenha-se atualizado com as últimas novidades, cursos e oportunidades.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#2563eb] text-white rounded-full flex items-center justify-center hover:bg-[#1e40af] transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#0077b5] text-white rounded-full flex items-center justify-center hover:bg-[#006399] transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Perguntas Frequentes</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Quanto tempo leva para receber uma resposta?</h4>
                      <p className="text-sm text-gray-600">
                        Normalmente respondemos dentro de 24 horas úteis.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Posso visitar o escritório?</h4>
                      <p className="text-sm text-gray-600">
                        Sim! Agende uma visita através do telefone ou email.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Oferecem consultoria personalizada?</h4>
                      <p className="text-sm text-gray-600">
                        Sim, oferecemos consultoria para empresas e organizações.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
