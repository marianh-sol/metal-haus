/**
 * Footer Component - Neo-Industrial Brutalism
 * - Diseño angular con información de contacto
 * - Badges de certificación ISO
 */

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border metal-grain">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="mb-4">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663238894937/TKysmkdHUObmLyWC.png"
                alt="Metal Haus - Compra y Venta de Scrap"
                className="h-20 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dando nueva vida al aluminio mediante la fundición de rebabas,
              trabajando con dedicación, responsabilidad y respeto por el medio
              ambiente.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="heading-text text-lg text-foreground mb-4 uppercase">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href="tel:4441840714"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone size={16} className="text-primary" />
                <span>4441-84-07-14</span>
              </a>
              <a
                href="mailto:Ventas@mineralesymetales.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail size={16} className="text-primary" />
                <span>Ventas@mineralesymetales.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>
                  C. Fundidores 1317, CP. 78395
                  <br />
                  San Luis Potosí, México
                </span>
              </div>
            </div>
          </div>

          {/* Certificación */}
          <div>
            <h3 className="heading-text text-lg text-foreground mb-4 uppercase">
              Certificación
            </h3>
            <div className="bg-card border border-border p-4 transform -skew-x-3">
              <div className="transform skew-x-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-primary"></div>
                  <span className="heading-text text-sm text-primary uppercase">
                    ISO 9001:2015
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  Certificado: AMER35750
                </p>
                <p className="text-xs text-muted-foreground">
                  Fundición de aleación de metales no ferrosos
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Metal Haus S.A. de C.V. Todos los
              derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Certificado por AMERICO Quality Standards Registech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
