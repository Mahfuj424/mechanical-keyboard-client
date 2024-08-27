// import groupStudy from './images.jpg'
import "./styles.css";
import AddCardButton from "@/components/ui/AddCardButton";
import { motion } from "framer-motion";

const ExtraStudy = () => {
  return (
    <div className=" mt-5">
      <div className="featured-bg bg-fixed my-20 py-20 text-gray-200 max-w-7xl lg:max-w-6xl mx-auto rounded-xl">
        <div className=" bg-gray-200 text-black py-28  bg-opacity-20">
          <div className="md:flex gap-10 mt-8 max-w-4xl mx-auto ">
            {/* <img className='w-[400px]' src={groupStudy} alt="" /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="ps-3"
              >
                <p className="lg:text-6xl md:text-4xl text-3xl text-white font-semibold md:font-bold">
                  Choose Your Keyboard
                </p>
                <p className="md:text-lg text-sm text-white font-semibold mt-7">
                  Nullam suscipit id ante bibendum bibendum. Vivamus interdum
                  gravida justo id venenatis. tempus velit sed, lobortis metus.
                  Donec id tincidunt libero,
                </p>
                <div className="mt-8">
                  <AddCardButton name={"Shop Now"} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraStudy;
