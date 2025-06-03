import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Контакты и режим работы
          </h2>
          <p className="text-xl text-gray-600">Всегда рады вас видеть!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-red-600">
                <Icon name="MapPin" size={24} />
                Адрес и время работы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Home" size={20} className="text-gray-500 mt-1" />
                <div>
                  <p className="font-semibold">г. Шахтинск</p>
                  <p className="text-gray-600">ул. Центральная, 45</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Clock" size={20} className="text-gray-500 mt-1" />
                <div>
                  <p className="font-semibold">Режим работы:</p>
                  <p className="text-gray-600">Понедельник - Воскресенье</p>
                  <p className="text-gray-600">7:00 - 23:00</p>
                  <p className="text-green-600 text-sm">Без выходных</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Car" size={20} className="text-gray-500 mt-1" />
                <div>
                  <p className="font-semibold">Парковка</p>
                  <p className="text-gray-600">
                    Бесплатная парковка для покупателей
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-red-600">
                <Icon name="Phone" size={24} />
                Связь с нами
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-gray-500" />
                <div>
                  <p className="font-semibold">Телефон магазина:</p>
                  <p className="text-gray-600">+7 (727) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Icon name="Headphones" size={20} className="text-gray-500" />
                <div>
                  <p className="font-semibold">Горячая линия:</p>
                  <p className="text-gray-600">8-800-200-90-02</p>
                  <p className="text-sm text-gray-500">Звонок бесплатный</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-gray-500" />
                <div>
                  <p className="font-semibold">Email для обращений:</p>
                  <p className="text-gray-600">shakhtinsk@magnit.kz</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-gray-500"
                />
                <div>
                  <p className="font-semibold">Telegram-бот:</p>
                  <p className="text-gray-600">@MagnitShakhtinsk_bot</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
