import React, { useEffect, useRef, useState } from 'react';

import logo from '../public/Без имени-1.jpg'
import logo2 from '../public/Без имени-2.jpg'
import product1 from '../public/Полуотвод чина.jpg'
import product2 from '../public/капельница компенсирование.jpg'
import product3 from '../public/Старт 16 LFT.jpg'
import product4 from '../public/кран иран.jpg'
import favicon from '../public/favicon.png'
import {
  Droplets,
  Package,
  Wrench,
  Timer,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Send,
  MapPin,
  Phone,
  Star,
  ShoppingCart,
  Menu,
  X,
  Shield,
  Headphones,
  Truck,
  ArrowUp,
} from 'lucide-react';

const products = [
  {
    title: 'Полуотвод 63 литьевой',
    description: 'Bысокое качество',
    price: '$1,42',
    image: product1,
  },
  {
    title: 'Капельница 8л компрес',
    description: 'Bысокое качество',
    price: '$1.99',
    image: product2,
  },
  {
    title: 'Старт 17x16 LFT',
    description: 'Bысокое качество',
    price: '$2.99',
    image: product3,
  },
  {
    title: 'Кран 63 компресс. (VISP)',
    description: 'Bысокое качество',
    price: '$12.99',
    image: product4,
  },
];

const features = [
  {
    title: 'Качественная продукция',
    description: 'Премиальные решения для орошения от проверенных производителей',
    icon: Shield,
  },
  {
    title: 'Экспертная поддержка',
    description: 'Круглосуточная техническая помощь для всех ваших нужд',
    icon: Headphones,
  },
  {
    title: 'Быстрая доставка',
    description: 'Быстрая доставка в ваш регион',
    icon: Truck,
  },
  {
    title: 'Профессиональная установка',
    description: 'Дополнительная услуга по установке сертифицированными специалистами',
    icon: Wrench,
  },
];

const testimonials = [
  {
    name: 'Hakimov Abdullo',
    role: 'Владелец фермы',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    quote: 'Качество их ирригационной продукции превосходное. Отличное обслуживание клиентов!',
  },
  {
    name: 'Bektoshev Anvar',
    role: 'Фермер',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    quote: 'Нашел все, что нужно для проектов моих клиентов. Очень рекомендую!',
  },
];

const branches = [
  {
    name: 'Polivchi - Саттепо филиал',
    address: 'Самарканд, населённый пункт Навбогчиён, ул. Хумдон, 355',
    phone: '+998 77-705-99-88',
    tel: '+998777059988',
    telegram: '@polivchi',
  },
  {
    name: 'Polivchi - Улугбек филиал',
    address: 'Самаркандская кольцевая дорога, 1, Самаркандская область',
    phone: '+998 77-706-99-88',
    tel: '+998777069988',
    telegram: '@polivchi1',
  },
];

const sponsors = [
  {
    name: "AquaTech Solutions",
    logo: favicon,
  },
  {
    name: "AquaTech Solutions",
    logo: favicon,
  },
  {
    name: "AquaTech Solutions",
    logo: favicon,
  },
  {
    name: "AquaTech Solutions",
    logo: favicon,
  },
  {
    name: "AquaTech Solutions",
    logo: favicon,
  },
  {
    name: "AquaTech Solutions",
    logo: favicon,
  },
  {
    name: "AquaTech Solutions",
    logo: favicon,
  },
  {
    name: "AquaTech Solutions",
    logo: favicon,
  },
  {
    name: "AquaTech Solutions",
    logo: favicon,
  },
  {
    name: "AquaTech Solutions",
    logo: favicon,
  },
  
];




function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#006699] text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}

