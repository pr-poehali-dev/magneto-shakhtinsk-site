import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "CreditCard",
      title: "Kaspi QR и карты",
      description: "Kaspi QR, все банковские карты, Apple Pay, Google Pay",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0",
    },
    {
      icon: "Truck",
      title: "Доставка по Шахтинску",
      description: "Бесплатная доставка от 8000 тенге в любую точку города",
      gradient: "from-green-500 to-emerald-500",
      delay: "100",
    },
    {
      icon: "Gift",
      title: "Halyk Bonus",
      description: "Участвуем в программе лояльности Halyk Bank",
      gradient: "from-purple-500 to-pink-500",
      delay: "200",
    },
    {
      icon: "Users",
      title: "Для предприятий",
      description:
        "Специальные цены для кафе, столовых и организаций Шахтинска",
      gradient: "from-orange-500 to-red-500",
      delay: "300",
    },
    {
      icon: "Zap",
      title: "Экспресс-касса",
      description: "Отдельная касса для покупок до 5 товаров",
      gradient: "from-yellow-500 to-orange-500",
      delay: "400",
    },
    {
      icon: "Thermometer",
      title: "Свежие продукты",
      description:
        "Собственная хлебопекарня и молочная продукция местных фермеров",
      gradient: "from-teal-500 to-blue-500",
      delay: "500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-black text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
            Наши преимущества
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Все что нужно для комфортных покупок в современном формате
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 animate-fade-in`}
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`mx-auto mb-6 p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                >
                  <Icon
                    name={service.icon as any}
                    size={40}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed text-lg">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special offer banner */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-block p-8 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Icon
              name="Star"
              size={48}
              className="text-yellow-300 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              Жители Шахтинска получают скидку 3%
            </h3>
            <p className="text-red-100 text-lg">
              При предъявлении документа с пропиской в городе
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
