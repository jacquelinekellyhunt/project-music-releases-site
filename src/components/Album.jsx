import React, { useState } from 'react';
import ArtistName from './ArtistName';
import './album.css';

const formatArtists = (artists) => {
  if (artists.length === 2) {
    return `${artists[0].name} & ${artists[1].name}`;
  }
  if (artists.length > 2) {
    const lastTwoArtists = artists.slice(-2);
    const otherArtists = artists.slice(0, -2);
    return `${otherArtists.map(a => a.name).join(', ')}, ${lastTwoArtists[0].name} & ${lastTwoArtists[1].name}`;
  }
  return artists[0].name;
};

const Album = ({ album }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`album-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={album.images[0].url} alt={album.name} className="album-cover" />
      <div className="album-info">
        <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="album-name">
          {album.name}
        </a>
        <div className="artist-list">
          {formatArtists(album.artists)}
        </div>
      </div>
      {isHovered && (
        <div className="hover-buttons">
          <button className="play-button">▶</button>
          <button className="favorite-button">❤️</button>
          <button className="more-button">⋮</button>
        </div>
      )}
    </div>
  );
};

export default Album;
