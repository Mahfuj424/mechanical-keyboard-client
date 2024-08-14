// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import SectionTitle from "@/components/sectinTitle/SectionTitle";
import { motion } from "framer-motion";

const FeaturesBrand = () => {
  return (
    <div className="pt-10">
      <SectionTitle
        title={"Top Featured Brands"}
        description={
          "Explore top featured keyboard brands like Corsair, Logitech, and Razer, known for their innovation, performance, and quality."
        }
      />

      <marquee behavior="" direction="">
        <div className="flex justify-between">
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <div>
              <img
                className="h-24 w-28"
                src="https://i.postimg.cc/PNsZ0JLW/A4-Tech-logo.png"
                alt=""
              />
            </div>
            <h1 className="text-lg text-red-500 text-center">A4 TECH</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <div>
              <img
                className="h-24 w-28"
                src="https://i.postimg.cc/MGH7MvQD/i-Z6w-Ttbsv1aw-JPk-Rn-XZc-Cv-UUOio-X02-TSqh6-Qsu-TV.png"
                alt=""
              />
            </div>
            <h1 className="text-lg text-red-500 text-center">ASUS</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <div>
              <img
                className="h-24 w-28"
                src="https://i.postimg.cc/vTxgbVC1/hpLogo.png"
                alt=""
              />
            </div>
            <h1 className="text-lg text-red-500 text-center">HP</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <div>
              <img
                className="h-24 w-28"
                src="https://i.postimg.cc/bvMDz38t/logitech2028.jpg"
                alt=""
              />
            </div>
            <h1 className="text-lg text-red-500 text-center">LOGITECH</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <div>
              <img
                className="h-24 w-28"
                src="https://i.postimg.cc/bJZzvhLy/4dab90ee-fe2d-4761-be01-fca97a77ed65-CR0-0-350-175-PT0-SX350-V1.jpg"
                alt=""
              />
            </div>
            <h1 className="text-lg text-red-500 text-center">ROYAL KLUDGE</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <div>
              <img
                className="h-24 w-28"
                src="https://i.postimg.cc/52SQqFCm/dell-logo-design-1-preview.jpg"
                alt=""
              />
            </div>
            <h1 className="text-lg text-red-500 text-center">DELL</h1>
          </motion.div>
        </div>
      </marquee>
    </div>
  );
};

export default FeaturesBrand;
