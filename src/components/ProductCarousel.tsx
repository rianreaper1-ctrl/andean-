import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import quinoaImage from '@/assets/quinoa-hero.jpg';
import kiwichaImage from '@/assets/kiwicha-hero.jpg';
import canihuaImage from '@/assets/canihua-hero.jpg';
import cornImage from '@/assets/corn-hero.jpg';

interface ProductCarouselProps {
  currentLang: 'es' | 'en' | 'zh';
}

const ProductCarousel = ({ currentLang }: ProductCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const translations = {
    es: {
      title: 'Nuestros Productos Estrella',
      products: [
        {
          name: 'Quinua',
          description: 'El grano de oro de los Andes, rico en proteínas y aminoácidos esenciales',
          image: quinoaImage,
          benefits: ['Alto en proteínas', 'Sin gluten', 'Aminoácidos completos']
        },
        {
          name: 'Kiwicha (Amaranto)',
          description: 'Superalimento ancestral con alto contenido de calcio y hierro',
          image: kiwichaImage,
          benefits: ['Rico en calcio', 'Alto en hierro', 'Antioxidantes naturales']
        },
        {
          name: 'Cañihua',
          description: 'Grano milenario con alto valor proteico y antioxidante',
          image: canihuaImage,
          benefits: ['Resistente a alturas', 'Alto en antioxidantes', 'Valor proteico elevado']
        },
        {
          name: 'Maíz Gigante del Cusco',
          description: 'Producto emblemático con sabor único e inconfundible',
          image: cornImage,
          benefits: ['Tamaño único', 'Sabor tradicional', 'Patrimonio cultural']
        }
      ]
    },
    en: {
      title: 'Our Star Products',
      products: [
        {
          name: 'Quinoa',
          description: 'The golden grain of the Andes, rich in proteins and essential amino acids',
          image: quinoaImage,
          benefits: ['High protein', 'Gluten-free', 'Complete amino acids']
        },
        {
          name: 'Kiwicha (Amaranth)',
          description: 'Ancestral superfood with high calcium and iron content',
          image: kiwichaImage,
          benefits: ['Rich in calcium', 'High iron', 'Natural antioxidants']
        },
        {
          name: 'Cañihua',
          description: 'Millenary grain with high protein and antioxidant value',
          image: canihuaImage,
          benefits: ['High altitude resistant', 'High antioxidants', 'High protein value']
        },
        {
          name: 'Giant Corn from Cusco',
          description: 'Emblematic product with unique and unmistakable flavor',
          image: cornImage,
          benefits: ['Unique size', 'Traditional flavor', 'Cultural heritage']
        }
      ]
    },
    zh: {
      title: '我们的明星产品',
      products: [
        {
          name: '藜麦',
          description: '安第斯山脉的黄金谷物，富含蛋白质和必需氨基酸',
          image: quinoaImage,
          benefits: ['高蛋白质', '无麸质', '完整氨基酸']
        },
        {
          name: '苋菜',
          description: '古老的超级食物，钙和铁含量高',
          image: kiwichaImage,
          benefits: ['富含钙质', '高铁含量', '天然抗氧化剂']
        },
        {
          name: '卡尼华',
          description: '千年谷物，具有高蛋白质和抗氧化价值',
          image: canihuaImage,
          benefits: ['耐高海拔', '高抗氧化剂', '高蛋白质价值']
        },
        {
          name: '库斯科巨型玉米',
          description: '具有独特风味的标志性产品',
          image: cornImage,
          benefits: ['独特尺寸', '传统风味', '文化遗产']
        }
      ]
    }
  };

  const t = translations[currentLang];

  // Duplicate products for seamless loop
  const allProducts = [...t.products, ...t.products, ...t.products];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const productCards = carousel.querySelectorAll('.product-card');
    productCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-earth-brown mb-4 fade-in-up">
          {t.title}
        </h2>
        <div className="w-24 h-1 bg-golden-grain mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        <div 
          ref={carouselRef}
          className="flex carousel-scroll"
          style={{ width: 'calc(300px * 12)' }}
        >
          {allProducts.map((product, index) => (
            <Card 
              key={index} 
              className={`product-card flex-shrink-0 mx-4 w-80 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  {product.name}
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-mountain-green/10 text-mountain-green px-3 py-1 rounded-full text-sm font-medium mr-2 mb-1"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;