import SectionTitle from "@/components/sectinTitle/SectionTitle";
import Marquee from "react-fast-marquee";

const FeaturesBrand = () => {
  return (
    <div className="pt-10">
      <SectionTitle
        title={"Top Featured Brands"}
        description={
          "Explore top featured keyboard brands like Corsair, Logitech, and Razer, known for their innovation, performance, and quality."
        }
      />

      <Marquee speed={100} pauseOnHover={true}>
        <div className="flex justify-between">
          <div className="mx-8">
            <img
              className="h-24 w-28"
              src="https://i.postimg.cc/PNsZ0JLW/A4-Tech-logo.png"
              alt="A4 TECH logo"
            />
            <h1 className="text-lg text-red-500 text-center">A4 TECH</h1>
          </div>
          <div className="mx-8">
            <img
              className="h-24 w-28"
              src="https://i.postimg.cc/MGH7MvQD/i-Z6w-Ttbsv1aw-JPk-Rn-XZc-Cv-UUOio-X02-TSqh6-Qsu-TV.png"
              alt="ASUS logo"
            />
            <h1 className="text-lg text-red-500 text-center">ASUS</h1>
          </div>
          <div className="mx-8">
            <img
              className="h-24 w-28"
              src="https://i.postimg.cc/vTxgbVC1/hpLogo.png"
              alt="HP logo"
            />
            <h1 className="text-lg text-red-500 text-center">HP</h1>
          </div>
          <div className="mx-8">
            <img
              className="h-24 w-28"
              src="https://i.postimg.cc/bvMDz38t/logitech2028.jpg"
              alt="LOGITECH logo"
            />
            <h1 className="text-lg text-red-500 text-center">LOGITECH</h1>
          </div>
          <div className="mx-8">
            <img
              className="h-24 w-28"
              src="https://i.postimg.cc/bJZzvhLy/4dab90ee-fe2d-4761-be01-fca97a77ed65-CR0-0-350-175-PT0-SX350-V1.jpg"
              alt="ROYAL KLUDGE logo"
            />
            <h1 className="text-lg text-red-500 text-center">ROYAL KLUDGE</h1>
          </div>
          <div className="mx-8">
            <img
              className="h-24 w-28"
              src="https://i.postimg.cc/52SQqFCm/dell-logo-design-1-preview.jpg"
              alt="DELL logo"
            />
            <h1 className="text-lg text-red-500 text-center">DELL</h1>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default FeaturesBrand;
