import CustomButton from "@/components/ui/CustomButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddProductForm from "./AddProductForm";
import { useState } from "react";

const AddTodoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <CustomButton name="Add Product" onClick={() => setIsOpen(true)} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <AddProductForm onClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
