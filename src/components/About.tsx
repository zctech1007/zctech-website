import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-heading">
              Somos a <span className="text-accent">Z&C TECH</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nossa missão é ir além do código, construindo <strong className="text-primary">parcerias duradouras</strong> com nossos clientes para solucionar desafios complexos e impulsionar o crescimento através da tecnologia.
              </p>
              
              <p>
                Nossa equipe de especialistas dedicados trabalha em sinergia para entregar soluções que realmente fazem a diferença. Combinamos <strong className="text-primary">experiência técnica</strong> com <strong className="text-primary">visão estratégica</strong> para criar produtos digitais que transformam negócios.
              </p>
              
              <p>
                Na Z&C TECH, acreditamos que cada projeto é único e merece uma abordagem personalizada. Por isso, investimos tempo para entender profundamente as necessidades de cada cliente, garantindo que cada linha de código contribua para seus objetivos de negócio.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-secondary rounded-xl hover:shadow-brand-soft transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground font-bold text-xl">💡</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Inovação</h3>
                <p className="text-sm text-muted-foreground">Tecnologias de ponta para soluções modernas</p>
              </div>
              
              <div className="text-center p-6 bg-secondary rounded-xl hover:shadow-brand-soft transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground font-bold text-xl">🤝</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Parceria</h3>
                <p className="text-sm text-muted-foreground">Relacionamentos duradouros e transparentes</p>
              </div>
              
              <div className="text-center p-6 bg-secondary rounded-xl hover:shadow-brand-soft transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground font-bold text-xl">🎯</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Qualidade</h3>
                <p className="text-sm text-muted-foreground">Excelência em cada detalhe do projeto</p>
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-primary rounded-3xl p-2 shadow-brand-strong">
                <img
                  src={teamPhoto}
                  alt="Equipe Z&C TECH trabalhando em projetos inovadores"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
          
              
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-brand-medium">
                <div className="text-center">
                  <div className="text-3xl font-bold">+1
                  </div>
                  <div className="text-sm font-medium">Ano de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;