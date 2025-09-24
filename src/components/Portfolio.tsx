import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectFinancial from "@/assets/project-financial.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectEnterprise from "@/assets/project-enterprise.jpg";
import projectWebapp from "@/assets/project-webapp.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Aplicativo de E-commerce B2B",
      description: "Plataforma completa de vendas online com gestão avançada de produtos e pedidos",
      image: projectEcommerce,
      category: "E-commerce"
    },
    {
      id: 2,
      title: "Sistema de Gestão Financeira",
      description: "Dashboard completo para controle financeiro empresarial com relatórios em tempo real",
      image: projectFinancial,
      category: "Fintech"
    },
    {
      id: 3,
      title: "Aplicativo Mobile Corporativo",
      description: "App nativo para gestão de equipes e processos empresariais",
      image: projectMobile,
      category: "Mobile"
    },
    {
      id: 4,
      title: "Sistema Empresarial Integrado",
      description: "ERP customizado para otimização de processos e gestão empresarial",
      image: projectEnterprise,
      category: "Enterprise"
    },
    {
      id: 5,
      title: "Plataforma Web Colaborativa",
      description: "Sistema web para colaboração e gestão de projetos em tempo real",
      image: projectWebapp,
      category: "Web App"
    },
    {
      id: 6,
      title: "Sistema de Gestão Hospitalar",
      description: "Solução completa para gestão de pacientes e recursos hospitalares",
      image: projectHealthcare,
      category: "Healthcare"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
            Nossos Projetos e Produtos de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça algumas das soluções inovadoras que desenvolvemos para nossos clientes, 
            cada uma criada com tecnologia de ponta e foco na experiência do usuário.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-brand-soft hover:shadow-brand-strong transition-all duration-500 hover-lift"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 relative">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-brand-soft">
                    {project.category}
                  </div>

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-primary/80 transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center text-primary-foreground">
                        <h3 className="text-2xl font-bold mb-4 font-heading">
                          {project.title}
                        </h3>
                        <p className="text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info (Mobile) */}
                <div className="md:hidden p-6 bg-card">
                  <h3 className="text-xl font-bold text-primary mb-2 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Quer ver mais projetos ou discutir seu próximo projeto?
          </p>
          <button className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-brand-medium hover:shadow-brand-strong">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;