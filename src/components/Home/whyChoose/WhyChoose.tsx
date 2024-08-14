import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import SectionTitle from "@/components/sectinTitle/SectionTitle";
import { motion } from "framer-motion";

const WhyChoose = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why are mechanical keyboards more durable?",
      answer:
        "Mechanical keyboards are built to last, with switches that can withstand millions of keystrokes.",
    },
    {
      question: "What is tactile feedback in mechanical keyboards?",
      answer:
        "Each key press provides a satisfying tactile feedback, which can improve typing speed and accuracy.",
    },
    {
      question: "How can I customize a mechanical keyboard?",
      answer:
        "Many mechanical keyboards offer customizable keys and RGB lighting, allowing you to personalize your setup.",
    },
    {
      question:
        "What types of switches are available for mechanical keyboards?",
      answer:
        "You can choose from a variety of switch types to suit your typing or gaming preferences, such as linear, tactile, or clicky switches.",
    },
    {
      question: "What is N-Key Rollover?",
      answer:
        "Mechanical keyboards support multiple key presses at once, ensuring that all your keystrokes are registered accurately.",
    },
  ];

  return (
    <div className="bg-white py-10 px-4">
      <SectionTitle
        title={"Why Choose Mechanical Keyboards?"}
        description={
          "Explore the advantages of mechanical keyboards and discover why they are preferred by enthusiasts and professionals alike."
        }
      />
      <div
        
        className="max-w-4xl mx-auto mt-5"
      >
        {faqs.map((faq, index) => (
          <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration:2 }} key={index} className="mb-4 border-b">
            <button
              className="w-full text-left flex justify-between items-center py-4 text-gray-700 font-semibold focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="flex-1">{faq.question}</span>
              <span className="ml-2">
                {openIndex === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus className="text-red-500" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
