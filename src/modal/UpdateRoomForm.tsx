/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { TbFidgetSpinner } from "react-icons/tb";

const UpdateRoomForm = ({ handleSubmit, loading, roomData, setRoomData }:any) => {
  // Handle change for number fields
  const handleNumberInputChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {
    const value = event.target.value;
    // Allow empty string to clear the field, otherwise convert to number
    setRoomData({
      ...roomData,
      [field]: value === "" ? "" : Number(value),
    });
  };

  return (
    <div className="w-full min-h-[calc(100vh-90px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-10">
          <div className="flex gap-3">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="location"
                className="block text-gray-600 uppercase"
              >
                name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="location"
                value={roomData?.name || ""}
                onChange={(event) =>
                  setRoomData({ ...roomData, name: event.target.value })
                }
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600 uppercase">
                image url
              </label>
              <input
                value={roomData?.image || ""}
                onChange={(event) =>
                  setRoomData({ ...roomData, image: event.target.value })
                }
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                value={roomData?.price || ""}
                onChange={(event) => handleNumberInputChange(event, "price")}
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="price"
                id="price"
                type="text"
                placeholder="Price"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="guest" className="block text-gray-600">
                Quantity
              </label>
              <input
                value={roomData?.quantity || ""}
                onChange={(event) => handleNumberInputChange(event, "quantity")}
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="total_guest"
                id="guest"
                type="text"
                placeholder="Total guest"
                required
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="rating" className="block text-gray-600 uppercase">
                Rating
              </label>
              <input
                value={roomData?.rating || ""}
                onChange={(event) => handleNumberInputChange(event, "rating")}
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="rating"
                id="rating"
                type="text"
                placeholder="Rating"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="brand" className="block text-gray-600 uppercase">
                Brand
              </label>
              <input
                value={roomData?.brand || ""}
                onChange={(event) =>
                  setRoomData({ ...roomData, brand: event.target.value })
                }
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="brand"
                id="brand"
                type="text"
                placeholder="Brand"
                required
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>
            <textarea
              value={roomData?.description || ""}
              onChange={(event) =>
                setRoomData({ ...roomData, description: event.target.value })
              }
              id="description"
              className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500"
              name="description"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          {loading ? (
            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
          ) : (
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateRoomForm;
