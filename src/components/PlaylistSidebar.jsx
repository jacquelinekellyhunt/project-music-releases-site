import React, { useState } from 'react';
import playlistsData from '../stretch-goal.json'; 
import './styling/playlistSidebar.css'; 
import playlistIcon from '../assets/icons/playlist.png'; 
import arrowIcon from '../assets/icons/arrow.png'; 

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePlaylist = () => setIsOpen(!isOpen);

  const playlists = playlistsData.playlists.items;

  return (
    <div className="sidebar-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Playlists Header */}
        <div className="playlist-header" onClick={togglePlaylist}>
          {/* Playlist Icon */}
          <img src={playlistIcon} alt="Playlists" className="playlist-icon" />
          
          {/* Playlist Title */}
          <h3 className="playlist-title">Playlists</h3>
          
          {/* Arrow Icon */}
          <img 
            src={arrowIcon} 
            alt="Toggle" 
            className={`arrow-icon ${isOpen ? 'open' : 'closed'}`} 
          />
        </div>

        {/* Playlist Items */}
        {isOpen && (
          <ul className="playlist-list">
            {playlists.map((playlist) => (
              <li key={playlist.id} className="playlist-item">
                <img src={playlist.images[0].url} alt={playlist.name} />
                <span>{playlist.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SidebarLayout;
