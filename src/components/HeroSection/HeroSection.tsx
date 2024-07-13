import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sliderImage1 from "@/assets/bannerImages/banner1.webp";
import sliderImage2 from "@/assets/bannerImages/banner2.jpg";
import sliderImage3 from "@/assets/bannerImages/banner1.jpeg";

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

  return (
    <div className=" w-full  -mt-0.5 ">
      <Carousel
        className=" overflow-hidden shadow-lg"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent>
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full p-0">
              <Card className="bg-transparent">
                <CardContent className="flex items-center justify-center h-[100vh] w-full p-0">
                  <img src={slider?.image} className="h-full w-full" alt="" />
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
