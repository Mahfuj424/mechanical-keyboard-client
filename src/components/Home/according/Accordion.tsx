import { useState } from "react";

type TAccordionProps ={
    title:string ;
    children:string
}

const Accordion = ({ title, children }:TAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 text-red-500 font-semibold bg-gray-100 hover:bg-gray-200"
      >
        {title}
      </button>
      {isOpen && <div className="px-4 py-2 bg-white">{children}</div>}
    </div>
  );
};

export default Accordion;
