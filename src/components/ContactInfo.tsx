import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white via-red-200 to-red-300 bg-clip-text text-transparent">
            Мы всегда на связи
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Приезжайте к нам или свяжитесь любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Location and hours */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-red-400 text-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                Наш адрес и режим работы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <Icon
                  name="Home"
                  size={24}
                  className="text-gray-300 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-xl text-white">г. Шахтинск</p>
                  <p className="text-gray-300">
                    ул. Ленина, 125 (рядом с автовокзалом)
                  </p>
                  <p className="text-gray-400 text-sm">
                    Карагандинская область, Казахстан
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <Icon
                  name="Clock"
                  size={24}
                  className="text-gray-300 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-xl text-white">Режим работы:</p>
                  <p className="text-green-400 font-semibold">
                    Понедельник - Воскресенье
                  </p>
                  <p className="text-white text-xl">07:00 - 23:00</p>
                  <p className="text-green-400 text-sm font-medium">
                    Работаем без выходных и праздников
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <Icon
                  name="Car"
                  size={24}
                  className="text-gray-300 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-xl text-white">Парковка</p>
                  <p className="text-gray-300">
                    Бесплатная парковка на 50 машин
                  </p>
                  <p className="text-blue-400 text-sm">
                    Удобный въезд с ул. Ленина
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact methods */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-blue-400 text-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                Как с нами связаться
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <Icon
                  name="Phone"
                  size={24}
                  className="text-green-400 flex-shrink-0"
                />
                <div className="flex-grow">
                  <p className="font-bold text-white">Телефон магазина:</p>
                  <p className="text-green-400 text-xl font-mono">
                    +7 (7212) 44-55-66
                  </p>
                </div>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <Icon name="Phone" size={16} />
                </Button>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <Icon
                  name="Headphones"
                  size={24}
                  className="text-orange-400 flex-shrink-0"
                />
                <div className="flex-grow">
                  <p className="font-bold text-white">Служба поддержки:</p>
                  <p className="text-orange-400 text-xl font-mono">
                    8-800-777-77-77
                  </p>
                  <p className="text-sm text-gray-400">
                    Звонок бесплатный по Казахстану
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <Icon
                  name="Mail"
                  size={24}
                  className="text-purple-400 flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-white">Email:</p>
                  <p className="text-purple-400">shakhtinsk@magnit.kz</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <Icon
                  name="MessageCircle"
                  size={24}
                  className="text-blue-400 flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-white">WhatsApp:</p>
                  <p className="text-blue-400">+7 (701) 234-56-78</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick actions */}
        <div className="text-center animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 p-6 h-auto flex-col gap-3 text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
            >
              <Icon name="Navigation" size={32} />
              <span>Построить маршрут</span>
            </Button>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 p-6 h-auto flex-col gap-3 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <Icon name="Phone" size={32} />
              <span>Позвонить сейчас</span>
            </Button>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-6 h-auto flex-col gap-3 text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <Icon name="MessageCircle" size={32} />
              <span>Написать в WhatsApp</span>
            </Button>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-3xl border border-white/10">
            <Icon
              name="Heart"
              size={48}
              className="text-red-400 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-3">
              Магнито Шахтинск — ваш семейный магазин
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Уже более 10 лет мы заботимся о жителях Шахтинска, предлагая
              качественные продукты по доступным ценам
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
