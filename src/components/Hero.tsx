import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-red-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center animate-fade-in">
          {/* Main logo and title */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-scale-in">
              <span className="text-6xl font-black text-white tracking-wider">
                М
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white via-red-200 to-red-100 bg-clip-text text-transparent animate-fade-in">
              МАГНИТО
            </h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="MapPin" size={28} className="text-red-300" />
              <h2 className="text-3xl font-light tracking-wide">Шахтинск</h2>
            </div>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Крупнейший продуктовый гипермаркет в Карагандинской области
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg"
            >
              <Icon name="Navigation" size={24} />
              Построить маршрут
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-red-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 px-8 py-4 text-lg"
            >
              <Icon name="Phone" size={24} />
              +7 (7212) 44-55-66
            </Button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Icon name="Clock" size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Работаем для вас</h3>
              <p className="opacity-90 text-lg">Ежедневно с 7:00 до 23:00</p>
              <p className="text-red-300 text-sm mt-2">365 дней в году</p>
            </div>

            <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in delay-200">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Icon name="ShoppingCart" size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Огромный выбор</h3>
              <p className="opacity-90 text-lg">Более 15,000 товаров</p>
              <p className="text-green-300 text-sm mt-2">
                Лучшие бренды Казахстана
              </p>
            </div>

            <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in delay-400">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Icon name="Percent" size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Выгодные цены</h3>
              <p className="opacity-90 text-lg">Скидки до 50%</p>
              <p className="text-blue-300 text-sm mt-2">Акции каждую неделю</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
