import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Card({ reviews = [] }) { // ✅ Default empty array
  const [index, setIndex] = useState(0);

  if (!reviews.length) return <p className="text-center">No reviews available.</p>; // ✅ Prevent crash

  function handlePrev() {
    setIndex((prevIndex) => (prevIndex - 1 < 0 ? reviews.length - 1 : prevIndex - 1));
  }

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1));
  }

  function handleSurprise() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 shadow-lg mt-6 h-[350px] w-[400px] rounded-lg p-6 relative">
      {/* Profile Image */}
      <div className="absolute top-[-3.5rem]">
        <img
          className="mr-80 w-[100px] h-[100px] rounded-full border-4 border-white shadow-md"
          src={reviews[index].img}
          alt={reviews[index].name}
        />
      </div>

      {/* Name and Title */}
      <div className="mt-14 text-center">
        <p className="text-lg font-bold">{reviews[index].name}</p>
        <p className="text-sm text-gray-600">{reviews[index].title}</p>
      </div>

      {/* Quote and Text */}
      <div className="mt-4 text-center px-4">
        <FaQuoteLeft className="text-gray-500 inline mr-2" />
        <p className="text-sm text-gray-700 italic">{reviews[index].text}</p>
        <FaQuoteRight className="text-gray-500 inline ml-2" />
      </div>

      {/* Navigation Buttons */}
      <div className="mt-7 flex space-x-4 text-3xl">
        <button
          onClick={handlePrev}
          className="text-violet-400 px-3 py-1 hover:text-violet-500 transition-all"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="text-violet-400 px-3 py-1 hover:text-violet-500 transition-all"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Surprise Me Button */}
      <div className="mt-4">
        <button
          onClick={handleSurprise}
          className="bg-violet-400 text-white px-4 py-1 rounded hover:bg-violet-500 transition-all duration-200 cursor-pointer"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Card;
