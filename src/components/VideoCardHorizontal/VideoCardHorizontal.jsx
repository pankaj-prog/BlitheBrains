import React from "react";
import "./VideoCardHorizontal.css";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

const VideoCardHorizontal = ({
  thumbnail,
  title,
  views,
  date,
  creator,
  creatorImg,
  description,
}) => {
  return (
    <article className="video-card-horizontal gutter-bottom-32">
      <div className="img-wrapper">
        <img className="responsive-img" src={thumbnail} alt={title} />
      </div>
      <section className="video-details">
        <p className="title h4">{title}</p>
        <div className="video-data text-muted gutter-bottom-8">
          <span className="views">{views} views </span>
          <span className="date">{date}</span>
        </div>
        <div className="creator-wrapper gutter-bottom-8">
          <div className="avatar avatar-sm avatar-round">
            <img className="responsive-img" src={creatorImg} alt={creator} />
          </div>
          <h5>{creator}</h5>
        </div>
        <p className="description text-muted text-sm">{description}</p>
      </section>
      <div className="options-btn">
        <HiDotsVertical />
        <div className="cta-wrapper">
          <button className="btn">
            <MdOutlineWatchLater />
            <span className="info">Watch Later</span>
          </button>
          <button className="btn">
            <MdPlaylistPlay />
            <span className="info">Playlist</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default VideoCardHorizontal;
