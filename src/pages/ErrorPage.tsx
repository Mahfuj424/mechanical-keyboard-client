import React from "react";
import CustomButton from "../components/ui/CustomButton";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="relative w-full h-screen bg-no-repeat bg-center"
      style={{
        backgroundImage: `url("https://i.postimg.cc/MT8hYMKQ/404-error-page-information-found-computer-isolated-white-background-eror-search-vector-illustration.avif")`,
      }}
    >
      <div className="absolute top-4 left-4">
        <Link to={"/"}>
          <CustomButton name="Go Back" onClick={() => ""} />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
