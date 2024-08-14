import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sliderImage3 from "@/assets/bannerImages/banner3.jpg";
import sliderImage2 from "@/assets/bannerImages/banner2.jpg";
import sliderImage1 from "@/assets/bannerImages/banner.avif";
import AddCardButton from "../ui/AddCardButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function HeroSection() {
  const sliderData = [
    {
      id: 1,
      image: sliderImage1,
    },
    {
      id: 2,
      image: sliderImage2,
    },
    {
      id: 3,
      image: sliderImage3,
    },
  ];

  const bannerContent = [
    {
      id: 1,
      discount: "STARTING $60.00",
      title: "Unique Keyboard Style",
      description:
        "Experience unparalleled typing precision and speed. Designed for both gamers and professionals.",
    },
    {
      id: 2,
      discount: "STARTING $40.00",
      title: "User Friendly Keyboard",
      description:
        "Elevate your typing with our top-tier mechanical keyboards. Crafted for durability and comfort.",
    },
    {
      id: 3,
      discount: "STARTING $20.00",
      title: "Quality Keyboard",
      description:
        "Discover the perfect blend of comfort and performance. Enhance your productivity and gaming sessions.",
    },
  ];

  return (
    <div className="w-full -mt-0.5">
      <Carousel
        className="overflow-hidden shadow-lg"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent>
          {sliderData.map((slider, index) => (
            <CarouselItem key={slider.id} className="min-w-full p-0">
              <Card className="bg-transparent relative">
                <CardContent className="flex items-center justify-center h-[100vh] w-full p-0 relative">
                  <img src={slider.image} className="h-full w-full" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
                    <motion.div
                      initial={{ opacity: 0, y: -140 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="bg-red-500 text-lg md:text-3xl font-semibold md:px-8 px-4 md:py-4 py-2 mb-4 rounded"
                    >
                      {bannerContent[index].discount}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: -150 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2 }}
                      className="text-4xl md:text-6xl font-bold mb-2"
                    >
                      {bannerContent[index].title}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 140 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="text-lg mb-4 md:w-1/3 w-full mt-4"
                    >
                      {bannerContent[index].description}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 160 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2 }}
                    >
                      <Link to="/product">
                        <AddCardButton name={"Shop Now"} product={null} />
                      </Link>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9664;
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9654;
        </CarouselNext>
      </Carousel>
    </div>
  );
}
