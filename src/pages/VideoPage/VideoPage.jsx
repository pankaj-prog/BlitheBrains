import React, { useEffect, useState } from "react";

import { VideoSection } from "./components";
import "./VideoPage.css";

import { VideoCardHorizontal } from "../../components";
import { useAxios } from "../../utils/useAxios";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState();
  const { makeRequest: videoRequest, response: videoResponse } = useAxios();

  useEffect(() => {
    videoRequest({
      method: "get",
      url: `/api/video/${videoId}`,
    });
  }, [videoId]);

  useEffect(() => {
    if (videoResponse) {
      setVideo(videoResponse.video);
    }
  }, [videoResponse]);

  const { makeRequest, response } = useAxios();
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    makeRequest({
      method: "get",
      url: "/api/videos",
    });
  }, []);

  useEffect(() => {
    if (response) {
      setVideoList(response.videos);
    }
  }, [response]);

  let relatedVideoList;

  if (video && videoList.length > 0) {
    relatedVideoList = videoList.filter((item) =>
      item.category.includes(video.category[0])
    );
  }

  return (
    <div className="video-page content ">
      <VideoSection video={video} />
      <section className="related-videos-section">
        <h2 className="heading text-center gutter-bottom-24">Related Videos</h2>
        <div className="videos-wrapper">
          {relatedVideoList &&
            relatedVideoList.map((vid) => {
              if (!(vid._id == video._id)) {
                return <VideoCardHorizontal key={vid._id} video={vid} />;
              }
            })}
        </div>
      </section>
    </div>
  );
};

export default VideoPage;
