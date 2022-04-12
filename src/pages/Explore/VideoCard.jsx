import React from "react";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";

import "./VideoCard.css";

const VideoCard = ({ thumbnail, title, creatorImg, creator, views, date }) => {
  return (
    <article className="video-card">
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
          <div className="title">{title}</div>
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
