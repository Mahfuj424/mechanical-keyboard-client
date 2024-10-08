/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import toast from "react-hot-toast";
import UpdateRoomForm from "./UpdateRoomForm";
import { useUpdateProductMutation } from "@/redux/api/baseApi";

const UpdateProductData = ({ isOpen, setIsEditModalOpen, product }:any) => {
  const [loading, setLoading] = useState(false);
  const [roomData, setRoomData] = useState(product);
  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);
    setIsEditModalOpen(false);

    updateProduct(roomData)
      .then(() => {
        setLoading(false);
        toast.success("Product Info Updated!");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        setLoading(false);
      });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsEditModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                
                <UpdateRoomForm
                  handleSubmit={handleSubmit}
                  roomData={roomData}
                  loading={loading}
                  setRoomData={setRoomData}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateProductData;
