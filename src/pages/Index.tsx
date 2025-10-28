import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Хинкали куриные',
    description: 'Сочные грузинские пельмени с куриным фаршем и ароматными специями',
    price: 590,
    image: 'https://cdn.poehali.dev/projects/5deb565d-ec38-4773-abdd-8dc7b8841e45/files/718749e2-b8bf-4374-bd15-796f0b67c211.jpg'
  },
  {
    id: 2,
    name: 'Пельмени куриные',
    description: 'Домашние пельмени с нежной куриной начинкой по авторскому рецепту',
    price: 490,
    image: 'https://cdn.poehali.dev/projects/5deb565d-ec38-4773-abdd-8dc7b8841e45/files/93dbbcd5-1d3c-4846-8e9a-34e757df5a2a.jpg'
  },
  {
    id: 3,
    name: 'Хачапури по-аджарски',
    description: 'Традиционная лодочка с сыром сулугуни, маслом и яичным желтком',
    price: 690,
    image: 'https://cdn.poehali.dev/projects/5deb565d-ec38-4773-abdd-8dc7b8841e45/files/1aaa69bb-4303-4aff-9d42-a19d09bd4ef0.jpg'
  },
  {
    id: 4,
    name: 'Чебурек с мясом',
    description: 'Хрустящий чебурек с пышной начинкой из отборного мяса',
    price: 390,
    image: 'https://cdn.poehali.dev/projects/5deb565d-ec38-4773-abdd-8dc7b8841e45/files/718749e2-b8bf-4374-bd15-796f0b67c211.jpg'
  }
];

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения брони',
    });
    setFormData({ name: '', phone: '', date: '', time: '', guests: '', comment: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">Кавказ</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#booking" className="text-foreground hover:text-primary transition-colors">Бронирование</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (910) 335-49-90
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/5deb565d-ec38-4773-abdd-8dc7b8841e45/files/90d56c11-0520-4979-b626-e2c488f133b8.jpg"
            alt="Интерьер ресторана"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Кавказ</h2>
          <p className="text-xl md:text-2xl mb-4 text-secondary font-light tracking-widest uppercase">
            Премиальный Ресторан
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Погрузитесь в атмосферу подлинного гостеприимства и насладитесь 
            изысканными блюдами кавказской кухни
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наше меню
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-secondary text-white hover:bg-secondary hover:text-foreground px-8 py-6 text-lg"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Забронировать стол
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-secondary" />
        </div>
      </section>

      <section id="menu" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-secondary text-sm uppercase tracking-widest mb-4 font-medium">Наше меню</p>
            <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Авторские блюда</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Каждое блюдо приготовлено по традиционным рецептам 
              из отборных продуктов высочайшего качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-foreground px-4 py-2 rounded-full font-semibold">
                    {item.price} ₽
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-bold mb-3 text-foreground">{item.name}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-secondary text-sm uppercase tracking-widest mb-4 font-medium">Бронирование</p>
            <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Забронировать стол</h3>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку, и мы подберем для вас лучший столик
            </p>
          </div>

          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-base">Дата *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-base">Время *</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-base">Гостей *</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      placeholder="2"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment" className="text-base">Комментарий</Label>
                  <Textarea
                    id="comment"
                    placeholder="Особые пожелания или предпочтения"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="min-h-24"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h4 className="text-3xl font-bold mb-4">Кавказ</h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                Премиальный ресторан кавказской кухни с богатыми традициями гостеприимства
              </p>
            </div>
            
            <div>
              <h5 className="text-xl font-semibold mb-4 text-secondary">Контакты</h5>
              <div className="space-y-3 text-primary-foreground/90">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (910) 335-49-90</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@kavkaz-restaurant.ru</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-xl font-semibold mb-4 text-secondary">Режим работы</h5>
              <div className="space-y-2 text-primary-foreground/90">
                <p>Пн-Чт: 12:00 - 23:00</p>
                <p>Пт-Сб: 12:00 - 01:00</p>
                <p>Вс: 12:00 - 23:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/70">
            <p>&copy; 2024 Ресторан Кавказ. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;