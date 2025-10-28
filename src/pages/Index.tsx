import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 15 минут",
    });
    setFormData({ name: '', phone: '', email: '', eventType: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">EventAds Pro</div>
          <div className="flex items-center gap-6">
            <a href="tel:+79991234567" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Icon name="Phone" size={18} />
              <span className="hidden md:inline">+7 (999) 123-45-67</span>
            </a>
            <a href="mailto:info@eventads.pro" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Icon name="Mail" size={18} />
              <span className="hidden md:inline">info@eventads.pro</span>
            </a>
            <Button size="sm" className="bg-secondary hover:bg-secondary/90">
              Начать
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
              33+ успешных кейса в индустрии мероприятий
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Full House вашего концерта <br />
              <span className="text-primary">за 6 недель</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Профессиональная реклама в Яндекс.Директ и VK. Заполняем залы, продаём билеты, приводим аудиторию.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 animate-scale-in">
                Получить консультацию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Смотреть кейсы
                <Icon name="PlayCircle" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-primary">87%</div>
                <div className="text-sm text-muted-foreground">Успешных кампаний</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">На связи</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Мы знаем, как продавать билеты на ваши мероприятия</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Target",
                title: "Точечное таргетирование",
                description: "Находим именно тех, кто купит билеты. Глубокая сегментация аудитории по интересам, поведению и демографии."
              },
              {
                icon: "TrendingUp",
                title: "Высокий ROI",
                description: "87% наших кампаний показывают ROI выше 300%. Каждый рубль в рекламу приносит минимум 3 рубля выручки."
              },
              {
                icon: "Zap",
                title: "Запуск в день обращения",
                description: "Не теряем времени. Настраиваем и запускаем рекламу в тот же день, когда вы обратились."
              },
              {
                icon: "Clock",
                title: "Поддержка 24/7",
                description: "Всегда на связи в чате. Отвечаем в течение 15 минут. У нас нет понятия «нерабочее время»."
              },
              {
                icon: "Award",
                title: "33+ кейса в нише",
                description: "Работали с концертами, спектаклями, стендапами, фестивалями. Знаем специфику индустрии."
              },
              {
                icon: "CheckCircle",
                title: "100% исполнительность",
                description: "Быстрое реагирование на задачи. Делаем то, что обещаем, в срок и с результатом."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground">Простой и прозрачный процесс от звонка до аншлага</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                icon: "MessageCircle",
                title: "Консультация",
                description: "Звоните или оставляйте заявку. Обсудим ваше мероприятие, цели и бюджет."
              },
              {
                number: "02",
                icon: "Settings",
                title: "Настройка",
                description: "Создаём стратегию, настраиваем кампании под вашу аудиторию."
              },
              {
                number: "03",
                icon: "Rocket",
                title: "Запуск",
                description: "Запускаем рекламу в согласованные сроки. Быстро и без задержек."
              },
              {
                number: "04",
                icon: "BarChart",
                title: "Результат",
                description: "Получаете полный отчёт о проданных билетах и эффективности."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                    <Icon name={step.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-primary/20" style={{ transform: 'translateX(-50%)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на главные вопросы о нашей работе</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Какое время потребуется на настройку рекламы?",
                answer: "Мы запускаем рекламу в день обращения. Настройка базовой кампании занимает 2-4 часа. Для комплексных проектов с несколькими площадками — до 1 рабочего дня."
              },
              {
                question: "Какова минимальная стоимость рекламной кампании?",
                answer: "Минимальный бюджет на рекламу — от 30 000 рублей в месяц. Наша комиссия — 20% от бюджета или фиксированная плата от 20 000 руб/мес. Итоговая стоимость зависит от масштаба мероприятия и целей."
              },
              {
                question: "Как я могу следить за результатами кампании?",
                answer: "Предоставляем доступ к личному кабинету с онлайн-статистикой 24/7. Еженедельно отправляем отчёты на почту. В любой момент можете позвонить или написать — расскажем всё в деталях."
              },
              {
                question: "Вы гарантируете продажу всех билетов?",
                answer: "Мы гарантируем профессиональную настройку и ведение рекламы с максимальной эффективностью. В 87% случаев достигаем поставленных KPI по продажам. Точные гарантии обсуждаем индивидуально после анализа вашего мероприятия."
              },
              {
                question: "С какими типами мероприятий вы работаете?",
                answer: "Работаем с концертами, спектаклями, стендап-шоу, фестивалями, спортивными событиями, выставками, конференциями. 33+ успешных кейса в развлекательной индустрии."
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b-2">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Готовы заполнить зал?</h2>
            <p className="text-xl opacity-90">Оставьте заявку — свяжемся в течение 15 минут</p>
          </div>
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Ваше имя *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Телефон *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Тип мероприятия</label>
                    <Input
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      placeholder="Концерт, спектакль, фестиваль..."
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем мероприятии: дата, место, ожидаемая аудитория..."
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-primary">EventAds Pro</div>
              <p className="text-sm opacity-80">Профессиональная реклама концертов и мероприятий в Яндекс.Директ и VK</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </a>
                <a href="mailto:info@eventads.pro" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Mail" size={16} />
                  info@eventads.pro
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} fallback="Image" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} fallback="Share2" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <div>© 2025 EventAds Pro. Все права защищены.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
