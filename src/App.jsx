import React from "react";
import "./App.css";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="mt-25 ml-20 font-bold text-4xl">Our Testimonials</h1>
				<div className="bg-violet-400 h-1 w-50 mt-1 ml-30"></div>


      </div>
      <Testimonial review={reviews} /> {/* ✅ Pass reviews correctly */}
    </div>
  );
}

export default App;
