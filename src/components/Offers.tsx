
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Offers = () => {
  const offers = [
    {
      title: "Мегаскидки",
      description: "До 60% на товары для дома, косметику и бытовую технику",
      validity: "Каждую пятницу-воскресенье",
      color: "from-orange-500 to-red-500",
      icon: "Flame",
      badge: "ХИТ"
    },
    {
      title: "3 по цене 2",
      description: "На всю молочную продукцию казахстанских производителей",
      validity: "Постоянная акция",
      color: "from-green-500 to-emerald-500",
      icon: "Package",
      badge: "ВЫГОДНО"
    },
    {
      title: "Kaspi Кэшбэк 7%",
      description: "При оплате картой Kaspi Gold возврат 7% на Kaspi счет",
      validity: "До конца месяца",
      color: "from-blue-500 to-cyan-500",
      icon: "CreditCard",
      badge: "НОВИНКА"
    },
  ];

  const weeklyDeals = [
    { day: "ПН", deal: "Хлеб -20%", icon: "Wheat" },
    { day: "ВТ", deal: "Мясо -15%", icon: "Beef" },
    { day: "СР", deal: "Фрукты -25%", icon: "Apple" },
    { day: "ЧТ", deal: "Рыба -30%", icon: "Fish" },
    { day: "ПТ", deal: "Молоко -10%", icon: "Milk" },
    { day: "СБ", deal: "Овощи -20%", icon: "Carrot" },
    { day: "ВС", deal: "Сладости -35%", icon: "Candy" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-200/40 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Icon name="Percent" size={40} className="text-red-600" />
            <h2 className="text-5xl font-black text-gray-800 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Горячие акции
            </h2>
            <Icon name="Percent" size={40} className="text-red-600" />
          </div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Экономьте больше с эксклюзивными предложениями для жителей Шахтинска
          </p>
        </div>

        {/* Main offers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 hover:-translate-y-3 animate-fade-in overflow-hidden"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="relative">
                <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${offer.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                  {offer.badge}
                </div>
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${offer.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                    <Icon name={offer.icon as any} size={36} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-red-600 transition-colors duration-300">
                    {offer.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">{offer.description}</p>
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 rounded-xl">
                    <p className="text-red-700 font-bold text-sm">
                      {offer.validity}
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Weekly deals */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Скидки каждый день недели
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
            {weeklyDeals.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-red-100"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Icon name={item.icon as any} size={20} className="text-white" />
                </div>
                <div className="font-bold text-red-600 text-lg mb-1">{item.day}</div>
                <div className="text-gray-700 text-sm font-medium">{item.deal}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Loyalty card */}
        <div className="text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <CardContent className="p-10 relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name="CreditCard" size={48} className="text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Карта постоянного покупателя</h3>
              <p className="text-xl mb-6 opacity-95 leading-relaxed">
                Накапливайте баллы и получайте персональные скидки до 15%!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Gift" size={24} />
                  Оформить бесплатно
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg px-8 py-4"
                >
                  <Icon name="Info" size={24} />
                  Узнать больше
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Offers;
