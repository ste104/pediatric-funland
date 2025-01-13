import { MapPin, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section id="localizacao" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Onde Estamos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <p className="text-gray-600">(11) 99999-9999</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <p className="text-gray-600">contato@pediatrakids.com</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0998641721513!2d-46.65390548502184!3d-23.564611384681276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1645114574373!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="bg-secondary/20 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Horário de Atendimento</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Segunda a Sexta</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sábado</span>
                <span>08:00 - 12:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Domingo</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;