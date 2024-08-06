import DeleteProduct from "@/modal/DeleteProduct";
import UpdateProductData from "@/modal/UpdateProductData";
import { useDeleteProductMutation } from "@/redux/api/baseApi";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductDataRow = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteProduct, { isLoading, isSuccess, isError, error }] =
    useDeleteProductMutation();

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalHandler = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      toast.success('Product successfully deleted')
      // Handle success (e.g., show a success message, refresh product list)
      closeModal();
    } catch (err) {
      // Handle error (e.g., show an error message)
      console.error("Failed to delete the product:", err);
    }
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={product?.image}
                className="mx-auto object-cover rounded h-10 w-16 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{product?.name}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${product?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{product?.brand}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </span>
        <DeleteProduct
          isOpen={isOpen}
          closeModal={closeModal}
          modalHandler={modalHandler}
          id={product?._id}
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => setIsEditModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update</span>
        </span>
        <UpdateProductData
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          product={product}
          id={product?._id}
        />
      </td>
    </tr>
  );
};

export default ProductDataRow;
