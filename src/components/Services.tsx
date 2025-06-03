import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "CreditCard",
      title: "Банковские карты",
      description: "Принимаем все виды банковских карт и бесконтактную оплату",
    },
    {
      icon: "Truck",
      title: "Доставка продуктов",
      description: "Доставляем продукты на дом в удобное для вас время",
    },
    {
      icon: "Gift",
      title: "Программа лояльности",
      description: "Копите бонусы и получайте выгодные предложения",
    },
    {
      icon: "Users",
      title: "Корпоративные клиенты",
      description: "Специальные условия для организаций и предприятий",
    },
    {
      icon: "Zap",
      title: "Быстрое обслуживание",
      description: "Несколько касс и минимальные очереди",
    },
    {
      icon: "Shield",
      title: "Качество товаров",
      description: "Строгий контроль качества и свежести продуктов",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг для комфортных покупок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full w-fit">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-red-600"
                  />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