function SponsorsGrid() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let position = 0;
    const slideWidth = 240; // Width of each slide including gap
    const totalWidth = sponsors.length * slideWidth;
    const viewportWidth = 1200;
    let animationFrame: number;

    const animate = () => {
      position -= 1; // Smooth scrolling speed
      
      // Reset position when reaching the end
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      
      if (slider) {
        slider.style.transform = `translateX(${position}px)`;
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrame = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Create a duplicated array of sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      
      <div 
        className="overflow-hidden mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={sliderRef}
          className="flex gap-8 transition-transform duration-1000 ease-linear"
          style={{ width: `${sponsors.length * 240}px` }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[200px] h-[100px] rounded-lg  transition-shadow p-4 flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#006699] backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center space-x-2">
            <img className='w-[180px]' src={logo} alt="" />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-white hover:text-[#000] transition-colors">Наши продукты</a>
            <a href="#info" className="text-white hover:text-[#000000] transition-colors">О компании</a>
            <a href="https://loc.polivchi.uz" className="text-white hover:text-[#000] transition-colors">Локации</a>
            <a href="#contact" className="text-white hover:text-[#000] transition-colors">Контакты</a>
            <a href="https://b2b.moysklad.ru/public/zw65lYon6gVH">
              <button className="bg-white text-[#006699] px-4 py-2 rounded-full hover:bg-opacity-90 transition-all flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Купить сейчас
              </button>
            </a>
          </nav>

          <button
            className="md:hidden text-white "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a
                href="#products"
                className="text-white hover:text-[#006699] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Наши продукты
              </a>
              <a
                href="#features"
                className="text-white hover:text-[#006699] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О компании
              </a>
              <a
                href="#branches"
                className="text-white hover:text-[#006699] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Локации
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[#006699] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <button className="bg-white text-[#006699] px-4 py-2 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://oiler.uz/static/media/small.89e415cba90db714f5eb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-[#006699] bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Качественная продукция для орошения на любой вкус!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Расширение возможностей ваших полей, садов и газонов с помощью передовых решений
          </p>
          <a href='https://b2b.moysklad.ru/public/zw65lYon6gVH'> 
            <button className="bg-white text-[#006699] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all flex items-center mx-auto">
              Купить сейчас
              <ChevronRight className="ml-2" />
            </button>
          </a>
        </div>
      </section>
          {/* About Section */}
      <section className="py-20" id='info'>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className=" aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <img
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1200&h=900"
                  alt="Modern irrigation system"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-sm:hidden  absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl">
                <div className="text-center">
                  <h4 className="text-4xl font-bold text-[#006699] mb-2">8+</h4>
                  <p className="text-gray-600">Годы совершенства</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Лидер в области современных решений для орошения
                </h2>
                <div className="w-20 h-1 bg-[#006699]"></div>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              С 2017 года Polivchi находится на переднем крае инновационных решений в области орошения,
обслуживая сельскохозяйственные предприятия, специалистов по ландшафтному дизайну и домовладельцев по всей стране.
Наша приверженность совершенству и устойчивому управлению водными ресурсами сделала нас надежным именем в
отрасли.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Package className="w-6 h-6 text-[#006699]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Премиум-продукты</h3>
                    <p className="text-gray-600">Тщательно подобранное оборудование для орошения высшего класса от ведущих производителей</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Timer className="w-6 h-6 text-[#006699]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Консультация эксперта</h3>
                    <p className="text-gray-600">Профессиональное руководство по вашим конкретным потребностям в орошении</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#006699] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center">
                Узнать больше
                  <ChevronRight className="ml-2" />
                </button>
                <a href="https://loc.polivchi.uz/">
                  <button className="border-2 border-[#006699] text-[#006699] px-8 py-3 rounded-full hover:bg-[#006699] hover:text-white transition-all flex items-center justify-center">
                  Связаться с нами
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Рекомендуемые продукты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#006699]">{product.price}</span>
                    <a href="https://b2b.moysklad.ru/public/zw65lYon6gVH">
                      <button className="bg-[#006699] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all flex items-center">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Купить сейчас
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <feature.icon className="w-12 h-12 text-[#006699] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  /> */}
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Наши надежные партнеры
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Мы сотрудничаем с ведущими брендами в сфере орошения, чтобы предоставить вам лучшие решения.
          </p>
        </div>
          <SponsorsGrid />
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Посетите наши магазины
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-6">{branch.name}</h3>
                <div className="space-y-4 mb-8">
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 text-[#006699] mr-3" />
                    {branch.address}
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 text-[#006699] mr-3" />
                    {branch.phone}
                  </p>
                  <p className="flex items-center">
                    <Send className="w-5 h-5 text-[#006699] mr-3" />
                    {branch.telegram}
                  </p>
                </div>
                <a href="tel:{branch.tel}">
                <button className="w-full bg-[#006699] text-white py-3 rounded-full hover:bg-opacity-90 transition-all">
                Связаться с этим филиалом
                </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#006699]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
          Улучшите свою систему орошения сегодня!
          </h2>
          <p className="text-xl text-white/90 mb-8">
          Ознакомьтесь с нашей полной коллекцией высококачественной продукции для орошения
          </p>
          <a href="https://b2b.moysklad.ru/public/zw65lYon6gVH">
          <button className="bg-white text-[#006699] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all flex items-center mx-auto">
          Купить сейчас
            <ChevronRight className="ml-2" />
          </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img className='w-[180px]' src={logo2} alt="" />
                
              </div>
              <p className="text-white ">
                SUG'ORISH TIZIMLARI 
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                  Наши продукты
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                  О компании
                  </a>
                </li>
                <li>
                  <a href="#branches" className="hover:text-white transition-colors">
                  Локации
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                  Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://www.instagram.com/polivchi/" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://t.me/polivchi" className="hover:text-white transition-colors">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Информационный бюллетень</h4>
              <p className="text-gray-400 mb-4">
              Подпишитесь, чтобы получать обновления о новых продуктах и ​​специальных предложениях
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Введите свой адрес электронной почты"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#006699] focus:border-transparent text-white"
                />
                <button className="w-full bg-[#006699] text-white py-2 rounded-lg hover:bg-opacity-90 transition-all">
                 Подписаться
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">
                © 2018-2025 Polivchi. Все права защищены.
              </p>
              <div className="flex space-x-4">
                
                <a href="https://www.instagram.com/polivchi/" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://t.me/polivchi" className="text-gray-400 hover:text-white transition-colors">
                  <Send className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
