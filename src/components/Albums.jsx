import React from 'react';
import './styling/albums.css';  
import PlayOverlay from './PlayOverlay';  
import ArtistName from './ArtistName';

const Album = ({ album }) => {
  return (
    <div className="album">
      <div className="album-cover">
        <img src={album.images[0].url} alt={album.name} className="cover-image" />
        <PlayOverlay />  
      </div>
      <a href={album.external_urls.spotify} target="_blank" className="album-name">
        {album.name}
      </a>
      <ArtistName artists={album.artists} />
    </div>
  );
};

export default Album;
