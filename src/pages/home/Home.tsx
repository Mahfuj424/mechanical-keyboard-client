import FeaturesBrand from "@/components/Home/featuresBrand/FeaturesBrand";
import Service from "@/components/Home/Service";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import FeaturedProduct from "@/components/Home/FeaturedProduct/FeaturedProduct";
import ReviewSection from "@/components/Home/reviewSection/ReviewSection";
import WhyChoose from "@/components/Home/whyChoose/WhyChoose";
import ExtraStudy from "@/components/Home/extraStudy/ExtraStudy";

const Home = () => {
  return (
    <div className="space-y-24">
      <HeroSection />
      <div className="px-5 xl:px-0 space-y-24">
        <Service />
        <FeaturedProduct />
        <FeaturesBrand />
        <WhyChoose />
        <ExtraStudy />
        <ReviewSection />
      </div>
    </div>
  );
};

export default Home;
