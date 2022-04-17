import React from "react";
import { useNavigate } from "react-router-dom";

const CarouselCard = ({ video, className }) => {
  const navigate = useNavigate();
  return (
    <article className={className}>
      <img src={video.thumbnail} alt={video.title} />
      <div className="content">
        <h2 className="text-center">{video.title} </h2>
        <button
          className="btn btn-solid-secondary btn-rc"
          onClick={() => navigate(`/video/${video._id}`)}
        >
          Watch Now
        </button>
      </div>
    </article>
  );
};

export default CarouselCard;
