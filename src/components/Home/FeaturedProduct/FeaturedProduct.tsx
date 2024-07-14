/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionTitle from "@/components/sectinTitle/SectionTitle";
import AddCardButton from "@/components/ui/AddCardButton";
import CustomButton from "@/components/ui/CustomButton";
import CustomCard from "@/components/ui/CustomCard";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery({});

  console.log(products?.data);
  return (
    <div>
      <SectionTitle
        title={"Featured Product"}
        description={
          "Easily organize products by relevance, price, or popularity for a seamless shopping experience."
        }
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto mt-8">
          {products?.data?.slice(0, 4).map((product: any) => (
            <CustomCard key={product?._id} id={product?._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link to='/product'>
            <CustomButton name={"See More"} onClick={""}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
