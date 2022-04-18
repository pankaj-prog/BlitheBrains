import React, { useState, useEffect } from "react";
import "./Playlist.css";
import { videos } from "../../backend/db/videos";
import { Banner, VideoCardHorizontal } from "../../components";
import { usePlaylist } from "../../context";

const Playlist = () => {
  const { playlistList, deletePlaylist, setShowPlaylistFormModal } =
    usePlaylist();

  const [selectedPlaylistIndex, setSelectedPlaylistIndex] = useState();

  let selectedPlaylist;
  if (selectedPlaylistIndex) {
    selectedPlaylist = [
      ...playlistList.filter(
        (playlist) => playlist._id == selectedPlaylistIndex
      ),
    ][0];
  }

  return (
    <div className=" content">
      <Banner title="Playlists" />
      <p className="text-center">
        <button
          onClick={() => setShowPlaylistFormModal(true)}
          className="btn btn-solid-primary btn-rc gutter-bottom-24"
        >
          Create new playlist
        </button>
      </p>
      {playlistList.length > 0 ? (
        <div className="playlist-page">
          <section className="playlist-wrapper">
            {playlistList.map((playlist) => {
              return (
                <div key={playlist._id} className="text-center">
                  <h4
                    onClick={() => setSelectedPlaylistIndex(playlist._id)}
                    className={`playlist-title ${
                      playlist._id == selectedPlaylistIndex &&
                      "playlist-active-title"
                    }`}
                  >
                    {playlist.title}
                  </h4>
                  {/* for now a2 is the selected playlist */}
                  {playlist._id == selectedPlaylistIndex && (
                    <p className="playlist-description">
                      <p>{playlist.description}</p>
                      <button
                        onClick={() => deletePlaylist(playlist)}
                        className="btn btn-solid-primary btn-rc"
                      >
                        Delete
                      </button>
                    </p>
                  )}
                </div>
              );
            })}
          </section>
          <section className="playlist-videos">
            {selectedPlaylist ? (
              selectedPlaylist.videos.length > 0 ? (
                selectedPlaylist.videos.map((video) => (
                  <VideoCardHorizontal
                    key={video._id}
                    video={video}
                    cardType="playlist"
                  />
                ))
              ) : (
                <p className="h4">Add videos to playlist to see them here.</p>
              )
            ) : (
              <p className="h4">Playlist is not selected</p>
            )}
          </section>
        </div>
      ) : (
        <p className="text-center h4">Create playlists to see here</p>
      )}
    </div>
  );
};

export default Playlist;
