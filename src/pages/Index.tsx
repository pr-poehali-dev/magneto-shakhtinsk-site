import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactInfo from "@/components/ContactInfo";
import Offers from "@/components/Offers";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Offers />
      <ContactInfo />
    </div>
  );
};

export default Index;
