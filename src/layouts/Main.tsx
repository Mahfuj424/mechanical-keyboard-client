import Footer from "@/components/ui/shared/footer/Footer";
import Navbar from "@/components/ui/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
