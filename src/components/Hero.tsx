import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Award, Globe2 } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

interface HeroProps {
  currentLang: 'es' | 'en' | 'zh';
}

const Hero = ({ currentLang }: HeroProps) => {
  const translations = {
    es: {
      title: 'Conectando los Andes con el Mundo',
      subtitle: 'Granos ancestrales de alta calidad, cultivados de manera sostenible en los Andes peruanos',
      cta: 'Conocer Productos',
      features: [
        { icon: Leaf, text: 'Cultivo Sostenible' },
        { icon: Award, text: 'Calidad Premium' },
        { icon: Globe2, text: 'Exportación Global' }
      ]
    },
    en: {
      title: 'Connecting the Andes to the World',
      subtitle: 'High-quality ancestral grains, sustainably grown in the Peruvian Andes',
      cta: 'Explore Products',
      features: [
        { icon: Leaf, text: 'Sustainable Farming' },
        { icon: Award, text: 'Premium Quality' },
        { icon: Globe2, text: 'Global Export' }
      ]
    },
    zh: {
      title: '连接安第斯山脉与世界',
      subtitle: '来自秘鲁安第斯山脉的高品质古老谷物，可持续种植',
      cta: '探索产品',
      features: [
        { icon: Leaf, text: '可持续农业' },
        { icon: Award, text: '优质品质' },
        { icon: Globe2, text: '全球出口' }
      ]
    }
  };

  const t = translations[currentLang];

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up leading-tight">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 fade-in-up opacity-90" style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10 fade-in-up" style={{ animationDelay: '0.4s' }}>
            {t.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <feature.icon className="h-5 w-5" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <Button
            size="lg"
            onClick={scrollToProducts}
            className="bg-golden-grain text-earth-brown hover:bg-golden-grain/90 font-semibold text-lg px-8 py-4 fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;