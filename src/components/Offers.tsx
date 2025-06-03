import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Offers = () => {
  const offers = [
    {
      title: "Скидки до 30%",
      description: "На молочные продукты и хлебобулочные изделия",
      validity: "Действует до 15 декабря",
      color: "bg-orange-500",
    },
    {
      title: "2+1 в подарок",
      description: "На товары для дома и бытовую химию",
      validity: "Каждые выходные",
      color: "bg-green-500",
    },
    {
      title: "Кэшбэк 5%",
      description: "За покупки свыше 5000 тенге по карте лояльности",
      validity: "Постоянная акция",
      color: "bg-blue-500",
    },
  ];

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Актуальные акции
          </h2>
          <p className="text-xl text-gray-600">
            Экономьте с нашими выгодными предложениями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 ${offer.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <Icon name="Percent" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <p className="text-sm text-red-600 font-semibold">
                  {offer.validity}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-md mx-auto bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardContent className="p-6">
              <Icon name="Gift" size={48} className="mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Карта лояльности</h3>
              <p className="mb-4 opacity-90">
                Получите карту и копите бонусы с каждой покупки!
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                Оформить карту
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Offers;
