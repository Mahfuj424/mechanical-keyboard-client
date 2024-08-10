import FeaturesBrand from "@/components/Home/featuresBrand/FeaturesBrand";
import Service from "@/components/Home/Service";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import FeaturedProduct from "@/components/Home/FeaturedProduct/FeaturedProduct";
import ReviewSection from "@/components/Home/reviewSection/ReviewSection";
import WhyChoose from "@/components/Home/whyChoose/WhyChoose";
import ExtraStudy from "@/components/Home/extraStudy/ExtraStudy";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/features/cartSlice";

const Home = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = cartItems.length;

  useEffect(() => {
    if (cartCount > 0) {
      const handleBeforeUnload = (event: BeforeUnloadEvent) => {
        const warningMessage =
          "Your cart data may be lost if you reload the page. Are you sure you want to leave?";
        event.preventDefault();
        event.returnValue = warningMessage; // For most browsers
        return warningMessage; // For some browsers
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

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
