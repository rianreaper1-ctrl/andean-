import { Globe, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  currentLang: 'es' | 'en' | 'zh';
}

const Footer = ({ currentLang }: FooterProps) => {
  const translations = {
    es: {
      company: 'Andean Peruvian Export S.A.C.',
      description: 'Exportando la riqueza agrícola del Perú al mundo',
      contact: 'Contacto',
      address: 'Lima, Perú',
      email: 'info@andeanperuvianexport.com',
      phone: '+51 1 234 5678',
      website: 'andeanperuvianexport.com',
      copyright: '© 2024 Andean Peruvian Export S.A.C. Todos los derechos reservados.',
      links: {
        about: 'Nosotros',
        products: 'Productos',
        mission: 'Misión',
        contact: 'Contacto'
      }
    },
    en: {
      company: 'Andean Peruvian Export S.A.C.',
      description: 'Exporting Peru\'s agricultural wealth to the world',
      contact: 'Contact',
      address: 'Lima, Peru',
      email: 'info@andeanperuvianexport.com',
      phone: '+51 1 234 5678',
      website: 'andeanperuvianexport.com',
      copyright: '© 2024 Andean Peruvian Export S.A.C. All rights reserved.',
      links: {
        about: 'About Us',
        products: 'Products',
        mission: 'Mission',
        contact: 'Contact'
      }
    },
    zh: {
      company: 'Andean Peruvian Export S.A.C.',
      description: '将秘鲁的农业财富出口到世界各地',
      contact: '联系方式',
      address: '秘鲁利马',
      email: 'info@andeanperuvianexport.com',
      phone: '+51 1 234 5678',
      website: 'andeanperuvianexport.com',
      copyright: '© 2024 Andean Peruvian Export S.A.C. 版权所有。',
      links: {
        about: '关于我们',
        products: '产品',
        mission: '使命',
        contact: '联系'
      }
    }
  };

  const t = translations[currentLang];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-earth-brown text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
               <img 
                 src="/lovable-uploads/75ad90cd-b561-4047-bca9-4b0d30630900.png" 
                 alt="Andean Peruvian Export Logo" 
                 className="h-10 w-auto bg-white rounded p-1"
               />
              <span className="font-bold text-xl text-golden-grain">
                Andean Export
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">{t.company}</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden-grain">Enlaces</h4>
            <nav className="space-y-2">
              {Object.entries(t.links).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden-grain">{t.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-golden-grain flex-shrink-0" />
                <span className="text-white/80">{t.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-golden-grain flex-shrink-0" />
                <a 
                  href={`mailto:${t.email}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-golden-grain flex-shrink-0" />
                <a 
                  href={`tel:${t.phone}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-golden-grain flex-shrink-0" />
                <a 
                  href={`https://${t.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;