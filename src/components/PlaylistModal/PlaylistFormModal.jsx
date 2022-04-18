import React, { useRef } from "react";
import { useAlert, usePlaylist } from "../../context";

const PlaylistFormModal = () => {
  const { showPlaylistFormModal, setShowPlaylistFormModal, createPlaylist } =
    usePlaylist();

  const { showAlert } = useAlert();

  const titleRef = useRef();
  const descriptionRef = useRef();

  const createPlaylistHandler = () => {
    if (
      titleRef.current.value.length > 2 &&
      descriptionRef.current.value.length > 2
    ) {
      createPlaylist({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      });
      setShowPlaylistFormModal(false);
      titleRef.current.value = "";
      descriptionRef.current.value = "";
    } else {
      showAlert("input length should be minimum 2 char", "error");
    }
  };

  const closeModalHandler = () => {
    setShowPlaylistFormModal(false);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div
      className={`${
        showPlaylistFormModal
          ? "modal-wrapper modal-wrapper-active form-modal"
          : "modal-wrapper form-modal"
      }`}
    >
      <div className="modal">
        <header className="modal-header">
          <h3>Create Playlist</h3>
          <button onClick={closeModalHandler} className="btn">
            <i className="fa fa-times"></i>
          </button>
        </header>
        <section className="modal-body text-center">
          <div className="input-container gutter-bottom-16">
            <input
              type="text"
              name="playlist-title"
              id="playlist-tile"
              placeholder="Playlist title..."
              ref={titleRef}
            />
          </div>
          <div className="input-container gutter-bottom-16">
            <input
              type="text"
              name="playlist-description"
              id="playlist-description"
              placeholder="Playlist description"
              ref={descriptionRef}
            />
          </div>
          <button
            onClick={createPlaylistHandler}
            className="btn btn-solid-primary btn-rc"
          >
            Create Playlist
          </button>
        </section>
      </div>
    </div>
  );
};

export default PlaylistFormModal;
