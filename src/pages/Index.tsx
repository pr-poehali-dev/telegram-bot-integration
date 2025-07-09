import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const telegramMessage = `Новая заявка с сайта WXCXW DESIGN:\n\nИмя: ${formData.name}\nКонтакт: ${formData.contact}\nУслуга: ${formData.service}\nСообщение: ${formData.message}`;

    // Отправка в Telegram через бота (замените username на вашего бота)
    const telegramBotUrl = `https://t.me/wxcxw_design_bot?start=${encodeURIComponent(telegramMessage)}`;

    // Открыть чат с ботом
    window.open(telegramBotUrl, "_blank");

    // Очистить форму после отправки
    setFormData({ name: "", contact: "", service: "", message: "" });

    // Показать уведомление
    alert("Спасибо! Ваша заявка отправлена!");
  };

  const services = [
    {
      title: "БРЕНДИНГ",
      description:
        "Фирменный стиль, логотип и айдентика, которые выделяют вас на рынке",
      icon: "Palette",
      projects: Array(4).fill(null),
    },
    {
      title: "UX/UI - ДИЗАЙН",
      description:
        "Интуитивные интерфейсы для сайтов и приложений, которые удерживают пользователей",
      icon: "Layout",
      projects: Array(4).fill(null),
    },
    {
      title: "ГРАФИЧЕСКИЙ ДИЗАЙН",
      description:
        "Полиграфия, иллюстрации и презентации — визуальный язык, который говорит за вас",
      icon: "Image",
      projects: Array(4).fill(null),
    },
    {
      title: "ДОПОЛНИТЕЛЬНО",
      description: "Эксклюзивные решения, корпоративный стиль",
      icon: "Plus",
      projects: Array(3).fill(null),
    },
  ];

  const teamMembers = [
    {
      name: "АНАСТАСИЯ ЧЕРНЫШЕВА",
      role: "ГРАФИЧЕСКИЙ ДИЗАЙНЕР",
      description: "В РАБОТЕ СО СЛОЖНЫМИ ПРОЕКТАМИ 3 ГОДА",
    },
    {
      name: "АРТУР КАРИМОТО",
      role: "ГРАФИЧЕСКИЙ ДИЗАЙНЕР",
      description: "СПЕЦИАЛИЗИРУЕТСЯ НА БРЕНДИНГЕ И UX/UI ДИЗАЙНЕ",
    },
    {
      name: "АРТУР КАРИМОТО",
      role: "ГРАФИЧЕСКИЙ ДИЗАЙНЕР",
      description: "СПЕЦИАЛИЗИРУЕТСЯ НА БРЕНДИНГЕ И UX/UI ДИЗАЙНЕ",
    },
    {
      name: "АРТУР КАРИМОТО",
      role: "ГРАФИЧЕСКИЙ ДИЗАЙНЕР",
      description: "СПЕЦИАЛИЗИРУЕТСЯ НА БРЕНДИНГЕ И UX/UI ДИЗАЙНЕ",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Menu" size={24} className="text-white" />
        </div>
        <div className="text-2xl font-bold tracking-wider">WXCXW</div>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-black"
        >
          ЗАКАЗАТЬ ДИЗАЙН
        </Button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl font-bold tracking-tight">
              WX<span className="gradient-text">C</span>XW
            </h1>
            <h2 className="text-2xl font-medium text-gray-300">DESIGN</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              СТУДИЯ ГДЕ РОЖДАЮТСЯ СМЕЛЫЕ ВИЗУАЛЬНЫЕ РЕШЕНИЯ.
              <br />
              МЫ СОЗДАЕМ ДИЗАЙН КОТОРЫЙ РАБОТАЕТ НА ВАШИ ЦЕЛИ.
              <br />
              БРЕНДИНГ, UI/UX, ГРАФИЧЕСКИЙ ДИЗАЙН И ИЛЛЮСТРАЦИИ —<br />
              ВАШ БРЕНД ЗАСЛУЖИВАЕТ УЗНАВАЕМОСТИ
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              ОБСУДИТЬ ПРОЕКТ
            </Button>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-900 rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={80} className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">НАШИ УСЛУГИ</h2>
        </div>

        {services.map((service, index) => (
          <div key={index} className="mb-16 animate-slide-up">
            <div className="flex items-center space-x-4 mb-6">
              <Icon
                name={service.icon as any}
                size={32}
                className="text-primary"
              />
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </div>
            <p className="text-gray-400 mb-8 text-lg">{service.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.projects.map((_, projectIndex) => (
                <div
                  key={projectIndex}
                  className="aspect-square bg-gray-800 rounded-lg hover-scale cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon name="Image" size={32} className="text-gray-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Portfolio Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">НАШ ДИЗАЙН В ДЕЙСТВИИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">UX/UI DESIGN</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Monitor" size={40} className="text-gray-600" />
                </div>
                <p className="text-sm text-gray-400">
                  Дизайн интерфейса для мобильного приложения
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">БРЕНДИНГ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Palette" size={40} className="text-gray-600" />
                </div>
                <p className="text-sm text-gray-400">
                  Создание фирменного стиля
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">ГРАФ. ДИЗАЙН</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Image" size={40} className="text-gray-600" />
                </div>
                <p className="text-sm text-gray-400">Разработка полиграфии</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">ДОПОЛНИТЕЛЬНО</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Plus" size={40} className="text-gray-600" />
                </div>
                <p className="text-sm text-gray-400">Эксклюзивные решения</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ВЫГОДА - КРУТОЙ ДИЗАЙН</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            СТИЛЬНЫЕ РЕШЕНИЯ - ЭТО ИСТОРИЯ.
            <br />
            НАШИ КЛИЕНТЫ ПОЛУЧАЮТ КРУТЫЕ КАРТИНКИ, А РЕЗУЛЬТАТЫ РЕШЕНИЯ КОТОРЫЕ
            УВЕЛИЧИВАЮТ ПРОДАЖИ И ДОВЕРИЕ К БРЕНДУ.
          </p>
        </div>
        <div className="flex justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            СДЕЛАТЬ ПОРЯДОК ПРЯМО
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            ДАВАЙТЕ ОБСУДИМ ВАШ ПРОЕКТ
          </h2>
        </div>
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Телефон или email"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Интересующая услуга"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-32"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
              >
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">СО СВЯЖЕМ</p>
          <div className="flex justify-center space-x-6">
            <Icon name="Phone" size={24} className="text-primary" />
            <Icon name="MessageCircle" size={24} className="text-primary" />
            <Icon name="Mail" size={24} className="text-primary" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">WXCXW DESIGN — ЭТО ЛЮДИ</h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto">
            С 2019 ГОДА МЫ ДЕЛАЕМ ДИЗАЙН КОТОРЫЙ ХОЧЕТСЯ НАЗВАТЬ «МАКНЕТИК».
            НАЧИНАЕМ С БИФТИНГА, А ТЕПЕРЬ — СТУДИЯ С ЭКСПЕРТАМИ И ПОРТФОЛИО И
            ФИЛОСОФИЕЙ. НЕТ ШАБЛОНОВ.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="User" size={32} className="text-gray-600" />
              </div>
              <h4 className="font-bold mb-2">{member.name}</h4>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ОТЗЫВЫ</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full mr-4 flex items-center justify-center">
                  <Icon name="User" size={20} className="text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold">АНДРЕЙ МАРЧЕНКО</h4>
                  <p className="text-gray-400 text-sm">ВЛАДЕЛЕЦ СЕТЬ ШКОЛ</p>
                </div>
              </div>
              <p className="text-gray-300">
                ВСЕ АРХИТЕКТУРНО, КРЕАТИВНО И КАЧЕСТВЕННО
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full mr-4 flex items-center justify-center">
                  <Icon name="User" size={20} className="text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold">ДО</h4>
                  <p className="text-gray-400 text-sm">ПОСЛЕ</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-800 rounded-lg"></div>
                <div className="aspect-square bg-gray-800 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">WXCXW</div>
            <div className="flex space-x-6">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
