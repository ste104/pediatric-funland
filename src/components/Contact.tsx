import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Entre em Contato
            </h2>
            <p className="text-gray-600 mb-8">
              Estamos aqui para responder suas dúvidas e agendar consultas. Entre em contato conosco!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-600">(11) 1234-5678</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-600">contato@pediakids.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-600">Rua da Saúde, 123 - São Paulo, SP</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <Input placeholder="Nome completo" />
              </div>
              <div>
                <Input type="email" placeholder="E-mail" />
              </div>
              <div>
                <Input placeholder="Telefone" />
              </div>
              <div>
                <Textarea placeholder="Mensagem" className="h-32" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;