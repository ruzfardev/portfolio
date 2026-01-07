import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScrollDirection();

  const isScrolled = scrollY > 50;

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div
          className={cn(
            "mx-auto transition-all duration-500 ease-out",
            "rounded-full",
            "bg-background/60 backdrop-blur-xl",
            "border border-white/10",
            "shadow-lg shadow-black/5",
            isScrolled ? "max-w-4xl" : "max-w-6xl"
          )}
        >
          <nav className="px-6 h-14 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-8 rounded-full"
              />
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-white/10 rounded-full transition-colors z-50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "bg-background/95 backdrop-blur-xl",
          "transition-all duration-500 ease-out",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="h-full flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  "transition-all duration-500",
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 75}ms` : "0ms",
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-3xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
