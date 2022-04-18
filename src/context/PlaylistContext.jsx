import { useState, createContext, useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";
import { useAlert } from "./AlertContext";
import { useAuth } from "./AuthContext";

const PlaylistContext = createContext();

const usePlaylist = () => useContext(PlaylistContext);

const PlaylistProvider = ({ children }) => {
  const [playlistList, setPlaylistList] = useState([]);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showPlaylistFormModal, setShowPlaylistFormModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();

  const { encodedToken } = useAuth();
  const { showAlert } = useAlert();

  const { makeRequest, response } = useAxios();

  useEffect(() => {
    makeRequest({
      method: "get",
      url: "/api/user/playlists",
      headers: { authorization: encodedToken },
    });
  }, []);

  useEffect(() => {
    if (response) {
      setPlaylistList(response.playlists);
    }
  }, [response]);

  // create playlist
  const {
    makeRequest: createPlaylistRequest,
    response: createPlaylistResponse,
  } = useAxios();

  const createPlaylist = (playlist) => {
    createPlaylistRequest({
      method: "post",
      url: "/api/user/playlists",
      headers: { authorization: encodedToken },
      data: { playlist },
    });
  };

  useEffect(() => {
    if (createPlaylistResponse) {
      showAlert("playlist created", "success");
      setPlaylistList(createPlaylistResponse.playlists);
    }
  }, [createPlaylistResponse]);

  // delete playlist
  const {
    makeRequest: deletePlaylistRequest,
    response: deletePlaylistResponse,
  } = useAxios();

  const deletePlaylist = (playlist) => {
    deletePlaylistRequest({
      method: "delete",
      url: `/api/user/playlists/${playlist._id}`,
      headers: { authorization: encodedToken },
    });
  };

  useEffect(() => {
    if (deletePlaylistResponse) {
      setPlaylistList(deletePlaylistResponse.playlists);
    }
  }, [deletePlaylistResponse]);

  // add video to playlist
  const {
    makeRequest: addVideoToPlaylistRequest,
    response: addVideoToPlaylistResponse,
  } = useAxios();

  const addVideoToPlaylist = (playlistId, video) => {
    addVideoToPlaylistRequest({
      method: "post",
      url: `/api/user/playlists/${playlistId}`,
      headers: { authorization: encodedToken },
      data: { video },
    });
  };

  useEffect(() => {
    if (addVideoToPlaylistResponse) {
      let updatedPlaylists = playlistList.map((playlist) => {
        if (playlist._id == addVideoToPlaylistResponse.playlist._id) {
          return addVideoToPlaylistResponse.playlist;
        } else return playlist;
      });

      setPlaylistList(updatedPlaylists);
      console.log("video added response", addVideoToPlaylistResponse);
    }
  }, [addVideoToPlaylistResponse]);

  // remove video from playlist

  const {
    makeRequest: removeVideoFromPlaylistRequest,
    response: removeVideoFromPlaylistResponse,
  } = useAxios();

  const removeVideoFromPlaylist = (playlistId, videoId) => {
    addVideoToPlaylistRequest({
      method: "delete",
      url: `/api/user/playlists/${playlistId}/${videoId}`,
      headers: { authorization: encodedToken },
    });
  };

  useEffect(() => {
    if (removeVideoFromPlaylistResponse) {
      console.log("video removed response", removeVideoFromPlaylistResponse);
    }
  }, [removeVideoFromPlaylistResponse]);

  return (
    <PlaylistContext.Provider
      value={{
        playlistList,
        setPlaylistList,
        showPlaylistModal,
        setShowPlaylistModal,
        showPlaylistFormModal,
        setShowPlaylistFormModal,
        currentVideo,
        setCurrentVideo,
        createPlaylist,
        deletePlaylist,
        addVideoToPlaylist,
        removeVideoFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export { usePlaylist, PlaylistProvider };
