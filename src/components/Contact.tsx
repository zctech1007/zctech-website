import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyznwebr"); 

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco e vamos discutir como podemos ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-brand-soft hover:shadow-brand-medium transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                  Informações de Contato
                </h3>               
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:dev.zctech@gmail.com" 
                        className="text-primary font-semibold hover:text-primary-light transition-colors"
                      >
                        dev.zctech@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Instagram</p>
                      <a 
                        href="https://www.instagram.com/zeccompany" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:text-primary-light transition-colors"
                      >
                        @zeccompanny
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/company/z-c-tech/?viewAsMember=truee" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:text-primary-light transition-colors"
                      >
                        Z&C TECH Company
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="border-0 shadow-brand-soft bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4">Por que nos escolher?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Experiência comprovada em desenvolvimento de software</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Tecnologias modernas e metodologias ágeis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Suporte completo durante todo o projeto</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Entrega no prazo com qualidade garantida</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-brand-soft hover:shadow-brand-medium transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                Envie sua Mensagem
              </h3>
              
              {state.succeeded ? (
                <p className="text-green-600 font-semibold">Mensagem enviada! Entraremos em contato em breve.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border-2 focus:border-accent focus:ring-accent"
                      placeholder="Seu nome completo"
                    />
                    <ValidationError prefix="Nome" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border-2 focus:border-accent focus:ring-accent"
                      placeholder="seu@email.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border-2 focus:border-accent focus:ring-accent resize-none"
                      placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                    />
                    <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent-glow text-accent-foreground py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-brand-medium hover:shadow-brand-glow"
                    disabled={state.submitting}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;