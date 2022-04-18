import React from "react";
import "./PlaylistModal.css";
import { usePlaylist } from "../../context";
const PlaylistModal = () => {
  const {
    playlistList,
    showPlaylistModal,
    setShowPlaylistModal,
    setShowPlaylistFormModal,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    currentVideo,
  } = usePlaylist();

  const createPlaylistHandler = () => {
    setShowPlaylistFormModal(true);
  };

  const checkboxHandler = (e, playlist) => {
    if (e.target.checked) {
      addVideoToPlaylist(playlist._id, currentVideo);
    } else {
      removeVideoFromPlaylist(playlist._id, currentVideo._id);
    }
  };

  return (
    <div
      id="modal"
      className={`${
        showPlaylistModal
          ? "modal-wrapper modal-wrapper-active"
          : "modal-wrapper"
      }`}
    >
      <div className="modal">
        <header className="modal-header">
          <h3>Playlists </h3>
          <button
            onClick={() => setShowPlaylistModal(false)}
            id="modal-close-btn"
            className="btn"
          >
            <i className="fa fa-times"></i>
          </button>
        </header>
        <section className="modal-body text-center">
          {playlistList.length > 0 ? (
            <>
              {playlistList.map((playlist) => {
                return (
                  <div
                    key={playlist._id}
                    className="playlist-item gutter-bottom-8"
                  >
                    <input
                      onChange={(e) => checkboxHandler(e, playlist)}
                      type="checkbox"
                      id={playlist.title}
                    />
                    <label htmlFor={playlist.title}>{playlist.title}</label>
                  </div>
                );
              })}
              <button
                onClick={createPlaylistHandler}
                className="btn btn-solid-primary btn-rc"
              >
                Create new playlist
              </button>
            </>
          ) : (
            <>
              <p className="gutter-bottom-16">No playlist to show</p>
              <button
                onClick={createPlaylistHandler}
                className="btn btn-solid-primary btn-rc"
              >
                Create new playlist
              </button>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default PlaylistModal;
