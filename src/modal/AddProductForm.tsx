/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddProductMutation } from "@/redux/api/baseApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import axios from "axios";

interface AddProductFormProps {
  onClose: () => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null); 
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [quantity, setQuantity] = useState<number | undefined>(undefined);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [addProduct] = useAddProductMutation();

  const imgbbApiKey = "2167989ee53b7a504211edcff02ebe5b"; // Replace with your ImgBB API key

  // Function to handle image upload to ImgBB
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData
      );
      return response.data.data.url; // Get image URL from response
    } catch (error) {
      console.error("Image upload failed", error);
      throw new Error("Image upload failed");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Upload the image to ImgBB
      const uploadedImageURL = await uploadImage(imageFile!);

      const productDetails = {
        name,
        image: uploadedImageURL, // Use the uploaded image URL
        description,
        brand,
        quantity: quantity ?? 0,
        rating: parseFloat((rating ?? 0).toFixed(1)),
        price: parseFloat((price ?? 0).toFixed(2)),
      };

      await addProduct(productDetails);

      toast.success("Product added successfully.");
      onClose(); // Close the modal on successful submission
    } catch (error) {
      console.error("Error Adding Product", error);
      toast.error("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="w-full max-w-lg bg-white rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600 uppercase">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="name"
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="brand" className="block text-gray-600 uppercase">
                Brand
              </label>
              <input
                onChange={(e) => setBrand(e.target.value)}
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="brand"
                id="brand"
                type="text"
                placeholder="Brand"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="price"
                id="price"
                type="number"
                step="0.01"
                placeholder="Price"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="quantity" className="block text-gray-600">
                Quantity
              </label>
              <input
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="quantity"
                id="quantity"
                type="number"
                placeholder="Quantity"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="rating" className="block text-gray-600 uppercase">
                Rating
              </label>
              <input
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="rating"
                id="rating"
                type="number"
                step="0.1"
                placeholder="Rating"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label
                htmlFor="imageURL"
                className="block text-gray-600 uppercase"
              >
                Image URL
              </label>
              <input
                onChange={(e) => setImageFile(e.target.files?.[0] || null)} // File input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="imageURL"
                id="imageURL"
                type="file"
                required
              />
            </div>

            <div className="col-span-2 space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500"
                name="description"
                placeholder="Description"
                required
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
              "Save & Continue"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
