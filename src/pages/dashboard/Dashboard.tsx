import  { useEffect } from "react";
import MyListings from "./MyListing";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import { ScrollRestoration } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/features/cartSlice";

const Dashboard = () => {
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
    <div>
      <ScrollRestoration />
      <SecondNavbar prevNav="home" currNav="Dashboard" />
      <MyListings />
    </div>
  );
};

export default Dashboard;
