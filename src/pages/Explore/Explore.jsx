import React, { useEffect, useState } from "react";

import { Banner } from "../../components";
import VideoCard from "./VideoCard";
import "./Explore.css";

import { useAxios } from "../../utils/useAxios";
import { useCategory } from "../../context";

import { getFilteredVideoList } from "./utils/getFilteredVideoList";

const Explore = () => {
  const { makeRequest, response } = useAxios();
  const { selectedCategory, setSelectedCategory } = useCategory();

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

  const filteredVideoList = getFilteredVideoList(videoList, selectedCategory);

  return (
    <div className="explore-page content ">
      <Banner title="Explore Videos" />
      <section className="videos-wrapper">
        {filteredVideoList.length > 0 &&
          filteredVideoList.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
      </section>
    </div>
  );
};

export default Explore;
