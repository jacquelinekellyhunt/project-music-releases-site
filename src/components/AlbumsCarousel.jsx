import React, { useState, useEffect } from 'react';
import './styling/albumsCarousel.css';  // Ensure styling is imported
import data from '../data.json';  // Ensure correct data path

export const AlbumsCarousel = () => {
  const [albums, setAlbums] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && data.albums && data.albums.items) {
      setAlbums(data.albums.items);
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % albums.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + albums.length) % albums.length);
  };

  // Handle infinite scrolling logic
  const getVisibleAlbums = () => {
    const totalAlbums = albums.length;
    const visibleAlbums = [];

    for (let i = -3; i <= 3; i++) {  // Display 7 albums, with 3 on each side
      const index = (currentIndex + i + totalAlbums) % totalAlbums;
      visibleAlbums.push(albums[index]);
    }

    return visibleAlbums;
  };

  if (albums.length === 0) {
    return <p>Loading albums...</p>;
  }

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={prevSlide}>{"<"}</button>
      
      <div className="carousel">
        {getVisibleAlbums().map((album, index) => {
          const isCenter = index === 3;  // Middle one is always at index 3
          const zIndex = isCenter ? 2 : 1;  // Elevate the center one
          const scale = isCenter ? 1.1 : 0.8;  // Scale the center one larger

          return (
            <div
              key={album.id}  
              className={`carousel-item ${isCenter ? "center" : "sides"}`}
              style={{
                transform: `scale(${scale})`,
                zIndex: zIndex,
                boxShadow: isCenter ? "none" : "0px 5px 15px rgba(0,0,0,0.2)",
              }}
            >
              <img 
                src={album.images[0]?.url}  
                alt={album.name} 
                className="album-image" 
              />
              <div className="album-info">
                <p>{album.name}</p>
                <p>{album.artists[0]?.name || "Unknown Artist"}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="carousel-button right" onClick={nextSlide}>{">"}</button>
    </div>
  );
};
