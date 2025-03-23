import React from "react";
import Card from "./Card";

function Testimonial({ review }) { // ✅ Destructure props
  return (
    <div>
      <Card reviews={review} /> {/* ✅ Pass review to Card */}
    </div>
  );
}

export default Testimonial;
