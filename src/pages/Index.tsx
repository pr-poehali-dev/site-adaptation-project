import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hosts = [
    { name: 'Гарик Авакян', role: 'Ведущий' },
    { name: 'Рустем Азизов', role: 'Ведущий' },
    { name: 'Михаил Азаров', role: 'Ведущий' },
    { name: 'DJ Ramis', role: 'DJ' },
    { name: 'Ден Ковалия', role: 'Ведущий' },
    { name: 'Наиля Шахова', role: 'Ведущая' },
  ];

  const cities = [
    { name: 'Москва', freq: '94,0 FM' },
    { name: 'Армавир', freq: '101,6 FM' },
    { name: 'Назрань', freq: '102,4 FM' },
    { name: 'Магас', freq: '102,4 FM' },
    { name: 'Майкоп', freq: '98,4 FM' },
    { name: 'Нальчик', freq: '98,6 FM' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Icon name="Radio" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Восток FM</h1>
                <p className="text-xs text-muted-foreground">С нами отпуск круглый год!</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#live" className="text-sm font-medium hover:text-primary transition-colors">Прямой эфир</a>
              <a href="#frequencies" className="text-sm font-medium hover:text-primary transition-colors">Частоты</a>
              <a href="#hosts" className="text-sm font-medium hover:text-primary transition-colors">Ведущие</a>
              <a href="#advertising" className="text-sm font-medium hover:text-primary transition-colors">Реклама</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О радио</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>

            <Button 
              variant="ghost" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              <a href="#live" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Прямой эфир</a>
              <a href="#frequencies" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Частоты</a>
              <a href="#hosts" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Ведущие</a>
              <a href="#advertising" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Реклама</a>
              <a href="#about" className="block py-2 text-sm font-medium hover:text-primary transition-colors">О радио</a>
              <a href="#contacts" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
          )}
        </div>
      </header>

      <section id="live" className="relative py-24 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8 animate-pulse">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm font-semibold tracking-wide">В ЭФИРЕ СЕЙЧАС</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">Восток FM</h2>
            <p className="text-2xl md:text-3xl mb-4 text-white/95 font-medium">С нами отпуск круглый год!</p>
            <p className="text-lg mb-12 text-white/80">Настроение летнего отпуска в каждом звуке</p>
            
            <Card className="bg-white/15 backdrop-blur-xl border-white/30 p-10 mb-10 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left flex-1">
                  <p className="text-sm text-white/70 mb-2 uppercase tracking-wide">Сейчас в эфире</p>
                  <p className="text-3xl md:text-4xl font-bold mb-2">Прямой эфир</p>
                  <p className="text-xl text-white/90">Москва 94,0 FM</p>
                </div>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-24 h-24 rounded-full bg-white hover:bg-white/95 shadow-xl hover:scale-110 transition-all"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} size={40} className="text-primary" />
                </Button>
              </div>
              
              <div className="mt-8 space-y-2">
                <div className="flex justify-between text-sm text-white/70">
                  <span>Громкость</span>
                  <span>80%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-white to-accent rounded-full w-4/5 transition-all"></div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="bg-white/15 backdrop-blur-xl border-white/30 p-6 hover:bg-white/20 transition-all">
                <Icon name="Users" size={36} className="mb-3 mx-auto text-white" />
                <p className="text-3xl font-bold mb-1">883K+</p>
                <p className="text-sm text-white/90">Слушателей в месяц</p>
              </Card>
              <Card className="bg-white/15 backdrop-blur-xl border-white/30 p-6 hover:bg-white/20 transition-all">
                <Icon name="MapPin" size={36} className="mb-3 mx-auto text-white" />
                <p className="text-3xl font-bold mb-1">100+</p>
                <p className="text-sm text-white/90">Городов России</p>
              </Card>
              <Card className="bg-white/15 backdrop-blur-xl border-white/30 p-6 hover:bg-white/20 transition-all">
                <Icon name="Waves" size={36} className="mb-3 mx-auto text-white" />
                <p className="text-3xl font-bold mb-1">24/7</p>
                <p className="text-sm text-white/90">В эфире</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="frequencies" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Частоты вещания
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Слушайте Восток FM в вашем городе
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-primary"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Radio" size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{city.name}</h3>
                    <p className="text-2xl font-bold text-primary">{city.freq}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <div className="flex items-center gap-4">
                <Icon name="Headphones" size={40} className="text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-lg mb-1">Онлайн-вещание</p>
                  <p className="text-sm text-muted-foreground">Слушайте в любой точке мира через интернет</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="hosts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Наши ведущие
            </h2>
            <p className="text-muted-foreground text-lg">Голоса, которые создают настроение</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hosts.map((host, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all group hover:scale-105">
                <div className="text-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name="Mic" size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{host.name}</h3>
                  <p className="text-primary font-semibold text-lg">{host.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advertising" className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Реклама на Восток FM</h2>
              <p className="text-white/90 text-xl">Ваше сообщение услышат 883 500 человек ежемесячно</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 bg-white/15 backdrop-blur-xl border-white/30 hover:bg-white/20 transition-all">
                <Icon name="Target" size={48} className="mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-3">Широкий охват</h3>
                <p className="text-white/85 leading-relaxed">Более 100 городов России слушают наше радио каждый день</p>
              </Card>
              <Card className="p-8 bg-white/15 backdrop-blur-xl border-white/30 hover:bg-white/20 transition-all">
                <Icon name="TrendingUp" size={48} className="mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-3">Эффективность</h3>
                <p className="text-white/85 leading-relaxed">Высокая лояльность аудитории и узнаваемость бренда</p>
              </Card>
              <Card className="p-8 bg-white/15 backdrop-blur-xl border-white/30 hover:bg-white/20 transition-all">
                <Icon name="Zap" size={48} className="mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-3">Гибкость</h3>
                <p className="text-white/85 leading-relaxed">Различные форматы размещения под ваши задачи</p>
              </Card>
            </div>

            <Card className="p-10 bg-white/10 backdrop-blur-xl border-white/30">
              <h3 className="text-3xl font-bold mb-8 text-center">Свяжитесь с отделом продаж</h3>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <Icon name="Phone" size={40} className="mx-auto mb-3" />
                  <p className="text-xl font-semibold mb-2">Телефон</p>
                  <a href="tel:+74959253317" className="text-2xl font-bold hover:text-accent transition-colors">
                    +7 (495) 925-33-17
                  </a>
                </div>
                <div>
                  <Icon name="Mail" size={40} className="mx-auto mb-3" />
                  <p className="text-xl font-semibold mb-2">Email</p>
                  <a href="mailto:reklama@vostok.fm" className="text-2xl font-bold hover:text-accent transition-colors">
                    reklama@vostok.fm
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                О радиостанции
              </h2>
              <p className="text-muted-foreground text-lg">Восток FM — это настроение летнего отпуска в каждом звуке</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 hover:shadow-xl transition-all">
                <Icon name="Sun" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Наша философия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  С нами отпуск круглый год! Мы создаем атмосферу праздника и позитива, 
                  даря слушателям солнечное настроение каждый день.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all">
                <Icon name="Award" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Наши достижения</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>883 500 слушателей ежемесячно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Вещание в 100+ городах России</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Круглосуточное вещание 24/7</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Контакты
              </h2>
              <p className="text-muted-foreground text-lg">Мы всегда на связи</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 hover:shadow-xl transition-all">
                <Icon name="MapPin" size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Адрес</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Зубарев пер., 15 к.1<br />
                  Москва, 129164
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all">
                <Icon name="Phone" size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Телефоны</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-medium">Отдел продаж:</span> <a href="tel:+74959253317" className="hover:text-primary">+7 (495) 925-33-17</a></p>
                  <p><span className="font-medium">Офис:</span> <a href="tel:+74959833317" className="hover:text-primary">+7 (495) 983-33-17</a></p>
                  <p><span className="font-medium">Прямой эфир:</span> <a href="tel:+79160000940" className="hover:text-primary">+7 916 000 0 940</a></p>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all md:col-span-2">
                <Icon name="Mail" size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Email</h3>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <p className="font-medium mb-1">Отдел продаж</p>
                    <a href="mailto:reklama@vostok.fm" className="text-primary hover:underline">reklama@vostok.fm</a>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Региональный отдел</p>
                    <a href="mailto:region@vostok.fm" className="text-primary hover:underline">region@vostok.fm</a>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Музыкальная редакция</p>
                    <a href="mailto:music@vostok.fm" className="text-primary hover:underline">music@vostok.fm</a>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Офис</p>
                    <a href="mailto:office@vostok.fm" className="text-primary hover:underline">office@vostok.fm</a>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Напишите нам</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="example@mail.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Сообщение</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Расскажите о вашем запросе..."
                  ></textarea>
                </div>
                <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Radio" size={28} />
                <span className="font-bold text-2xl">Восток FM</span>
              </div>
              <p className="text-white/85 text-sm leading-relaxed mb-4">
                С нами отпуск круглый год! Настроение летнего отпуска в каждом звуке.
              </p>
              <p className="text-white/70 text-xs">
                883 500 слушателей ежемесячно<br />
                100+ городов России
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/85">
                <li><a href="#live" className="hover:text-white transition-colors">Прямой эфир</a></li>
                <li><a href="#frequencies" className="hover:text-white transition-colors">Частоты</a></li>
                <li><a href="#hosts" className="hover:text-white transition-colors">Ведущие</a></li>
                <li><a href="#advertising" className="hover:text-white transition-colors">Реклама</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/85">
                <li><a href="tel:+74959253317" className="hover:text-white transition-colors">+7 (495) 925-33-17</a></li>
                <li><a href="mailto:office@vostok.fm" className="hover:text-white transition-colors">office@vostok.fm</a></li>
                <li><a href="mailto:reklama@vostok.fm" className="hover:text-white transition-colors">reklama@vostok.fm</a></li>
                <li className="text-white/70 text-xs pt-2">Москва, Зубарев пер., 15 к.1</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3 mb-4">
                <Button variant="secondary" size="icon" className="rounded-full hover:scale-110 transition-transform">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full hover:scale-110 transition-transform">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full hover:scale-110 transition-transform">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
              <p className="text-white/70 text-xs">
                Следите за новостями и акциями в наших социальных сетях
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2024 Восток FM. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
