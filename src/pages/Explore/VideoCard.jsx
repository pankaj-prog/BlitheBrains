import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineWatchLater,
  MdPlaylistPlay,
  MdWatchLater,
} from "react-icons/md";

import "./VideoCard.css";
import { useAlert, useAuth, usePlaylist, useWatchLater } from "../../context";

const VideoCard = ({ video }) => {
  const { _id, thumbnail, title, creatorImg, creator, views, date } = video;

  const navigate = useNavigate();
  const cardClickHandler = (e) => {
    !(e.target.tagName == "svg") &&
      !(e.target.tagName == "path") &&
      navigate(`/video/${_id}`);
  };
  const { isLoggedIn } = useAuth();
  const { showAlert } = useAlert();
  const playlistHandler = () => {
    if (isLoggedIn) {
      setCurrentVideo(video);
      setShowPlaylistModal(true);
    } else {
      showAlert("you must login first", "error");
    }
  };

  const { watchLaterVideos, removeFromWatchLater, addToWatchLater } =
    useWatchLater();
  const { setShowPlaylistModal, setCurrentVideo } = usePlaylist();

  let isVideoInWatchLater = watchLaterVideos.some((item) => item._id == _id);

  return (
    <article onClick={cardClickHandler} className="video-card">
      <div className="img-wrapper">
        <img className="responsive-img" src={thumbnail} alt={title} />
        <div className="cta-wrapper">
          {isVideoInWatchLater ? (
            <button onClick={() => removeFromWatchLater(_id)} className="btn">
              <MdWatchLater />
              <span className="info ">watch later</span>
            </button>
          ) : (
            <button onClick={() => addToWatchLater(video)} className="btn">
              <MdOutlineWatchLater />
              <span className="info"> Watch later</span>
            </button>
          )}
          <button onClick={playlistHandler} className="btn">
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
