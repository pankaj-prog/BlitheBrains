import React from "react";

const CarouselCard = ({ video, className }) => {
  return (
    <article className={className}>
      <img src={video.thumbnail} alt={video.title} />
      <div className="content">
        <h2 className="text-center">{video.title} </h2>
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
