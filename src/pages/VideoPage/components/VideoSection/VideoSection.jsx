import React, { useEffect, useState } from "react";

import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useAxios } from "../../../../utils/useAxios";

import "./VideoSection.css";

const VideoSection = () => {
  const { videoId } = useParams();
  const { makeRequest, response } = useAxios();
  const [video, setVideo] = useState();

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
          <button className="btn icon-btn text-xl">
            <AiOutlineLike />
          </button>
          <button className="btn icon-btn text-xl">
            <MdOutlineWatchLater />
          </button>
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
