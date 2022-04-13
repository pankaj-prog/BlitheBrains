import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";

import "./VideoCard.css";

const VideoCard = ({ thumbnail, title, creatorImg, creator, views, date }) => {
  const navigate = useNavigate();
  const cardClickHandler = (e) => {
    !(e.target.tagName == "svg") && navigate("/video/id");
  };

  return (
    <article onClick={cardClickHandler} className="video-card">
      <div className="img-wrapper">
        <img className="responsive-img" src={thumbnail} alt={title} />
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
      <section className="content">
        <div className="avatar avatar-sm avatar-round">
          <img className="responsive-img" src={creatorImg} alt={creator} />
        </div>
        <div>
          <p className="title">{title}</p>
          <section className="content-secondary">
            <div className="video-data text-muted">
              <span className="views">{views} views </span>
              <span className="date">{date}</span>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
};

export default VideoCard;
