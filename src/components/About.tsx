import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, Leaf } from 'lucide-react';

interface AboutProps {
  currentLang: 'es' | 'en' | 'zh';
}

const About = ({ currentLang }: AboutProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const translations = {
    es: {
      title: 'Sobre Nosotros',
      subtitle: 'Conectando tradiciones andinas con el mundo',
      description: 'En ANDEAN PERUVIAN EXPORT S.A.C somos una empresa peruana especializada en la exportación de granos andinos hacia mercados internacionales. Nacimos con el propósito de conectar las tradiciones agrícolas del Perú con el mundo, llevando productos que representan la identidad cultural de los Andes y el esfuerzo de nuestras comunidades campesinas.',
      mission: {
        title: 'Misión',
        content: 'Nuestra misión es llevar al mundo la riqueza agrícola del Perú a través de granos andinos de alta calidad, cultivados de manera sostenible y responsable. Promovemos el comercio justo, el desarrollo de nuestras comunidades productoras y la conservación de nuestras tradiciones.',
        icon: Target
      },
      vision: {
        title: 'Visión',
        content: 'Ser la empresa peruana líder en la exportación de granos andinos, reconocida a nivel internacional por la excelencia de nuestros productos, la innovación en nuestros procesos y el impacto positivo en las comunidades agrícolas.',
        icon: Eye
      },
      values: [
        { title: 'Sostenibilidad', description: 'Cuidamos el medio ambiente en cada proceso', icon: Leaf },
        { title: 'Comunidad', description: 'Apoyamos a nuestros productores locales', icon: Users }
      ],
      contact: {
        title: 'Contacto',
        description: 'Estamos aquí para conectar contigo y llevar los mejores granos andinos a tu negocio.'
      }
    },
    en: {
      title: 'About Us',
      subtitle: 'Connecting Andean traditions with the world',
      description: 'At ANDEAN PERUVIAN EXPORT S.A.C we are a Peruvian company specialized in the export of Andean grains to international markets. We were born with the purpose of connecting Peru\'s agricultural traditions with the world, bringing products that represent the cultural identity of the Andes and the effort of our farming communities.',
      mission: {
        title: 'Mission',
        content: 'Our mission is to bring Peru\'s agricultural wealth to the world through high-quality Andean grains, cultivated sustainably and responsibly. We promote fair trade, the development of our producing communities and the conservation of our traditions.',
        icon: Target
      },
      vision: {
        title: 'Vision',
        content: 'To be the leading Peruvian company in the export of Andean grains, internationally recognized for the excellence of our products, innovation in our processes and positive impact on agricultural communities.',
        icon: Eye
      },
      values: [
        { title: 'Sustainability', description: 'We care for the environment in every process', icon: Leaf },
        { title: 'Community', description: 'We support our local producers', icon: Users }
      ],
      contact: {
        title: 'Contact',
        description: 'We are here to connect with you and bring the best Andean grains to your business.'
      }
    },
    zh: {
      title: '关于我们',
      subtitle: '连接安第斯传统与世界',
      description: '在ANDEAN PERUVIAN EXPORT S.A.C，我们是一家专门向国际市场出口安第斯山脉谷物的秘鲁公司。我们成立的目的是将秘鲁的农业传统与世界联系起来，带来代表安第斯山脉文化身份和我们农业社区努力的产品。',
      mission: {
        title: '使命',
        content: '我们的使命是通过可持续和负责任地种植的高品质安第斯山脉谷物，将秘鲁的农业财富带给世界。我们促进公平贸易、发展我们的生产社区并保护我们的传统。',
        icon: Target
      },
      vision: {
        title: '愿景',
        content: '成为安第斯山脉谷物出口领域的领先秘鲁公司，因我们产品的卓越性、工艺创新和对农业社区的积极影响而在国际上获得认可。',
        icon: Eye
      },
      values: [
        { title: '可持续性', description: '我们在每个过程中都关心环境', icon: Leaf },
        { title: '社区', description: '我们支持当地生产者', icon: Users }
      ],
      contact: {
        title: '联系',
        description: '我们在这里与您联系，为您的企业带来最好的安第斯山脉谷物。'
      }
    }
  };

  const t = translations[currentLang];

  useEffect(() => {
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

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-4 fade-in-up">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-golden-grain mx-auto rounded-full mt-4 fade-in-up" style={{ animationDelay: '0.4s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center fade-in-up" style={{ animationDelay: '0.6s' }}>
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="slide-in-left shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-earth-brown/10 p-3 rounded-full mr-4">
                  <t.mission.icon className="h-6 w-6 text-earth-brown" />
                </div>
                <h3 className="text-2xl font-bold text-earth-brown">{t.mission.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t.mission.content}
              </p>
            </CardContent>
          </Card>

          <Card className="slide-in-right shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-mountain-green/10 p-3 rounded-full mr-4">
                  <t.vision.icon className="h-6 w-6 text-mountain-green" />
                </div>
                <h3 className="text-2xl font-bold text-mountain-green">{t.vision.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t.vision.content}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.values.map((value, index) => (
            <Card 
              key={index} 
              className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              style={{ animationDelay: `${0.8 + index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-golden-grain/10 p-2 rounded-full mr-3">
                    <value.icon className="h-5 w-5 text-golden-grain" />
                  </div>
                  <h4 className="text-lg font-semibold text-earth-brown">{value.title}</h4>
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </section>
      
      <section id="mission" className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-8 fade-in-up">
            {t.mission.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.mission.content}
            </p>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-8 fade-in-up">
            {t.contact.title}
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.contact.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;