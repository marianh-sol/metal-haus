/**
 * Navigation Component - Neo-Industrial Brutalism
 * - Fixed header con fondo oscuro y bordes angulares
 * - Logo con tipografía Bebas Neue
 * - Links con hover states mecánicos
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center group"
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/TKysmkdHUObmLyWC.png"
              alt="Metal Haus - Compra y Venta de Scrap"
              className="h-20 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("nosotros")}
              className="heading-text text-base text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="heading-text text-base text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("calidad")}
              className="heading-text text-base text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
            >
              Calidad
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="heading-text text-base text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="btn-industrial bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Cotizar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-card border-b border-border">
            <div className="flex flex-col p-4 gap-4">
              <button
                onClick={() => scrollToSection("nosotros")}
                className="heading-text text-left py-2 text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="heading-text text-left py-2 text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("calidad")}
                className="heading-text text-left py-2 text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
              >
                Calidad
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="heading-text text-left py-2 text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="btn-industrial bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                Cotizar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
