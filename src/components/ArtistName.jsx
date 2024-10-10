import React from 'react';

const formatArtistNames = (artists) => {
  if (artists.length === 1) {
    return artists[0].name;
  } else if (artists.length === 2) {
    return `${artists[0].name} & ${artists[1].name}`;
  } 
};

export default ArtistName;
