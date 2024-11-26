import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsScrolled(scrollY > viewportHeight / 2 ? true : false);
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <header
      className={`
        fixed w-full z-50 transition-all duration-500
        ${
          isScrolled && scrollDirection === "down"
            ? "bg-background/30 backdrop-blur-md py-2 translate-y-[-4px] opacity-70"
            : "bg-background/80 backdrop-blur-sm py-4 opacity-100"
        }
        border-b border-purple/20
        hover:bg-background/80 hover:py-4 hover:translate-y-0 hover:opacity-100
      `}
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-500"
        aria-label="Top"
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div
                className={`
                h-10 w-10 rounded-full bg-purple flex items-center justify-center
                transition-all duration-500
                ${
                  isScrolled && scrollDirection === "down"
                    ? "scale-85 opacity-70"
                    : "scale-100 opacity-100"
                }
                group-hover:scale-100 group-hover:opacity-100
              `}
              >
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span
                className={`
                text-xl font-bold text-navy
                transition-all duration-500
                ${
                  isScrolled && scrollDirection === "down"
                    ? "opacity-60 scale-95"
                    : "opacity-100 scale-100"
                }
                group-hover:opacity-100 group-hover:scale-100
              `}
              >
                INVERTI EN VOS
              </span>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  text-sm font-medium transition-all duration-500
                  ${
                    isScrolled && scrollDirection === "down"
                      ? "text-navy/40 scale-95"
                      : "text-navy/70 scale-100"
                  }
                  hover:text-navy hover:scale-100
                `}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className={`
                bg-purpleLight transition-all duration-500
                ${
                  isScrolled && scrollDirection === "down"
                    ? "opacity-70 scale-95"
                    : "opacity-100 scale-100"
                }
                hover:bg-purple/90 hover:opacity-100 hover:scale-100
                text-navy
              `}
            >
              <Link to="/contact">Agendar Consulta</Link>
            </Button>
          </div>

          {/* Navegación Móvil */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`
                    text-navy transition-opacity duration-300
                    ${
                      isScrolled && scrollDirection === "down"
                        ? "opacity-70 hover:opacity-100"
                        : "opacity-100"
                    }
                  `}
                >
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
                    className="mt-4 bg-purpleLight hover:bg-purple/90 text-navy"
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
