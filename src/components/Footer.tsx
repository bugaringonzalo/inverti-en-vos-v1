import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 relative">
      {" "}
      {/* Removida cualquier propiedad fixed o sticky */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex justify-center space-x-6 order-2 md:order-2">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Inicio
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary"
            >
              Contacto
            </Link>
          </div>
          <div className="order-1 md:order-1">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()} Invertí en Vos. Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
