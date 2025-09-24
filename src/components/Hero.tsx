import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M20 0v100M40 0v100M60 0v100M80 0v100M0 20h100M0 40h100M0 60h100M0 80h100'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading with Futuristic Design */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-tight font-heading animate-fade-in">
              <span className="block text-shadow mb-2">TRANSFORMANDO</span>
              <span className="block text-shadow relative">
                IDEIAS EM 
                <span className="relative ml-4">
                  <span className="text-accent glow-text">CÓDIGO</span>
                  <div className="absolute -inset-2 bg-accent/20 blur-xl rounded-lg"></div>
                </span>
              </span>
            </h1>
            
            {/* Subtitle with neon effect */}
            <div className="relative inline-block mt-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-accent uppercase tracking-wider animate-slide-up">
                ❮ SOLUÇÕES DIGITAIS PERSONALIZADAS /❯
              </h2>
              <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-lg"></div>
            </div>
          </div>

          {/* Company Introduction */}
          <div className="mb-12 animate-slide-up">
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 font-light tracking-wide">
              Seja bem-vindo(a) à
            </p>
            <div className="relative inline-block">
              <span className="text-4xl md:text-5xl font-bold text-accent tracking-wider">Z&C TECH</span>
              <div className="absolute -inset-2 bg-accent/20 blur-lg rounded-lg"></div>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/80 mt-4 font-light tracking-wide">
              Sua parceira em inovação tecnológica
            </p>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button 
              size="lg" 
              className="group relative bg-accent hover:bg-accent-glow text-accent-foreground px-10 py-5 text-lg font-semibold rounded-none border-2 border-accent hover:border-accent-glow transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">❮ VER PROJETOS /❯</span>
              <div className="absolute inset-0 bg-accent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group relative border-2 border-accent text-accent hover:bg-accent hover:text-background px-10 py-5 text-lg font-semibold rounded-none transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">❮ FALE CONOSCO /❯</span>
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-8 h-12 border-2 border-accent rounded-full flex justify-center bg-accent/10">
            <div className="w-1 h-4 bg-accent rounded-full mt-3 animate-pulse shadow-brand-glow"></div>
          </div>
          <div className="absolute -inset-2 bg-accent/20 blur-md rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;