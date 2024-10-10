import React from 'react';
import Header from './components/Header';  // Your existing header component
import './components/styling/app.css';  // Import app styling
import data from './data.json';  // Import Spotify data
import Album from './components/Albums';  // Import Album component
import PlaylistSidebar from './components/PlaylistSidebar';  // Correct path and name

const App = () => {
  return (
    <div className="app-container"> 
      <Header />
      <div className="main-content">
        <PlaylistSidebar />  
        <div className="album-list">  
          {data.albums.items.map(album => (
            <Album key={album.id} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default App;
