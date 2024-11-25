import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Inicio
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary">
            Contacto
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Invertí en Vos. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;