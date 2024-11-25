import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-purple/20">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-purple flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-navy">
                INVERTI EN VOS
              </span>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6 mb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-purple hover:bg-purple/90 text-navy">
              <Link to="/contact">Agendar Consulta</Link>
            </Button>
          </div>

          {/* Navegación Móvil */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-navy">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-navy">
                    Menú de Navegación
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-navy/70 hover:text-navy transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="mt-4 bg-purple hover:bg-purple/90 text-navy"
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Agendar Consulta
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
