import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const schedule = [
    { time: '06:00 - 09:00', show: 'Утренний Восток', host: 'Алексей Соколов' },
    { time: '09:00 - 12:00', show: 'День в эфире', host: 'Мария Петрова' },
    { time: '12:00 - 15:00', show: 'Дневной драйв', host: 'Игорь Волков' },
    { time: '15:00 - 18:00', show: 'Вечерний микс', host: 'Анна Белова' },
    { time: '18:00 - 21:00', show: 'Прайм-тайм', host: 'Дмитрий Кузнецов' },
    { time: '21:00 - 00:00', show: 'Ночной Восток', host: 'Елена Морозова' },
  ];

  const hosts = [
    { name: 'Алексей Соколов', role: 'Утреннее шоу', experience: '12 лет в эфире' },
    { name: 'Мария Петрова', role: 'Дневной эфир', experience: '8 лет в эфире' },
    { name: 'Игорь Волков', role: 'Дневной драйв', experience: '10 лет в эфире' },
    { name: 'Анна Белова', role: 'Вечерний эфир', experience: '6 лет в эфире' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Radio" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Восток FM</h1>
                <p className="text-xs text-muted-foreground">94.0 FM</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#live" className="text-sm font-medium hover:text-accent transition-colors">Прямой эфир</a>
              <a href="#schedule" className="text-sm font-medium hover:text-accent transition-colors">Программа</a>
              <a href="#hosts" className="text-sm font-medium hover:text-accent transition-colors">Ведущие</a>
              <a href="#advertising" className="text-sm font-medium hover:text-accent transition-colors">Реклама</a>
              <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">О радио</a>
              <a href="#contacts" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
            </nav>

            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section id="live" className="py-16 bg-gradient-to-br from-primary via-primary/95 to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">В ЭФИРЕ</span>
            </div>
            
            <h2 className="text-5xl font-bold mb-4">Восток 94.0 FM</h2>
            <p className="text-xl mb-8 text-white/90">Деловое радио для профессионалов</p>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-left">
                  <p className="text-sm text-white/70 mb-1">Сейчас играет</p>
                  <p className="text-2xl font-semibold">Утренний Восток</p>
                  <p className="text-white/80">Алексей Соколов</p>
                </div>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-20 h-20 rounded-full bg-white hover:bg-white/90"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} size={32} className="text-primary" />
                </Button>
              </div>
              
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full w-1/3"></div>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4">
                <Icon name="Users" size={28} className="mb-2 mx-auto" />
                <p className="text-2xl font-bold">500K+</p>
                <p className="text-sm text-white/80">Слушателей</p>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4">
                <Icon name="Signal" size={28} className="mb-2 mx-auto" />
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-white/80">В эфире</p>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4">
                <Icon name="TrendingUp" size={28} className="mb-2 mx-auto" />
                <p className="text-2xl font-bold">№1</p>
                <p className="text-sm text-white/80">Деловое радио</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Программа передач</h2>
            <p className="text-muted-foreground text-lg">Ваш день с Востоком 94.0 FM</p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-4">
            {schedule.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <Icon name="Clock" size={24} className="text-accent mx-auto mb-2" />
                      <p className="text-sm font-semibold text-muted-foreground">{item.time}</p>
                    </div>
                    <div className="border-l-2 border-accent pl-6">
                      <h3 className="text-xl font-semibold mb-1">{item.show}</h3>
                      <p className="text-muted-foreground">{item.host}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="Info" size={20} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hosts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши ведущие</h2>
            <p className="text-muted-foreground text-lg">Профессионалы с многолетним опытом</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {hosts.map((host, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mic" size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{host.name}</h3>
                    <p className="text-accent font-medium mb-2">{host.role}</p>
                    <p className="text-sm text-muted-foreground">{host.experience}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advertising" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Реклама на радио</h2>
              <p className="text-white/90 text-lg">Эффективный инструмент для вашего бизнеса</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <Icon name="Target" size={36} className="mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Точная аудитория</h3>
                <p className="text-white/80">Деловые люди, предприниматели, руководители</p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <Icon name="BarChart3" size={36} className="mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Высокий охват</h3>
                <p className="text-white/80">500,000+ активных слушателей ежедневно</p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <Icon name="Zap" size={36} className="mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Быстрый результат</h3>
                <p className="text-white/80">Запуск рекламы в течение 24 часов</p>
              </Card>
            </div>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Пакеты размещения</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Старт</div>
                  <p className="text-white/80 mb-4">10 выходов в день</p>
                  <Button size="lg" variant="secondary" className="w-full">Заказать</Button>
                </div>
                <div className="text-center border-2 border-accent rounded-lg p-4 -m-4">
                  <div className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full mb-2">Популярный</div>
                  <div className="text-3xl font-bold mb-2">Бизнес</div>
                  <p className="text-white/80 mb-4">20 выходов в день</p>
                  <Button size="lg" variant="secondary" className="w-full">Заказать</Button>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Премиум</div>
                  <p className="text-white/80 mb-4">30+ выходов в день</p>
                  <Button size="lg" variant="secondary" className="w-full">Заказать</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">О радиостанции</h2>
              <p className="text-muted-foreground text-lg">Восток 94.0 FM — ваш деловой партнер в эфире</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Icon name="Building2" size={40} className="text-accent mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Наша миссия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Предоставлять качественный контент для деловой аудитории, 
                  информировать о важных событиях бизнеса и экономики, 
                  создавать эффективную платформу для рекламодателей.
                </p>
              </Card>

              <Card className="p-8">
                <Icon name="Award" size={40} className="text-accent mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Наши достижения</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>15 лет в эфире</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Лидер среди деловых радиостанций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>500+ довольных рекламодателей</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-muted-foreground text-lg">Свяжитесь с нами удобным способом</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon name="Phone" size={40} className="text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-1">Ежедневно 9:00-21:00</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon name="Mail" size={40} className="text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@vostok.fm</p>
                <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon name="MapPin" size={40} className="text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва</p>
                <p className="text-sm text-muted-foreground mt-1">ул. Радио, д. 94</p>
              </Card>
            </div>

            <Card className="mt-8 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Напишите нам</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон или Email</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Расскажите о вашем запросе..."
                  ></textarea>
                </div>
                <Button size="lg" className="w-full md:w-auto">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Radio" size={24} />
                <span className="font-bold text-xl">Восток FM</span>
              </div>
              <p className="text-white/80 text-sm">
                Деловое радио для профессионалов. В эфире с 2009 года.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#live" className="hover:text-white transition-colors">Прямой эфир</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Программа</a></li>
                <li><a href="#hosts" className="hover:text-white transition-colors">Ведущие</a></li>
                <li><a href="#advertising" className="hover:text-white transition-colors">Реклама</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О радио</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресс-центр</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Восток 94.0 FM. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
