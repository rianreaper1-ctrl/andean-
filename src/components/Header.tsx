import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  currentLang: 'es' | 'en' | 'zh';
  onLanguageChange: (lang: 'es' | 'en' | 'zh') => void;
  activeSection: string;
}

const Header = ({ currentLang, onLanguageChange, activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    es: {
      home: 'Inicio',
      about: 'Nosotros',
      products: 'Productos',
      mission: 'Misión',
      contact: 'Contacto'
    },
    en: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      mission: 'Mission',
      contact: 'Contact'
    },
    zh: {
      home: '首页',
      about: '关于我们',
      products: '产品',
      mission: '使命',
      contact: '联系'
    }
  };

  const t = translations[currentLang];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'header-glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/75ad90cd-b561-4047-bca9-4b0d30630900.png" 
              alt="Andean Peruvian Export Logo" 
              className="h-10 w-auto"
            />
            <span className="font-bold text-earth-brown text-lg">
              Andean Export
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'products', 'mission', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === section
                    ? 'text-earth-brown border-b-2 border-earth-brown'
                    : 'text-foreground hover:text-earth-brown'
                }`}
              >
                {t[section as keyof typeof t]}
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Globe className="h-4 w-4 mr-2" />
                  {languages.find(lang => lang.code === currentLang)?.flag}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code as 'es' | 'en' | 'zh')}
                    className={currentLang === lang.code ? 'bg-muted' : ''}
                  >
                    {lang.flag} {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t shadow-lg">
            <nav className="py-4 space-y-2">
              {['home', 'about', 'products', 'mission', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 font-medium transition-colors ${
                    activeSection === section
                      ? 'text-earth-brown bg-muted'
                      : 'text-foreground hover:text-earth-brown hover:bg-muted'
                  }`}
                >
                  {t[section as keyof typeof t]}
                </button>
              ))}
              <div className="px-4 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full">
                      <Globe className="h-4 w-4 mr-2" />
                      {languages.find(lang => lang.code === currentLang)?.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => onLanguageChange(lang.code as 'es' | 'en' | 'zh')}
                      >
                        {lang.flag} {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;