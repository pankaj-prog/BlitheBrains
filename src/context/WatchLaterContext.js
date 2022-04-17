import { useState, createContext, useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { useAlert } from "./AlertContext";
import { useAuth } from "./AuthContext";

const WatchLaterContext = createContext();

const useWatchLater = () => useContext(WatchLaterContext);

const WatchLaterProvider = ({ children }) => {
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);
  const { encodedToken } = useAuth();

  const { showAlert } = useAlert();
  const { makeRequest: addWatchLaterRequest, response: addWatchLaterResponse } =
    useAxios();
  const {
    makeRequest: removeWatchLaterRequest,
    response: removeWatchLaterResponse,
  } = useAxios();

  const addToWatchLater = (video) => {
    if (encodedToken) {
      addWatchLaterRequest({
        method: "post",
        url: "/api/user/watchlater",
        headers: { authorization: encodedToken },
        data: { video },
      });
    } else {
      showAlert("Please login first", "error");
    }
  };

  useEffect(() => {
    if (addWatchLaterResponse) {
      setWatchLaterVideos(addWatchLaterResponse.watchlater);
      showAlert("video added to watch later", "success");
    }
  }, [addWatchLaterResponse]);

  const removeFromWatchLater = (_id) => {
    removeWatchLaterRequest({
      method: "delete",
      url: `/api/user/watchlater/${_id}`,
      headers: { authorization: encodedToken },
    });
  };

  useEffect(() => {
    if (removeWatchLaterResponse) {
      setWatchLaterVideos(removeWatchLaterResponse.watchlater);
      showAlert("video removed from watch later", "success");
    }
  }, [removeWatchLaterResponse]);

  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterVideos,
        setWatchLaterVideos,
        addToWatchLater,
        removeFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export { useWatchLater, WatchLaterProvider };
