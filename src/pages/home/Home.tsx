import Service from "@/components/Home/Service";
import { HeroSection } from "@/components/ui/HeroSection/HeroSection";


const Home = () => {
  return (
    <div className="space-y-24">
      <HeroSection />
      <Service/>
    </div>
  );
};

export default Home;
