import React from "react";

import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
import { images } from "../../../../assets";

import "./VideoSection.css";

const video = {
  _id: "31UVvKEYO6k",
  thumbnail: images.boat,
  title:
    "How Aman Gupta's MARKETING STRATEGY turned Boat into a 1500CR Company : Business case study",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, labore. Sint eum amet, inventore itaque, asperiores earum assumenda accusamus illo a similique dolor hic vero non sunt deleniti iste aliquam suscipit culpa provident. Temporibus natus deleniti sequi perspiciatis totam recusandae, laboriosam odio voluptatibus, quam id, odit cum animi pariatur facilis.",
  creator: "Think School",
  creatorImg: images.thinkSchool,
  category: ["case study"],
  views: "971,345",
  label: [""],
  date: "Jan 28, 2022",
};

const VideoSection = () => {
  return (
    <div className="video-section gutter-bottom-24">
      <section className="video-wrapper gutter-bottom-16">
        <iframe
          className="video"
          src={`https://www.youtube.com/embed/${video._id}`}
          frameborder="0"
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
  );
};

export default VideoSection;
