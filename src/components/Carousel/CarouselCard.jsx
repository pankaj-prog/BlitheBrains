import React from "react";

const CarouselCard = ({ video }) => {
  return (
    <article className="carousel-card">
      <img src={video.thumbnail} alt={video.title} />
      <button
        className="btn btn-solid-secondary btn-rc"
        onClick={() => console.log("clicked")}
      >
        Watch Now
      </button>
    </article>
  );
};

export default CarouselCard;
