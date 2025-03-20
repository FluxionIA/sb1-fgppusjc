import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, Database, Cog, LineChart, MessageCircle, Link2, CheckCircle2, Headphones, Puzzle, UserPlus, Code, Target, Lightbulb, Calendar, Mail, Phone, MapPin, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Creación de Agentes de IA",
      description: "Desarrollo de asistentes virtuales que pueden gestionar tareas repetitivas y mejorar la eficiencia operativa.",
      icon: <Bot className="w-12 h-12 text-indigo-400" />,
      metrics: "+120% productividad, +100% tiempo ahorrado",
      benefits: [
        "Empleados virtuales operativos 24/7",
        "Aprendizaje y mejora continua"
      ]
    },
    {
      title: "Desarrollo de Modelos RAGs",
      description: "Implementación de sistemas de Generación Aumentada por Recuperación para mejorar la precisión de respuestas basadas en datos internos.",
      icon: <Database className="w-12 h-12 text-indigo-400" />,
      metrics: "+80% precisión, +60% eficiencia informativa",
      benefits: [
        "Optimización del flujo de información",
        "Respuestas precisas y basadas en conocimiento empresarial"
      ]
    },
    {
      title: "Automatización de Procesos",
      description: "Identificación y automatización de tareas repetitivas para liberar tiempo y recursos humanos.",
      icon: <Cog className="w-12 h-12 text-indigo-400" />,
      metrics: "-50% costos operativos, +80% eficiencia",
      benefits: [
        "Eliminación de tareas manuales y errores",
        "Procesos más rápidos y rentables"
      ]
    },
    {
      title: "Análisis Predictivo con IA",
      description: "Uso de algoritmos de IA para analizar tendencias y predecir comportamientos futuros en el negocio.",
      icon: <LineChart className="w-12 h-12 text-indigo-400" />,
      metrics: "+90% precisión en predicciones, +70% optimización estratégica",
      benefits: [
        "Mejor toma de decisiones basada en datos",
        "Reducción de riesgos y optimización de estrategias"
      ]
    },
    {
      title: "Chatbots y Soporte Automatizado",
      description: "Implementación de chatbots avanzados para mejorar la atención al cliente y reducir costos operativos.",
      icon: <MessageCircle className="w-12 h-12 text-indigo-400" />,
      metrics: "+24/7 atención al cliente, +60% reducción en costos de soporte",
      benefits: [
        "Respuestas instantáneas sin intervención humana",
        "Personalización y aprendizaje basado en interacciones"
      ]
    },
    {
      title: "Integración de IA en Software Empresarial",
      description: "Adaptación de inteligencia artificial en plataformas empresariales existentes para mejorar su rendimiento.",
      icon: <Link2 className="w-12 h-12 text-indigo-400" />,
      metrics: "+100% compatibilidad, +50% eficiencia operativa",
      benefits: [
        "Integración sin interrupciones en sistemas actuales",
        "Mejora en la eficiencia operativa y toma de decisiones"
      ]
    }
  ];

  const benefits = [
    {
      title: "Soporte 24/7",
      description: "Ofrecemos un servicio de asistencia técnica y mantenimiento disponible las 24 horas del día, los 7 días de la semana. Nuestro equipo de soporte especializado garantiza que sus sistemas de inteligencia artificial funcionen sin interrupciones, resolviendo cualquier incidencia en tiempo real. Ya sea que necesite ayuda con la configuración, monitoreo o resolución de problemas, nuestro equipo está listo para asistirle a cualquier hora del día.",
      icon: <Headphones className="w-16 h-16 text-[#4A90E2] group-hover:text-[#6C63FF] transition-colors duration-300" />
    },
    {
      title: "Integraciones Flexibles",
      description: "Nuestros sistemas de inteligencia artificial están diseñados para adaptarse y conectarse sin complicaciones con sus herramientas empresariales existentes. Desde plataformas CRM y ERP hasta sistemas personalizados, garantizamos una integración fluida y sin fricciones. Automatice sus flujos de trabajo sin necesidad de reemplazar su infraestructura actual, mejorando así la eficiencia y maximizando la inversión en tecnología.",
      icon: <Puzzle className="w-16 h-16 text-[#6C63FF] group-hover:text-[#00FF99] transition-colors duration-300" />
    },
    {
      title: "Equipo Experto",
      description: "Contamos con un equipo altamente capacitado en inteligencia artificial, machine learning y automatización de procesos. Nuestros expertos han trabajado en una amplia variedad de sectores, desde el financiero hasta el tecnológico, asegurando soluciones a medida para cada cliente. Nuestro compromiso es brindar estrategias innovadoras y personalizadas, optimizando su empresa con las últimas tendencias en IA.",
      icon: <UserPlus className="w-16 h-16 text-[#00FF99] group-hover:text-[#4A90E2] transition-colors duration-300" />
    }
  ];

  const aboutSections = [
    {
      title: "Quiénes Somos",
      description: "Somos una empresa argentina especializada en automatización de procesos mediante inteligencia artificial. Nuestro objetivo es ayudar a otras empresas a optimizar sus operaciones mediante soluciones innovadoras basadas en IA y machine learning. Nos enfocamos en el desarrollo de herramientas eficientes que ahorran tiempo, reducen costos y potencian la productividad empresarial.",
      icon: <Code className="w-16 h-16 text-[#4A90E2]" />
    },
    {
      title: "Nuestra Experiencia",
      description: "Contamos con un equipo de expertos en Python y Machine Learning, con amplia experiencia en la implementación de modelos predictivos, asistentes virtuales, automatización de flujos de trabajo y análisis de datos. Hemos trabajado con diversas industrias, desde tecnología hasta finanzas, proporcionando soluciones adaptadas a cada necesidad empresarial.",
      icon: <Target className="w-16 h-16 text-[#6C63FF]" />
    },
    {
      title: "Nuestra Misión",
      description: "Creemos en el poder de la inteligencia artificial para transformar negocios. Nuestra misión es democratizar la automatización y hacer que la IA sea accesible para empresas de todos los tamaños. Diseñamos soluciones que se integran fácilmente con herramientas ya existentes y que generan impacto real en la productividad.",
      icon: <Lightbulb className="w-16 h-16 text-[#00FF99]" />
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 shadow-lg h-16' 
          : 'bg-black/80 h-20'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2">
                <Bot className="h-8 w-8 text-indigo-400" />
                <span className="text-white font-bold text-xl">FluxionIA</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                ['Inicio', '#inicio'],
                ['Sobre Nosotros', '#nosotros'],
                ['Servicios', '#servicios'],
                ['Contacto', '#contacto']
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              ))}
              <a
                href="https://calendar.app.google/tEcd2TN4mw5t4hsk8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium transition-all duration-200 hover:bg-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5"
              >
                Agendar Llamada
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-gray-700">
            {[
              ['Inicio', '#inicio'],
              ['Sobre Nosotros', '#nosotros'],
              ['Servicios', '#servicios'],
              ['Contacto', '#contacto']
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="https://calendar.app.google/tEcd2TN4mw5t4hsk8"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Llamada
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="inicio" className="relative bg-black overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Transforme su negocio</span>
                  <span className="block text-indigo-400">con Inteligencia Artificial</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Desarrollamos soluciones de IA personalizadas que impulsan la eficiencia y el crecimiento de su empresa.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a 
                      href="https://calendar.app.google/tEcd2TN4mw5t4hsk8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      <Calendar className="w-5 h-5 mr-2 text-white" />
                      Agendar una llamada
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt="Digital Network Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:via-black/30"></div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="nosotros" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(74, 144, 226, 0.1) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4 font-montserrat [text-shadow:_0_0_30px_rgb(74_144_226_/_0.3)]">
              Sobre Nosotros
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Equipo de desarrollo"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-indigo-500/30 shadow-xl">
                <Code className="w-12 h-12 text-[#4A90E2]" />
                <p className="text-[#4A90E2] font-mono mt-2">Python & ML</p>
              </div>
            </div>

            <div className="space-y-12">
              {aboutSections.map((section, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-[#4A90E2]/30 transition-all duration-300 hover:transform hover:translate-x-2"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#4A90E2] transition-colors duration-300">
                        {section.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="servicios" className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Servicios</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Soluciones de IA a su medida
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <div className="relative bg-gray-800 rounded-xl p-6 h-full hover:shadow-xl transition-shadow duration-300 border border-indigo-500/30 hover:border-indigo-500/60 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-2 bg-indigo-500/20 rounded-lg">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      </div>

                      <p className="text-gray-300 mb-6">{service.description}</p>

                      <div className="bg-indigo-500/10 rounded-lg p-4 mb-6">
                        <p className="text-lg font-semibold text-indigo-400">{service.metrics}</p>
                      </div>

                      <div className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contacto" className="relative py-24 bg-[#0a0f1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-[#00ffa3] mb-4 [text-shadow:_0_0_30px_rgb(0_255_163_/_0.5)]">
              Contacto
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Estamos listos para ayudarte a transformar tu empresa con IA
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Form */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Agenda una Consulta</h3>
              <p className="text-gray-300 mb-8">
                La manera más rápida de ponerte en contacto con nosotros es agendar una consulta gratuita. Durante esta sesión, podremos discutir tus necesidades específicas y cómo podemos ayudarte a implementar soluciones de IA que transformen tu negocio.
              </p>
              <p className="text-gray-300 mb-8">
                Nuestro equipo de expertos está listo para analizar tu situación actual y ofrecerte recomendaciones personalizadas que maximicen el impacto de la IA en tu empresa.
              </p>
              <a
                href="https://calendar.app.google/tEcd2TN4mw5t4hsk8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-[#00ffa3] rounded-lg hover:bg-[#00ffa3]/90 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,163,0.3)] hover:shadow-[0_0_30px_rgba(0,255,163,0.5)]"
              >
                <Calendar className="w-6 h-6 mr-2" />
                Agendar Consulta Gratuita
              </a>
            </div>

            {/* Right Column - Contact Information */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ffa3] to-[#00ffa3]/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#0d1829] rounded-xl p-8 space-y-8">
                <h3 className="text-3xl font-bold text-white mb-8">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:fluxionia@gmail.com"
                    className="flex items-center space-x-4 text-gray-300 hover:text-[#00ffa3] transition-colors duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-[#0a0f1c] group-hover:bg-[#00ffa3]/10">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p>fluxionia@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.link/jgvhxu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-300 hover:text-[#00ffa3] transition-colors duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-[#0a0f1c] group-hover:bg-[#00ffa3]/10">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p>+54 1123158036</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 text-gray-300 group">
                    <div className="p-3 rounded-full bg-[#0a0f1c] group-hover:bg-[#00ffa3]/10">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p>Buenos Aires, Argentina</p>
                    </div>
                  </div>

                  <a 
                    href="https://www.instagram.com/fluxion.ia?igsh=MTl2NjV3NXRtc3NnMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-300 hover:text-[#00ffa3] transition-colors duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-[#0a0f1c] group-hover:bg-[#00ffa3]/10">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p>@Fluxion.ia</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 AICompany. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;