import React from "react";
import "./Playlist.css";
import { videos } from "../../backend/db/videos";
import { Banner, VideoCardHorizontal } from "../../components";

const playlists = [
  {
    _id: "a1",
    title: "Playlist1",
    description:
      "Lorem ipsum dolor sit a consectetur adipisicing elit amet pariatur iste.",
  },
  {
    _id: "a2",
    title: "Playlist2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    _id: "a3",
    title: "Playlist3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Playlist = () => {
  return (
    <div className=" content">
      <Banner title="Playlists" />
      <p className="text-center">
        <button className="btn btn-solid-primary btn-rc gutter-bottom-24">
          Create new playlist
        </button>
      </p>
      <div className="playlist-page">
        <section className="playlist-wrapper">
          {playlists.map((playlist) => {
            return (
              <div className="text-center">
                <h4
                  className={`playlist-title ${
                    playlist._id == "a2" && "playlist-active-title"
                  }`}
                >
                  {playlist.title}
                </h4>
                {/* for now a2 is the selected playlist */}
                {playlist._id == "a2" && (
                  <p className="playlist-description">{playlist.description}</p>
                )}
              </div>
            );
          })}
        </section>
        <section className="playlist-videos">
          {videos.map((video) => (
            <VideoCardHorizontal {...video} cardType="playlist" />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Playlist;
