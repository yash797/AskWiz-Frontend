import { Add, Business, History, MusicNote, Psychology, Science, SportsEsports, Theaters, VideoLibrary } from "@material-ui/icons";
import React from "react";
import { useState } from 'react';
import "./css/SidebarOptions.css";
const options = [
  {
    Icon: History,
    title: "History",
  },
  {
    Icon: Business,
    title: "Business",
  },
  {
    Icon: History,
    title: "Psychology",
  },
  {
    Icon: SportsEsports,
    title: "Sports",
  },
  {
    Icon: MusicNote,
    title: "Music",
  },
  {
    Icon: History,
    title: "Science",
  },
  {
    Icon: Theaters,
    title: "Movies",
  },
  {
    Icon: VideoLibrary,
    title: "Technology",
  },
  {
    Icon: Add,
    title: "Discover Spaces",
  },
];

function SidebarOptions() {
  const [selectedOption, setSelectedOption] = useState(null);

  const isMobile = window.innerWidth <= 768;

  if (isMobile && selectedOption === null) {
    return (
      <div className="options-container">
        <div className="option-list" onClick={() => setSelectedOption(0)}>
          <p className="option-title">Options List</p>
        </div>
      </div>
    );
  }

    return (
    <div className="options-container">
      {options.map((option, index) => (
        <div
          key={index}
          className="option-container"
          onClick={() => setSelectedOption(selectedOption === index ? null : index)}
        >
          <div className="option-header">
            <option.Icon className="icon" />
            <p className="option-title">{option.title}</p>
          </div>
          {selectedOption === index && (
            <div className="option-details">
              <p className="option-description">{option.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>

  );
}

export default SidebarOptions;
