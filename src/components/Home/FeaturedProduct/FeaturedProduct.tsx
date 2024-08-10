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

  // Sort and slice the products once
  const sortedProducts = [...(products?.data || [])]
    .sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 6);

  const firstFourProducts = sortedProducts.slice(0, 4);
  const lastTwoProducts = sortedProducts.slice(4, 6);

  return (
    <div>
      <SectionTitle
        title={"Featured Product"}
        description={
          "Easily organize products by relevance, price, or popularity for a seamless shopping experience."
        }
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto mt-8">
          {firstFourProducts?.map((product: any) => (
            <CustomCard key={product?._id} product={product} />
          ))}
        </div>
        <div className="md:col-span-4 md:flex justify-center gap-8 mt-8">
          {lastTwoProducts?.map((product: any) => (
            <div className="w-full md:w-1/3 lg:w-1/4" key={product?._id}>
              <CustomCard product={product} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link to="/product">
            <CustomButton name={"See More"} onClick={() => ""} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
