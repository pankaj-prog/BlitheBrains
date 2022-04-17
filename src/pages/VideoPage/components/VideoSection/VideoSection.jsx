import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import {
  MdOutlineWatchLater,
  MdWatchLater,
  MdPlaylistPlay,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import { useHistory, useLikedVideos, useWatchLater } from "../../../../context";
import { useAxios } from "../../../../utils/useAxios";

import "./VideoSection.css";

const VideoSection = () => {
  const { videoId } = useParams();
  const { makeRequest, response } = useAxios();
  const [video, setVideo] = useState();
  const { likeVideoHandler, likedVideoList, dislikeVideoHandler } =
    useLikedVideos();
  const { addToWatchLater, removeFromWatchLater, watchLaterVideos } =
    useWatchLater();
  const { addToHistory } = useHistory();

  let isVideoInLikes = false;
  let isVideoInWatchLater = false;

  useEffect(() => {
    makeRequest({
      method: "get",
      url: `/api/video/${videoId}`,
    });
  }, [videoId]);

  useEffect(() => {
    if (response) {
      setVideo(response.video);
    }
  }, [response]);

  if (video) {
    isVideoInLikes = likedVideoList.some((item) => item._id == video._id);
    isVideoInWatchLater = watchLaterVideos.some(
      (item) => item._id == video._id
    );
  }

  return video ? (
    <div className="video-section gutter-bottom-24">
      <section className="video-wrapper gutter-bottom-16">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${video._id}`}
          onStart={() => addToHistory(video)}
          height="100%"
          width="100%"
        ></ReactPlayer>
      </section>
      <h1 className="text-xl fw-b">{video.title}</h1>
      <section className="video-details gutter-bottom-16">
        <div className="details h5">
          <span className="views">{video.views} Views</span>
          <span className="date">{video.date} </span>
        </div>
        <div className="cta">
          {isVideoInLikes ? (
            <button
              onClick={() => dislikeVideoHandler(video._id)}
              className="btn icon-btn text-xl"
            >
              <AiFillLike />
            </button>
          ) : (
            <button
              onClick={() => likeVideoHandler(video)}
              className="btn icon-btn text-xl"
            >
              <AiOutlineLike />
            </button>
          )}

          {isVideoInWatchLater ? (
            <button
              onClick={() => removeFromWatchLater(video._id)}
              className="btn icon-btn text-xl"
            >
              <MdWatchLater />
            </button>
          ) : (
            <button
              onClick={() => addToWatchLater(video)}
              className="btn icon-btn text-xl"
            >
              <MdOutlineWatchLater />
            </button>
          )}
          <button className="btn btn-rc playlist-btn-wrapper">
            <MdPlaylistPlay />
            <span className="btn-info">Save</span>
          </button>
        </div>
      </section>
      <section className="creator-wrapper gutter-bottom-16">
        <div className="avatar avatar-sm avatar-round">
          <img
            className="responsive-img"
            src={video.creatorImg}
            alt={video.creator}
          />
        </div>
        <h4>{video.creator}</h4>
      </section>
      <p className="description">{video.description}</p>
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default VideoSection;
