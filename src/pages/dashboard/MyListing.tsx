import EmptyState from "@/components/ui/shared/emptyState/EmptyState";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductDataRow from "./ProductDataRow";
import CustomButton from "@/components/ui/CustomButton";
import AddProductData from "../../modal/AddProductData";
import { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
// import ProductDataRow from "./ProductDataRow";

const MyListings = () => {
  const { data: products, isLoading } = useGetProductsQuery("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="lg:max-w-7xl mx-auto px-4 lg:px-0 mt-5">
        <AddProductData
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      </div>
      {!isLoading ? (
        <div>
          {products?.data &&
          Array.isArray(products?.data) &&
          products?.data?.length > 0 ? (
            <div className="w-full max-w-7xl px-4 lg:px-0 mx-auto">
              <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-5 py-3  bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                          >
                            name
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                          >
                            brand
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                          >
                            Delete
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                          >
                            Update
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products?.data &&
                          products?.data?.map((product) => (
                            <ProductDataRow
                              key={product._id}
                              product={product}
                            />
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <EmptyState
              message={"No Keyboard Data Available!"}
              address={""}
              name={"Add Product"}
            />
          )}
        </div>
      ) : (
        <div className="flex justify-center  h-screen w-full mt-14">
          <ScaleLoader color="#ff0000" />
        </div>
      )}
    </>
  );
};

export default MyListings;
