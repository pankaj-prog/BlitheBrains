import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Banner, VideoCardHorizontal } from "../../components";
import { useAuth, useHistory } from "../../context";
import { useAxios } from "../../utils/useAxios";
import "./History.css";

const History = () => {
  const { makeRequest, response } = useAxios();
  const { encodedToken } = useAuth();
  const { historyVideos, setHistoryVideos, clearHistory } = useHistory();

  const navigate = useNavigate();

  useEffect(() => {
    makeRequest({
      method: "get",
      url: "/api/user/history",
      headers: {
        authorization: encodedToken,
      },
    });
  }, []);

  useEffect(() => {
    if (response) {
      setHistoryVideos(response.history);
    }
  }, [response]);

  const clearHistoryHandler = () => {
    if (confirm("Are you sure, you want to clear history")) {
      clearHistory();
    }
  };

  return (
    <div className="content">
      <Banner title="History" />

      <div className="videos-wrapper">
        {historyVideos.length > 0 ? (
          <>
            <p className="text-center">
              <button
                onClick={clearHistoryHandler}
                className="btn btn-solid-primary btn-rc gutter-bottom-24"
              >
                Clear History
              </button>
            </p>
            {historyVideos.map((video) => (
              <VideoCardHorizontal
                key={video._id}
                video={video}
                cardType={"history"}
              />
            ))}
          </>
        ) : (
          <div className="text-center">
            <p className="gutter-bottom-8 text-lg">
              Empty! Start watching videos.
            </p>
            <button
              onClick={() => navigate("/explore")}
              className="btn btn-solid-primary btn-rc"
            >
              Explore Videos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
