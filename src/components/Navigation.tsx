import logo from "@/assets/logo-new.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Z&C TECH Logo" 
              className="h-10 w-10 rounded-full shadow-brand-medium hover:shadow-brand-glow transition-all duration-300 hover:scale-105"
            />
            <span className="ml-3 text-lg font-semibold text-foreground">Z&C TECH</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-foreground hover:text-accent transition-colors duration-300">
              Início
            </a>
            <a href="#portfolio" className="text-foreground hover:text-accent transition-colors duration-300">
              Portfólio
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors duration-300">
              Sobre
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors duration-300">
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;