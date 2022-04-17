import { useState, createContext, useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { useAlert } from "./AlertContext";
import { useAuth } from "./AuthContext";

const LikedVideosContext = createContext();

const useLikedVideos = () => useContext(LikedVideosContext);

const LikedVideoProvider = ({ children }) => {
  const [likedVideoList, setLikedVideoList] = useState([]);
  const { encodedToken } = useAuth();

  const { showAlert } = useAlert();
  const { makeRequest: likeRequest, response: likeResponse } = useAxios();
  const { makeRequest: dislikeRequest, response: dislikeResponse } = useAxios();

  const likeVideoHandler = (video) => {
    if (encodedToken) {
      likeRequest({
        method: "post",
        url: "/api/user/likes",
        headers: { authorization: encodedToken },
        data: { video },
      });
    } else {
      showAlert("Please login first", "error");
    }
  };

  useEffect(() => {
    if (likeResponse) {
      setLikedVideoList(likeResponse.likes);
      showAlert("video added to liked videos", "success");
    }
  }, [likeResponse]);

  const dislikeVideoHandler = (_id) => {
    dislikeRequest({
      method: "delete",
      url: `/api/user/likes/${_id}`,
      headers: { authorization: encodedToken },
    });
  };

  useEffect(() => {
    if (dislikeResponse) {
      setLikedVideoList(dislikeResponse.likes);
      showAlert("video removed from liked videos", "success");
    }
  }, [dislikeResponse]);

  return (
    <LikedVideosContext.Provider
      value={{
        likedVideoList,
        setLikedVideoList,
        likeVideoHandler,
        dislikeVideoHandler,
      }}
    >
      {children}
    </LikedVideosContext.Provider>
  );
};

export { useLikedVideos, LikedVideoProvider };
