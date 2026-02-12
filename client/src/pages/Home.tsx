/**
 * Home Page - Metal Haus S.A. de C.V.
 * Design: Neo-Industrial Brutalism
 * - Hero con imagen dramática de fundición
 * - Secciones con cortes diagonales
 * - Certificación ISO destacada
 * - Valores y servicios con diseño angular
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Shield,
  Recycle,
  Award,
  Factory,
  Users,
  Target,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Home() {
  // Scroll animations for each section
  const nosotrosAnim = useScrollAnimation();
  const valoresAnim = useScrollAnimation();
  const serviciosAnim = useScrollAnimation();
  const calidadAnim = useScrollAnimation();
  const contactoAnim = useScrollAnimation();
  const galeriaAnim = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.55)), url('https://private-us-east-1.manuscdn.com/sessionFile/qv2XytMXTKXFaJ3UWdKpyO/sandbox/QaOzXAS9j3sllyHLzsuYEH-img-1_1770714387000_na1fn_bWV0YWwtaGF1cy1oZXJvLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcXYyWHl0TVhUS1hGYUozVVdkS3B5Ty9zYW5kYm94L1FhT3pYQVM5ajNzbGx5SEx6c3VZRUgtaW1nLTFfMTc3MDcxNDM4NzAwMF9uYTFmbl9iV1YwWVd3dGFHRjFjeTFvWlhKdkxXSm4ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qkaMALhXytZYHHeidBqGfUHQa96bbip46d3IETtFV6cyRBMRFSeUzM1EB6lmb8CXoTvkxifCUYQolg6rWRhKqfi04UXw8Ikxd8K95A8THH1-uaPkTJZYO7~V~i5IP7ca~EqjRNqkzBEV4X~cfbW0F5eTmArXPNvANt6SsIwASWN1DneuVQnI8KYR~Fe~oTcl~5Rv-F8~RwIAIxmEgKtp~gEj6Ws7wq5AjDORMG7JQD-~MhkhddbHjETdmE60eBmFlQno8vxmpmRCzgwu8CVsfy1GAwYevkVNmFtWA6N9bLs-g~vDFXU0hck8bQV-35j3wUghhdZVZa3ex8g6WviWxQ__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="container relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-1 w-16 bg-primary"></div>
              <span className="heading-text text-sm text-primary uppercase tracking-wider">
                Certificados ISO 9001:2015
              </span>
            </div>
            <h1 className="display-text text-6xl md:text-8xl text-white mb-6 leading-none">
              DANDO NUEVA VIDA
              <br />
              AL ALUMINIO
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transformamos residuos en oportunidades mediante la fundición de
              rebabas, trabajando con dedicación, responsabilidad y respeto por
              el medio ambiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contacto")}
                size="lg"
                className="btn-industrial bg-primary hover:bg-primary/80 text-primary-foreground text-lg px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
              >
                Solicitar Cotización
              </Button>
              <Button
                onClick={() => scrollToSection("servicios")}
                size="lg"
                variant="outline"
                className="btn-industrial border-2 border-white/30 text-white hover:bg-white/20 text-lg px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Conocer Servicios
              </Button>
            </div>
          </div>
        </div>

        {/* Diagonal cut at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background transform origin-bottom-left -skew-y-2"></div>
      </section>

      {/* Nosotros Section */}
      <section 
        id="nosotros" 
        ref={nosotrosAnim.ref}
        className={`py-24 bg-background metal-grain transition-all duration-1000 ${
          nosotrosAnim.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-1 w-16 bg-primary"></div>
                <span className="heading-text text-sm text-primary uppercase tracking-wider">
                  Sobre Nosotros
                </span>
              </div>
              <h2 className="display-text text-5xl text-foreground mb-6">
                METAL HAUS S.A. DE C.V.
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nos especializamos en
                la compra y venta de scrap, así como en la fundición de
                aleaciones de metales no ferrosos, específicamente dando nueva
                vida al aluminio mediante la fundición de rebabas.
              </p>

              {/* Misión y Visión */}
              <div className="space-y-6 mt-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="heading-text text-xl text-foreground mb-2 uppercase">
                    Misión
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dar nueva vida al aluminio mediante la fundición de rebabas,
                    trabajando con dedicación, responsabilidad y respeto por el
                    medio ambiente, para ofrecer materiales confiables que
                    apoyen el crecimiento de la industria y de nuestra
                    comunidad.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="heading-text text-xl text-foreground mb-2 uppercase">
                    Visión
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Crecer como una empresa reconocida por transformar residuos
                    en oportunidades, siendo un referente local en el reciclaje
                    y fundición de aluminio, impulsados por la pasión por
                    nuestro trabajo, la mejora continua y el compromiso con un
                    futuro más sostenible.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/FrCEOxceKXpfXpRn.jpg"
                alt="Lingotes de aluminio Metal Haus - Producto terminado"
                className="w-full h-auto transform -skew-y-2 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section 
        ref={valoresAnim.ref}
        className={`py-24 bg-secondary diagonal-cut-top diagonal-cut-bottom metal-grain transition-all duration-1000 ${
          valoresAnim.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-1 w-16 bg-primary"></div>
              <span className="heading-text text-sm text-primary uppercase tracking-wider">
                Nuestros Principios
              </span>
              <div className="h-1 w-16 bg-primary"></div>
            </div>
            <h2 className="display-text text-5xl text-foreground mb-4">
              VALORES QUE NOS DEFINEN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Responsabilidad",
                description:
                  "Asumimos con seriedad cada compromiso, garantizando un manejo adecuado de materiales, procesos y resultados.",
              },
              {
                icon: Target,
                title: "Mejora Continua",
                description:
                  "Buscamos constantemente optimizar nuestros procesos, aprender y adaptarnos.",
              },
              {
                icon: Shield,
                title: "Seguridad",
                description:
                  "Protegemos la integridad de nuestro equipo mediante prácticas seguras y normas industriales.",
              },
              {
                icon: Recycle,
                title: "Compromiso Ambiental",
                description:
                  "Promovemos el reciclaje y la reutilización del aluminio, contribuyendo a la sostenibilidad.",
              },
            ].map((valor, index) => (
              <Card
                key={index}
                className="bg-card border-border p-6 hover:border-primary transition-all duration-300 transform hover:scale-102 hover:shadow-2xl hover:shadow-primary/20"
              >
                <valor.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="heading-text text-lg text-foreground mb-2 uppercase">
                  {valor.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {valor.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section 
        id="servicios" 
        ref={serviciosAnim.ref}
        className={`py-24 bg-background metal-grain transition-all duration-1000 ${
          serviciosAnim.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-1 w-16 bg-primary"></div>
              <span className="heading-text text-sm text-primary uppercase tracking-wider">
                Nuestro Alcance
              </span>
              <div className="h-1 w-16 bg-primary"></div>
            </div>
            <h2 className="display-text text-5xl text-foreground mb-4">
              SERVICIOS ESPECIALIZADOS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones integrales en el manejo y transformación de
              metales no ferrosos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden group transition-all duration-300 hover:scale-102 hover:shadow-2xl hover:shadow-primary/20">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/qv2XytMXTKXFaJ3UWdKpyO/sandbox/QaOzXAS9j3sllyHLzsuYEH-img-3_1770714377000_na1fn_bWV0YWwtaGF1cy1zY3JhcC1yZWN5Y2xpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcXYyWHl0TVhUS1hGYUozVVdkS3B5Ty9zYW5kYm94L1FhT3pYQVM5ajNzbGx5SEx6c3VZRUgtaW1nLTNfMTc3MDcxNDM3NzAwMF9uYTFmbl9iV1YwWVd3dGFHRjFjeTF6WTNKaGNDMXlaV041WTJ4cGJtYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=c-Xt5ku-NFwNNEeWzWzY8Nyfa6hoQDu5pCxzIaC9eMFeUBOk~o7TxyvtK6R6dXrA5i3L-h29lC8lO-qULJMhagBfPBRsY1--R4jWw18P46j6stErhyUmKibC~4UXDpkCByadMjFGCreLPCx6mUDi381~q4SU6z8WmHzL0e-GYIixLHubWCR~WLgAq0Ym9H28H5XS-UKSYqvrxwx5~bJwDzPf8H-vsKRWXMUNzFBUuyK~hj2WlRTe9ghAimLB-XOHAFNMS9Tp5CQKmr8xxE4deVV0Myk7g02A~iVRpOO9KxYikddJaSkz2eJAl0M~KEkVhvnoWVFZgHl-Hp2NURiC2w__"
                alt="Compra y venta de scrap"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Factory className="w-12 h-12 text-primary mb-4" />
                <h3 className="display-text text-3xl text-foreground mb-2">
                  COMPRA Y VENTA DE SCRAP
                </h3>
                <p className="text-muted-foreground">
                  Manejo especializado de scrap metálico y rebabas de aluminio
                  para su reciclaje y transformación.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group transition-all duration-300 hover:scale-102 hover:shadow-2xl hover:shadow-primary/20">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/qv2XytMXTKXFaJ3UWdKpyO/sandbox/QaOzXAS9j3sllyHLzsuYEH-img-4_1770714374000_na1fn_bWV0YWwtaGF1cy1xdWFsaXR5LXByb2Nlc3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcXYyWHl0TVhUS1hGYUozVVdkS3B5Ty9zYW5kYm94L1FhT3pYQVM5ajNzbGx5SEx6c3VZRUgtaW1nLTRfMTc3MDcxNDM3NDAwMF9uYTFmbl9iV1YwWVd3dGFHRjFjeTF4ZFdGc2FYUjVMWEJ5YjJObGMzTS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=v03R2-6IbQZLGmkgpWKWsqz2O4XCNRDCF~e-t2D2Ry06HJG85ZJuGeo2UmLpQfItminpTp49V4KuSUGdlDUmSi7Esk15U7coj91YVwMXRc1VbbLpRmA45C3kW7Mgcrm2~yf53WaCXAEb3AKktYQieHAvRBWL88FGKxuvfIjLhnp~gUJD4LjCa0-jcfj4zIR5LHCozTNYxfWI2hwJMmGTufioeHgV6Et5izjinrizDnOSiRrnAwjbCuSa04BjopKWgRRxUecl9WihuvlS-9DmNTt5apa1r37cg5hnyJj-2sJSRuuNGv81F~Kci8obSkXjlxkjP-WN5P2I~K3LSJp8AA__"
                alt="Fundición de metales no ferrosos"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Recycle className="w-12 h-12 text-primary mb-4" />
                <h3 className="display-text text-3xl text-foreground mb-2">
                  FUNDICIÓN DE ALUMINIO
                </h3>
                <p className="text-muted-foreground">
                  Fundición especializada de aleaciones de metales no ferrosos,
                  produciendo lingotes de alta calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calidad Section */}
      <section 
        id="calidad" 
        ref={calidadAnim.ref}
        className={`py-24 bg-secondary diagonal-cut-top metal-grain transition-all duration-1000 ${
          calidadAnim.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card border-2 border-primary p-8 transform -skew-x-3">
                <div className="transform skew-x-3">
                  <div className="flex items-center gap-4 mb-6">
                    <Award className="w-16 h-16 text-primary" />
                    <div>
                      <h3 className="display-text text-3xl text-foreground">
                        ISO 9001:2015
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Certificado: AMER35750
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Certificado por AMERICO Quality Standards Registech Pvt. Ltd
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Alcance:</strong> Fundición de aleación de metales
                      no ferrosos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Vigencia:</strong> Hasta 27/11/2026
                    </p>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/UDFdNEQDSNzMbhHh.pdf",
                        "_blank"
                      )
                    }
                    className="btn-industrial bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                  >
                    Ver Certificado
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-1 w-16 bg-primary"></div>
                <span className="heading-text text-sm text-primary uppercase tracking-wider">
                  Certificación de Calidad
                </span>
              </div>
              <h2 className="display-text text-5xl text-foreground mb-6">
                POLÍTICA DE CALIDAD
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                En MetalHaus S. A. de C. V., nos dedicamos a la fundición de
                metales no ferrosos que superen las expectativas de calidad de
                nuestros clientes, cumpliendo con los estándares
                internacionales, los requisitos legales y otros aplicables a
                nuestros procesos.
              </p>

              <div className="space-y-4">
                {[
                  "Mantener procesos estandarizados, eficientes y controlados",
                  "Establecer y cumplir con nuestros objetivos de calidad",
                  "Capacitar y empoderar a nuestros empleados para prevenir errores y agregar valor",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section 
        id="contacto" 
        ref={contactoAnim.ref}
        className={`py-24 bg-background metal-grain transition-all duration-1000 ${
          contactoAnim.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-1 w-16 bg-primary"></div>
              <span className="heading-text text-sm text-primary uppercase tracking-wider">
                Contáctanos
              </span>
              <div className="h-1 w-16 bg-primary"></div>
            </div>
            <h2 className="display-text text-5xl text-foreground mb-4">
              SOLICITA UNA COTIZACIÓN
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estamos listos para atender tus necesidades de fundición y manejo
              de scrap
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <Card className="bg-card border-border p-6 transform hover:-translate-y-1 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="heading-text text-lg text-foreground mb-2 uppercase">
                      Teléfono
                    </h3>
                    <a
                      href="tel:4441840714"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      4441-84-07-14
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-6 transform hover:-translate-y-1 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="heading-text text-lg text-foreground mb-2 uppercase">
                      Email
                    </h3>
                    <a
                      href="mailto:Ventas@mineralesymetales.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      Ventas@mineralesymetales.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-6 transform hover:-translate-y-1 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="heading-text text-lg text-foreground mb-2 uppercase">
                      Ubicación
                    </h3>
                    <p className="text-muted-foreground">
                      C. Fundidores 1317, CP. 78395
                      <br />
                      San Luis Potosí, México
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Imagen de productos */}
            <div className="relative">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/RrbVRbtZYYLKmimg.jpg"
                alt="Productos Metal Haus"
                className="w-full h-full object-cover transform -skew-y-2 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section 
        ref={galeriaAnim.ref}
        className={`py-24 bg-muted/30 metal-grain transition-all duration-1000 ${
          galeriaAnim.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-1 w-16 bg-primary"></div>
              <span className="heading-text text-sm text-primary uppercase tracking-wider">
                Nuestro Trabajo
              </span>
              <div className="h-1 w-16 bg-primary"></div>
            </div>
            <h2 className="display-text text-5xl text-foreground mb-4">
              GALERÍA DE PRODUCTOS Y PROCESOS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce nuestras instalaciones, productos terminados y procesos de fundición de aluminio
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/MjwqFqqtwfxCExYW.jpg",
                alt: "Lingotes de aluminio empacados listos para entrega",
              },
              {
                src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/cZKNaqQswamVKXFN.jpg",
                alt: "Paquete de lingotes de aluminio en pallet",
              },
              {
                src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/IzPWIVOiDmvzdeEQ.jpg",
                alt: "Transporte de lingotes de aluminio con montacargas",
              },
              {
                src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/crbtJWwXknKUlOqz.jpg",
                alt: "Manejo de scrap metálico con maquinaria especializada",
              },
              {
                src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/dxCkBeLcinfpnYKv.jpg",
                alt: "Lingotes de aluminio apilados en almacén",
              },
              {
                src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/HMCntxTTEyFlTaeM.jpg",
                alt: "Proceso de fundición en horno industrial",
              },
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
