import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">МАГНИТО</h1>
          <h2 className="text-2xl font-light mb-2">Шахтинск</h2>
          <p className="text-xl opacity-90">Ваш надежный продуктовый магазин</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-red-600 hover:bg-gray-100"
          >
            <Icon name="MapPin" size={20} />
            Найти нас на карте
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-red-600"
          >
            <Icon name="Phone" size={20} />
            Связаться с нами
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <Icon name="Clock" size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-lg font-semibold mb-2">Удобные часы работы</h3>
            <p className="opacity-90">Ежедневно с 7:00 до 23:00</p>
          </div>
          <div className="text-center">
            <Icon
              name="ShoppingCart"
              size={48}
              className="mx-auto mb-4 opacity-80"
            />
            <h3 className="text-lg font-semibold mb-2">Широкий ассортимент</h3>
            <p className="opacity-90">Более 10,000 товаров</p>
          </div>
          <div className="text-center">
            <Icon
              name="Percent"
              size={48}
              className="mx-auto mb-4 opacity-80"
            />
            <h3 className="text-lg font-semibold mb-2">Выгодные цены</h3>
            <p className="opacity-90">Акции каждый день</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
