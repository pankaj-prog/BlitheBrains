import React, { useEffect, useState } from "react";

import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import {
  MdOutlineWatchLater,
  MdWatchLater,
  MdPlaylistPlay,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import { useLikedVideos, useWatchLater } from "../../../../context";
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

  let isVideoInLikes = false;
  let isVideoInWatchLater = false;

  useEffect(() => {
    makeRequest({
      method: "get",
      url: `/api/video/${videoId}`,
    });
  }, []);

  useEffect(() => {
    if (response) {
      setVideo(response.video);
    }
  }, [response]);

  if (video) {
    let indexForLikedVideo = likedVideoList.findIndex(
      (item) => item._id == video._id
    );
    let indexForWatchLaterVideo = watchLaterVideos.findIndex(
      (item) => item._id == video._id
    );
    isVideoInLikes = indexForLikedVideo == -1 ? false : true;
    isVideoInWatchLater = indexForWatchLaterVideo == -1 ? false : true;
  }

  return video ? (
    <div className="video-section gutter-bottom-24">
      <section className="video-wrapper gutter-bottom-16">
        <iframe
          className="video"
          src={`https://www.youtube.com/embed/${video._id}`}
          frameBorder="0"
        ></iframe>
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
