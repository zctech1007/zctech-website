import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Z&C TECH Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold">Z&C TECH</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Transformando ideias em código. Sua parceira em inovação tecnológica para 
              criar soluções digitais que impulsionam o crescimento do seu negócio.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/zeccompanny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground hover:bg-accent-glow transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/z-c-tech/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground hover:bg-accent-glow transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:dev.zctech@gmail.com"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground hover:bg-accent-glow transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-primary-foreground/60">Email</p>
                <a 
                  href="mailto:dev.zctech@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  dev.zctech@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60">Instagram</p>
                <a 
                  href="https://www.instagram.com/zeccompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  @zeccompanny
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Z&C TECH. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Desenvolvido pela equipe Z&C TECH
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;