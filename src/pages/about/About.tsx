import CustomButton from "@/components/ui/CustomButton";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";

const About = () => {
  return (
    <div>
      <SecondNavbar currNav="About-us" prevNav="home" />
      <div className="bg-white py-12">
        <div className="mx-auto lg:max-w-7xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 px-4 xl:px-0 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/266cwR88/keyboard5.webp" // Replace with your image URL
                alt="About Us"
                className="rounded-lg shadow-md lg:h-96 w-[80%]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About Our Keyboards</h2>
              <p className="mb-5 text-lg">
                At our company, we specialize in crafting high-quality
                mechanical keyboards tailored for enthusiasts, professionals,
                and casual users alike. Every keyboard we design is built with
                meticulous attention to detail, ensuring a seamless blend of
                aesthetics, durability, and functionality. Whether you're a
                gamer, a coder, or someone who spends hours typing, our
                keyboards are engineered to provide an unparalleled typing
                experience that elevates your productivity and comfort.
              </p>
              <CustomButton name={"Explore Our Keyboards"} onClick={() => ""} />
            </div>
          </div>

          <div className="mt-20 px-4 xl:px-0">
            <h2 className="text-3xl font-bold mb-5">
              Why Choose Our Keyboards?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <p className="text-lg">
                We know that the right keyboard can make all the difference. Our
                mechanical keyboards stand out with their customizable switches,
                ergonomic designs, and robust build quality. Each keyboard is
                designed to meet the specific needs of our users, from gamers
                seeking precision to professionals who demand comfort during
                long typing sessions. Discover the perfect keyboard that matches
                your style and enhances your typing experience with us.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">
                      Exceptional Typing Experience
                    </h4>
                    <h1 className="font-semibold text-red-500">90%</h1>
                  </div>
                  <div className="w-full bg-gray-200 h-6">
                    <div
                      className="bg-red-500 h-6"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">Highly Customizable</h4>
                    <h1 className="font-semibold text-red-500">97%</h1>
                  </div>
                  <div className="w-full bg-gray-200 h-6">
                    <div
                      className="bg-red-500 h-6"
                      style={{ width: "97%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">Expert Support Team</h4>
                    <h1 className="font-semibold text-red-500">92%</h1>
                  </div>
                  <div className="w-full bg-gray-200 h-6">
                    <div
                      className="bg-red-500 h-6"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
