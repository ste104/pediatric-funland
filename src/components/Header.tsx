import { Baby, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Baby className="h-8 w-8 text-primary animate-float" />
            <span className="text-2xl font-bold text-primary">PediaKids</span>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>

          <nav className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-center gap-6 p-4 md:p-0`}>
            <a href="#inicio" className="text-gray-600 hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="text-gray-600 hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="text-gray-600 hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-600 hover:text-primary transition-colors">Contato</a>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Agende uma Consulta
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;