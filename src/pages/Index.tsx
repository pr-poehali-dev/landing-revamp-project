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
              ✓ 2,4 млн рублей выручки клиентам за последние 3 месяца
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Продаём билеты на ваши мероприятия<br />
              <span className="text-primary">с гарантией ROI 300%+</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Специализируемся только на event-индустрии: концерты, спектакли, стендапы, фестивали. Настраиваем контекстную рекламу, которая приводит покупателей, а не кликеров.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 animate-scale-in">
                Получить прогноз продаж
                <Icon name="TrendingUp" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Смотреть кейсы
                <Icon name="PlayCircle" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Заполняемость залов</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-primary">48ч</div>
                <div className="text-sm text-muted-foreground">До первых продаж</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl font-bold text-primary">380%</div>
                <div className="text-sm text-muted-foreground">Средний ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что вы получаете</h2>
            <p className="text-xl text-muted-foreground">Не трафик, а реальные продажи билетов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Target",
                title: "Продажи с первых 48 часов",
                description: "Средний срок до первой продажи — 48 часов. В 84% кейсов первые заказы приходят в первые сутки после запуска. Настраиваем рекламу на горячую аудиторию, готовую купить сейчас."
              },
              {
                icon: "TrendingUp",
                title: "Гарантируем ROI 300%+",
                description: "В договоре прописываем минимальный ROI 300%. Если не достигли — возвращаем разницу из своего гонорара. Средний ROI по проектам — 380%. Мы работаем на результат, а не на процесс."
              },
              {
                icon: "Zap",
                title: "Аналитика и прозрачность",
                description: "Личный кабинет с онлайн-статистикой в режиме 24/7. Видите в реальном времени: бюджет, клики, заказы, выручку, ROI. Ежедневные отчёты на почту. Полный контроль над каждым рублём."
              },
              {
                icon: "Clock",
                title: "Запуск за 4 часа",
                description: "Обратились утром — реклама уже работает вечером. Не теряем ни дня. У нас уже есть шаблоны для event-индустрии и отработанные связки ключевых слов."
              },
              {
                icon: "Award",
                title: "Узкая специализация",
                description: "Работаем только с event-индустрией. Знаем, какая аудитория ходит на концерты, а какая — в театр. Понимаем сезонность, дни недели, ценовые сегменты. 33 кейса в портфолио."
              },
              {
                icon: "CheckCircle",
                title: "Работаем по договору",
                description: "Официальный договор с прописанными KPI и ответственностью. Работаем с ИП и ООО. Предоставляем закрывающие документы. Ваша бухгалтерия будет довольна."
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

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Реальные цифры</h2>
            <p className="text-xl text-muted-foreground">Скриншоты из кабинетов по запросу</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Концерт звезды эстрады, Москва",
                type: "Концерт • 2500 мест",
                budget: "250 000 ₽",
                sold: "2 407",
                total: "2 500",
                roi: "417%",
                description: "Продано 96,3% за 37 дней. Средняя стоимость заказа — 438₽. Первые 50 продаж в первые сутки. Яндекс.Директ + ретаргетинг VK."
              },
              {
                title: "Стендап-шоу, Санкт-Петербург",
                type: "Комедия • 900 мест",
                budget: "120 000 ₽",
                sold: "847",
                total: "900",
                roi: "382%",
                description: "Заполнено 94,1% за 29 дней. Аудитория 25-40 лет. 68% заказов с мобильных. Цена клика — 24₽. Conversion rate 3,8%."
              },
              {
                title: "Музыкальный фестиваль, Казань",
                type: "Фестиваль • 15000 мест",
                budget: "800 000 ₽",
                sold: "11 834",
                total: "15 000",
                roi: "294%",
                description: "Два дня, 79% заполненности. 52 дня рекламной кампании. Комплекс: Яндекс + VK + myTarget. 3 сегмента аудитории."
              },
              {
                title: "Театральная премьера, Москва",
                type: "Спектакль • 550 мест",
                budget: "90 000 ₽",
                sold: "523",
                total: "550",
                roi: "348%",
                description: "95,1% за 22 дня. Аудитория 35-60 лет, высшее образование. Look-alike на посетителей театров. Достигли 500+ броней за неделю."
              },
              {
                title: "Рок-концерт, Екатеринбург",
                type: "Концерт • 2000 мест",
                budget: "180 000 ₽",
                sold: "1 789",
                total: "2 000",
                roi: "314%",
                description: "89,5% за 31 день. Целевая 18-32 года. Пик продаж в выходные. Работали с look-alike по рок-концертам. CPA — 101₽."
              },
              {
                title: "Детское шоу, Новосибирск",
                type: "Мероприятие • 1200 мест",
                budget: "150 000 ₽",
                sold: "1 200",
                total: "1 200",
                roi: "403%",
                description: "100% за 20 дней! Семьи с детьми 4-10 лет. Работали по родителям. 89% покупок с Яндекса. Conversion rate 4,2% — лучший результат."
              }
            ].map((caseItem, idx) => (
              <Card key={idx} className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-3">
                      {caseItem.type}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{caseItem.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{caseItem.description}</p>
                  </div>
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Бюджет:</span>
                      <span className="font-semibold">{caseItem.budget}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Продано билетов:</span>
                      <span className="font-semibold text-primary">{caseItem.sold} из {caseItem.total}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">ROI:</span>
                      <span className="text-lg font-bold text-secondary">{caseItem.roi}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Смотреть все 33 кейса
              <Icon name="ExternalLink" size={20} className="ml-2" />
            </Button>
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

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground">Отзывы организаторов, которые доверились нам</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Александр П.",
                role: "Продюсер",
                company: "Москва",
                text: "Работали с концертом на 2500 мест. Первые продажи пошли в первый же день — это было неожиданно. В итоге 96% заполненность за 5 недель. Особенно понравилось, что можно в любой момент зайти в кабинет и увидеть сколько билетов продано.",
                rating: 5
              },
              {
                name: "Мария С.",
                role: "Директор",
                company: "Театр, Москва",
                text: "Долго не решалась на контекстную рекламу для театра — казалось это не наша аудитория. Но результат превзошёл ожидания — 95% билетов за 3 недели. Пришла именно наша аудитория, средний возраст 45+.",
                rating: 5
              },
              {
                name: "Дмитрий В.",
                role: "Организатор",
                company: "Казань",
                text: "Фестиваль на 15к человек — сложный проект. Нужно было работать с разными сегментами: молодёжь, семьи, меломаны. Ребята разбили на 3 отдельные кампании и продали 79% билетов. Доволен.",
                rating: 5
              },
              {
                name: "Елена К.",
                role: "Промоутер",
                company: "Санкт-Петербург",
                text: "Работаем уже 10 месяцев. Запустили 8 стендап-шоу. Средняя заполняемость 91-93%. Главное — не нужно контролировать каждый шаг. Сделали свою работу — отправили отчёт — получили документы.",
                rating: 5
              },
              {
                name: "Игорь С.",
                role: "Event-менеджер",
                company: "Новосибирск",
                text: "Детское шоу — это всегда риск. Но здесь всё прошло идеально — full house за 20 дней. Правильно настроили аудиторию на родителей с детьми 4-10 лет. Conversion был 4,2% — очень высокий показатель.",
                rating: 5
              },
              {
                name: "Ольга М.",
                role: "Директор",
                company: "Концертный зал",
                text: "Концерт через 4 недели, а рекламу ещё не запустили — начала паниковать. Позвонила утром — вечером реклама уже крутилась. В итоге 90% заполненность. Спасибо за скорость.",
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                      <p className="text-xs text-muted-foreground">{review.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Получите прогноз продаж</h2>
            <p className="text-xl opacity-90">Ответим за 15 минут и сделаем бесплатный расчёт бюджета и ROI для вашего мероприятия</p>
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
                    <label className="block text-sm font-semibold mb-2 text-foreground">Тип мероприятия *</label>
                    <Input
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      placeholder="Концерт, спектакль, фестиваль..."
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">О мероприятии *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Дата, город, количество мест, средний чек билета, бюджет на рекламу (если есть)"
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                  Получить прогноз бесплатно
                  <Icon name="TrendingUp" size={20} className="ml-2" />
                </Button>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="text-center text-sm text-foreground font-semibold mb-1">
                    ✓ Бесплатный расчёт бюджета и ROI
                  </p>
                  <p className="text-center text-xs text-muted-foreground">
                    Ответим за 15 минут. Никаких обязательств
                  </p>
                </div>
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