import EmptyState from "@/components/ui/shared/emptyState/EmptyState";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductDataRow from "./ProductDataRow";
import CustomButton from "@/components/ui/CustomButton";
// import ProductDataRow from "./ProductDataRow";

const MyListings = () => {
  const {data:products, isLoading, isError}=useGetProductsQuery('')
  console.log(products?.data);

  return (
    <>
    <div className="lg:max-w-7xl mx-auto mt-5">
      <CustomButton onClick={()=>('')} name='Add Product'></CustomButton>
    </div>
      {products?.data && Array.isArray(products?.data) && products?.data?.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
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
          message={"No Room Data Available!"}
          address={"/dashboard/add-room"}
          label={"Add Room"}
        />
      )}
    </>
  );
};

export default MyListings;
