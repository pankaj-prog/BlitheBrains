import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoCardHorizontal.css";
import { AiOutlineDislike, AiOutlineHistory } from "react-icons/ai";
import {
  MdOutlineWatchLater,
  MdWatchLater,
  MdPlaylistPlay,
} from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { useLikedVideos, useWatchLater } from "../../context";

const VideoCardHorizontal = ({ video, cardType }) => {
  const {
    _id,
    thumbnail,
    title,
    views,
    date,
    creator,
    creatorImg,
    description,
  } = video;
  const navigate = useNavigate();

  const { watchLaterVideos, removeFromWatchLater, addToWatchLater } =
    useWatchLater();
  const { dislikeVideoHandler } = useLikedVideos();

  const cardClickHandler = (e) => {
    if (
      e.target.classList.contains("stop-navigate") ||
      e.target.tagName == "path" ||
      e.target.tagName == "svg"
    ) {
      return undefined;
    }
    return navigate(`/video/${_id}`);
  };

  let isVideoInWatchLater = watchLaterVideos.some((item) => item._id == _id);

  return (
    <article
      onClick={cardClickHandler}
      className={`video-card-horizontal gutter-bottom-32 ${
        cardType == "playlist" ? "playlist-video-card" : ""
      }`}
    >
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
        {/* Do not show description when it is there in playlist card */}
        {!(cardType == "playlist") && (
          <p className="description text-muted text-sm">{description}</p>
        )}
      </section>
      {/* stop naviagate class is used to stop navigation to video page */}
      <div className="options-btn stop-navigate">
        <HiDotsVertical />
        <div className="cta-wrapper stop-navigate">
          {isVideoInWatchLater ? (
            <button
              onClick={() => removeFromWatchLater(_id)}
              className="btn stop-navigate"
            >
              <MdWatchLater />
              <span className="info stop-navigate">
                {" "}
                Remove from watch later
              </span>
            </button>
          ) : (
            <button
              onClick={() => addToWatchLater(video)}
              className="btn stop-navigate"
            >
              <MdOutlineWatchLater />
              <span className="info stop-navigate"> Watch later</span>
            </button>
          )}

          <button className="btn stop-navigate">
            <MdPlaylistPlay />
            <span className="info stop-navigate">Playlist</span>
          </button>
          {cardType == "like" && (
            <button
              onClick={() => dislikeVideoHandler(_id)}
              className="btn stop-navigate"
            >
              <AiOutlineDislike />
              <span className="info stop-navigate">Dislike Video</span>
            </button>
          )}
          {cardType == "history" && (
            <button className="btn stop-navigate">
              <AiOutlineHistory />
              <span className="info stop-navigate">Remove from history</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default VideoCardHorizontal;
