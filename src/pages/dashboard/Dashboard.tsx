import React from "react";
import MyListings from "./MyListing";
import SecondNavbar from "@/components/ui/shared/SecondNavbar";
import { ScrollRestoration } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ScrollRestoration />
        <SecondNavbar prevNav="home" currNav="Dashboard" />
      <MyListings />
    </div>
  );
};

export default Dashboard;
