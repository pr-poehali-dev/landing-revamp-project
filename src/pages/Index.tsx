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

  const [budget, setBudget] = useState('100000');
  const [ticketPrice, setTicketPrice] = useState('2000');

  const calculateROI = () => {
    const budgetNum = parseInt(budget) || 0;
    const priceNum = parseInt(ticketPrice) || 0;
    const avgROI = 3.8;
    const revenue = budgetNum * avgROI;
    const tickets = Math.floor(revenue / priceNum);
    const profit = revenue - budgetNum;
    const roiPercent = Math.floor((profit / budgetNum) * 100);

    return { revenue, tickets, profit, roiPercent };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 15 минут",
    });
    setFormData({ name: '', phone: '', email: '', eventType: '', message: '' });
  };

  const stats = calculateROI();

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Ticket" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-primary">EventAds Pro</div>
          </div>
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
              Получить расчёт
            </Button>
          </div>
        </div>
      </header>

      <section className="relative pt-32 pb-24 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-primary text-sm font-bold border-2 border-primary/30">
              <Icon name="TrendingUp" size={18} />
              <span>За последний квартал клиенты заработали 2,4 млн ₽ с нашей рекламы</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1]">
              Продаём билеты<br />
              на ваши мероприятия<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">с гарантией ROI 300%+</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              Работаем только с event-индустрией: концерты, спектакли, стендапы, фестивали.<br />
              <strong className="text-foreground">Запускаем рекламу за 4 часа. Первые продажи — через 48 часов.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 shadow-xl animate-scale-in">
                Получить прогноз продаж бесплатно
                <Icon name="ArrowRight" size={22} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2">
                Смотреть кейсы
                <Icon name="BarChart3" size={22} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-black text-primary mb-2">92%</div>
                <div className="text-base font-semibold text-foreground">Средняя заполняемость залов</div>
                <div className="text-sm text-muted-foreground mt-1">по 33 проектам в 2024</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-secondary/20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-5xl font-black text-secondary mb-2">48ч</div>
                <div className="text-base font-semibold text-foreground">До первых продаж билетов</div>
                <div className="text-sm text-muted-foreground mt-1">в 84% запущенных кампаний</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-5xl font-black text-primary mb-2">380%</div>
                <div className="text-base font-semibold text-foreground">Средний ROI по проектам</div>
                <div className="text-sm text-muted-foreground mt-1">гарантируем минимум 300%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">Нам доверяют организаторы</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-3xl font-bold text-foreground">Crocus Hall</div>
            <div className="text-3xl font-bold text-foreground">Театр Наций</div>
            <div className="text-3xl font-bold text-foreground">Глав Club</div>
            <div className="text-3xl font-bold text-foreground">А2 Green</div>
            <div className="text-3xl font-bold text-foreground">Известия Hall</div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Что вы получаете</h2>
            <p className="text-xl md:text-2xl text-muted-foreground">Не трафик ради галочки, а конкретные продажи билетов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Первые продажи через 48 часов",
                description: "Средний срок до первой продажи — 48 часов. В 84% кейсов первые заказы поступают в первые сутки. Настраиваем на горячую аудиторию с высоким intent to buy.",
                badge: "Быстрый старт"
              },
              {
                icon: "Shield",
                title: "Гарантия ROI 300% в договоре",
                description: "Прописываем минимальный ROI 300% в договоре. Не достигли — возвращаем разницу из своего гонорара. Средний ROI по портфолио — 380%. Работаем на результат.",
                badge: "Юридическая защита"
              },
              {
                icon: "BarChart3",
                title: "Прозрачная аналитика 24/7",
                description: "Личный кабинет с онлайн-статистикой. Видите в реальном времени: бюджет, клики, заказы, выручку, ROI. Ежедневные отчёты на почту. Полный контроль каждого рубля.",
                badge: "Реальные цифры"
              },
              {
                icon: "Rocket",
                title: "Запуск рекламы за 4 часа",
                description: "Обратились утром — реклама работает вечером. Не теряем ни дня продаж. У нас готовые шаблоны для event-индустрии и отработанные связки ключевых слов.",
                badge: "Без задержек"
              },
              {
                icon: "Award",
                title: "Узкая специализация только event",
                description: "Работаем исключительно с event-индустрией с 2019 года. Знаем поведение аудитории концертов, театров, стендапов. Понимаем сезонность и ценовые сегменты. 33 кейса.",
                badge: "Эксперты ниши"
              },
              {
                icon: "FileText",
                title: "Официальный договор с KPI",
                description: "Договор с прописанными метриками и ответственностью. Работаем с ИП и ООО. Предоставляем все закрывающие документы. Ваша бухгалтерия будет в восторге.",
                badge: "Прозрачность"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4 text-xs font-bold text-primary/60 bg-primary/10 px-3 py-1 rounded-full">
                    {item.badge}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">Прозрачный процесс от заявки до заполненного зала</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Анализ мероприятия",
                description: "Изучаем ваше событие, аудиторию, конкурентов. Определяем оптимальную стратегию продвижения и прогнозируем ROI.",
                time: "30 минут",
                icon: "Search"
              },
              {
                step: "02",
                title: "Согласование и запуск",
                description: "Подписываем договор с KPI, настраиваем рекламные кампании, креативы, посадочные. Запускаем в течение 4 часов.",
                time: "4 часа",
                icon: "Zap"
              },
              {
                step: "03",
                title: "Оптимизация и масштабирование",
                description: "Анализируем результаты каждый день, отключаем неэффективное, усиливаем рабочие связки. Масштабируем лучшие кампании.",
                time: "Ежедневно",
                icon: "TrendingUp"
              },
              {
                step: "04",
                title: "Отчёты и корректировки",
                description: "Еженедельные встречи, детальная аналитика, рекомендации. Корректируем стратегию на основе реальных данных о продажах.",
                time: "Еженедельно",
                icon: "FileText"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="bg-white border-2 border-border hover:border-primary rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl">
                  <div className="text-7xl font-black text-primary/10 absolute top-4 right-4">{item.step}</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 relative z-10">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <div className="text-xs font-bold text-secondary mb-3 uppercase tracking-wider">{item.time}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Реальные кейсы с цифрами</h2>
            <p className="text-xl text-muted-foreground">Скриншоты из рекламных кабинетов предоставляем по запросу</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Концерт звезды эстрады",
                location: "Москва, Crocus City Hall",
                type: "Концерт • 2500 мест",
                budget: "250 000 ₽",
                sold: "2 407",
                total: "2 500",
                revenue: "1 292 000 ₽",
                roi: "417%",
                days: "37 дней",
                cpa: "438 ₽",
                description: "Продано 96,3% билетов. Средняя стоимость заказа — 438₽. Первые 50 продаж в первые сутки. Связка: Яндекс.Директ поиск + ретаргетинг VK на LAL-аудиторию.",
                icon: "Music"
              },
              {
                title: "Стендап-шоу резидента ТНТ",
                location: "Санкт-Петербург, А2",
                type: "Комедия • 900 мест",
                budget: "120 000 ₽",
                sold: "847",
                total: "900",
                revenue: "578 000 ₽",
                roi: "382%",
                days: "29 дней",
                cpa: "352 ₽",
                description: "Заполнено 94,1% за месяц. Целевая аудитория 25-40 лет. 68% заказов с мобильных. Средняя цена клика — 24₽. Conversion rate: 3,8%.",
                icon: "Mic"
              },
              {
                title: "Музыкальный фестиваль",
                location: "Казань, открытая площадка",
                type: "Фестиваль • 5000 мест",
                budget: "480 000 ₽",
                sold: "4 612",
                total: "5 000",
                revenue: "2 214 000 ₽",
                roi: "361%",
                days: "52 дня",
                cpa: "521 ₽",
                description: "Заполнено 92,2% за 7 недель. Разные ценовые сегменты (от 800₽ до 5000₽). Geo-таргетинг на 200км. Пики продаж в ПТ-ВС.",
                icon: "Users"
              },
              {
                title: "Театральная премьера",
                location: "Екатеринбург, Театр драмы",
                type: "Спектакль • 650 мест",
                budget: "95 000 ₽",
                sold: "612",
                total: "650",
                revenue: "367 000 ₽",
                roi: "286%",
                days: "41 день",
                cpa: "389 ₽",
                description: "Продано 94,1% мест. Аудитория 35-60 лет. 73% заказов с desktop. Высокий средний чек. Низкий CPA за счёт узкого таргетинга.",
                icon: "Theater"
              },
              {
                title: "Детский мюзикл",
                location: "Новосибирск, ДК",
                type: "Семейное • 1200 мест",
                budget: "135 000 ₽",
                sold: "1 147",
                total: "1 200",
                revenue: "574 000 ₽",
                roi: "325%",
                days: "33 дня",
                cpa: "412 ₽",
                description: "Заполнено 95,5%. Основная аудитория — родители 28-45 лет. Упор на выходные показы. 82% покупок за 3 дня до события.",
                icon: "Baby"
              },
              {
                title: "Рок-концерт",
                location: "Москва, Adrenaline Stadium",
                type: "Концерт • 3500 мест",
                budget: "340 000 ₽",
                sold: "3 201",
                total: "3 500",
                revenue: "1 472 000 ₽",
                roi: "333%",
                days: "44 дня",
                cpa: "467 ₽",
                description: "Продано 91,4% билетов. Мужская аудитория 25-45 лет. Высокая вовлечённость в VK. Conversion на лендинге — 4,2%.",
                icon: "Guitar"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary hover:shadow-2xl transition-all duration-500 group overflow-hidden animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary to-secondary p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <Icon name={item.icon as any} size={40} className="mb-3 opacity-90" />
                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{item.location}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold bg-white/20 px-3 py-1 rounded-full w-fit">
                      <Icon name="Ticket" size={14} />
                      {item.type}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Бюджет рекламы</div>
                        <div className="text-lg font-bold">{item.budget}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Выручка</div>
                        <div className="text-lg font-bold text-primary">{item.revenue}</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">Продано билетов</span>
                        <span className="text-2xl font-black text-primary">{item.sold}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(parseInt(item.sold) / parseInt(item.total)) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-muted-foreground">из {item.total} доступных мест</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <div className="text-2xl font-black text-secondary">{item.roi}</div>
                        <div className="text-xs text-muted-foreground">ROI</div>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <div className="text-2xl font-black text-primary">{item.cpa}</div>
                        <div className="text-xs text-muted-foreground">CPA</div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-2xl font-black text-foreground">{item.days.split(' ')[0]}</div>
                        <div className="text-xs text-muted-foreground">дней</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed border-t pt-4">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-secondary/5 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Отзывы организаторов</h2>
            <p className="text-xl text-muted-foreground">Реальные люди, с которыми можно связаться</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Александр П.",
                role: "Продюсер концертных туров",
                company: "Concert Production",
                text: "До EventAds пробовали три агентства — потратили 400к, результат ноль. Здесь за 2 недели до концерта начала паниковать — продано только 40%. Ребята взялись, за 12 дней довели до 91%. Теперь делаем с ними все туры.",
                rating: 5,
                metric: "ROI 380% за 3 проекта",
                avatar: "User"
              },
              {
                name: "Марина К.",
                role: "Директор театра",
                company: "Театр современной драмы",
                text: "Работаем с EventAds третий сезон. Главное — прозрачность. Вижу в кабинете каждый заказ, каждый рубль. Средняя заполняемость выросла с 67% до 91-93%. Бюджет на рекламу окупается в 4-5 раз стабильно.",
                rating: 5,
                metric: "91% средняя заполняемость",
                avatar: "UserCircle"
              },
              {
                name: "Дмитрий Ш.",
                role: "Организатор фестивалей",
                company: "FestivalHub",
                text: "Провожу open-air фестивали на 3-5 тысяч человек. Раньше рекламу делал сам — conversion была 1,2%. EventAds подняли до 4,2%, при этом CPA снизили на 30%. Плюс консультируют по дизайну афиш и лендингам.",
                rating: 5,
                metric: "4,2% conversion rate",
                avatar: "User"
              },
              {
                name: "Елена В.",
                role: "Event-менеджер",
                company: "StandUp Moscow",
                text: "Запускаем 2-3 стендап-шоу в месяц. Нужна была команда, которая работает быстро и без косяков. EventAds запускают рекламу в день обращения, первые продажи на следующий день. Делаем с ними уже 8 месяцев — без нареканий.",
                rating: 5,
                metric: "Запуск за 4 часа",
                avatar: "UserCircle"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.avatar as any} size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg mb-1">{item.name}</div>
                      <div className="text-sm text-muted-foreground mb-1">{item.role}</div>
                      <div className="text-xs text-primary font-semibold">{item.company}</div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5 italic">"{item.text}"</p>
                  <div className="bg-primary/10 px-4 py-3 rounded-lg border-l-4 border-primary">
                    <div className="text-sm font-bold text-primary">{item.metric}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на вопросы, которые задают чаще всего</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Почему именно 300% ROI в гарантии?",
                answer: "Потому что средний ROI по нашим проектам — 380%. Мы берём заведомо достижимую планку в 300%, чтобы гарантировать результат даже в сложных условиях: непопулярный артист, будний день, высокие цены на билеты. Если не достигаем — возвращаем деньги из своего гонорара."
              },
              {
                question: "Какой минимальный бюджет на рекламу?",
                answer: "Рекомендуем от 80 000 ₽ для небольших мероприятий (до 500 мест) и от 150 000 ₽ для средних залов (500-2000 мест). Это минимум для нормального охвата и тестирования разных каналов. Но мы оценим ваш случай индивидуально — иногда можно с меньшим бюджетом."
              },
              {
                question: "Сколько времени нужно до мероприятия?",
                answer: "Идеально — 4-6 недель. Тогда успеваем протестировать аудитории, найти лучшие связки, масштабировать. Но были кейсы, когда брались за 2 недели и продавали 90%+ зала. Минимум для запуска — 10 дней до события."
              },
              {
                question: "Работаете только с Яндекс.Директ?",
                answer: "Нет, используем комплексный подход: Яндекс.Директ (поиск + РСЯ), VK Реклама (таргет + ретаргетинг), Telegram Ads (для молодой аудитории), myTarget (для широкого охвата). Выбираем каналы под вашу аудиторию и задачи."
              },
              {
                question: "Что если билеты не продадутся?",
                answer: "По договору мы гарантируем ROI 300%. Если не достигли — возвращаем разницу. Но за 5 лет практики такого не было ни разу. У нас отработанная методология, проверенные связки, понимание event-индустрии. Продаём даже сложные кейсы."
              },
              {
                question: "Можно увидеть скриншоты из кабинетов?",
                answer: "Да, после подписания NDA предоставляем скриншоты рекламных кабинетов наших проектов: статистику кампаний, метрики, графики продаж. Можем организовать созвон с одним из клиентов, чтобы вы услышали отзыв напрямую."
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 border-border rounded-lg px-6 hover:border-primary transition-colors">
                <AccordionTrigger className="text-lg font-bold text-left hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Получите бесплатный прогноз продаж
              </h2>
              <p className="text-xl mb-8 opacity-95">
                Ответим за 15 минут. Рассчитаем бюджет, спрогнозируем количество продаж и ROI для вашего мероприятия. <strong>Без обязательств и предоплат.</strong>
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                  <span className="text-lg">Прогноз продаж на основе 33 кейсов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                  <span className="text-lg">Расчёт оптимального бюджета</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                  <span className="text-lg">Рекомендации по стратегии</span>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl mb-6 -mx-2">
                  <h3 className="text-2xl font-bold text-white mb-4">Калькулятор ROI</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white/90">Бюджет на рекламу</label>
                      <Input
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="h-12 text-lg bg-white"
                        placeholder="100000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white/90">Средний чек билета</label>
                      <Input
                        type="number"
                        value={ticketPrice}
                        onChange={(e) => setTicketPrice(e.target.value)}
                        className="h-12 text-lg bg-white"
                        placeholder="2000"
                      />
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-5 rounded-lg space-y-3">
                    <div className="flex justify-between items-center text-white">
                      <span className="font-semibold">Прогноз выручки:</span>
                      <span className="text-2xl font-black">{stats.revenue.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between items-center text-white">
                      <span className="font-semibold">Продано билетов:</span>
                      <span className="text-2xl font-black">~{stats.tickets}</span>
                    </div>
                    <div className="flex justify-between items-center text-white border-t border-white/30 pt-3">
                      <span className="font-semibold">ROI:</span>
                      <span className="text-3xl font-black text-yellow-300">{stats.roiPercent}%</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
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
                  <div className="grid md:grid-cols-2 gap-5">
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
                        placeholder="Концерт, спектакль, стендап..."
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
                      placeholder="Дата, город, количество мест, средний чек билета, текущая заполняемость (если известна)"
                      className="min-h-28"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-lg py-7 shadow-xl">
                    Получить прогноз бесплатно
                    <Icon name="TrendingUp" size={22} className="ml-2" />
                  </Button>
                  <div className="bg-secondary/10 p-5 rounded-xl border border-secondary/30">
                    <div className="flex items-start gap-3">
                      <Icon name="Shield" size={24} className="text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-foreground mb-1">Гарантируем конфиденциальность</p>
                        <p className="text-sm text-muted-foreground">
                          Отвечаем за 15 минут. Никаких спам-звонков. Работаем по договору с NDA.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Ticket" size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-primary">EventAds Pro</div>
              </div>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Продаём билеты на концерты, спектакли, стендапы и фестивали через контекстную рекламу. Работаем только с event-индустрией с 2019 года. Гарантируем ROI 300%+ в договоре.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Mail" size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Phone" size={18} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Контакты</h3>
              <div className="space-y-3 text-sm">
                <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-primary transition-colors opacity-80 hover:opacity-100">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </a>
                <a href="mailto:info@eventads.pro" className="flex items-center gap-2 hover:text-primary transition-colors opacity-80 hover:opacity-100">
                  <Icon name="Mail" size={16} />
                  info@eventads.pro
                </a>
                <div className="flex items-start gap-2 opacity-80">
                  <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Москва, Пресненская наб., 12</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Услуги</h3>
              <div className="space-y-3 text-sm opacity-80">
                <div>Яндекс.Директ</div>
                <div>VK Реклама</div>
                <div>Telegram Ads</div>
                <div>Аналитика</div>
                <div>Консалтинг</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <div>© 2024 EventAds Pro. Все права защищены.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
