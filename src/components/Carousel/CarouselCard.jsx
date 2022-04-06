import React from "react";

const CarouselCard = ({ video }) => {
  return (
    <article className="carousel-card">
      <img src={video.thumbnail} alt={video.title} />
      <div className="content">
        <h2 className="title text-center">{video.title} </h2>
        <button
          className="btn btn-solid-secondary btn-rc"
          onClick={() => console.log("clicked")}
        >
          Watch Now
        </button>
      </div>
    </article>
  );
};

export default CarouselCard;
