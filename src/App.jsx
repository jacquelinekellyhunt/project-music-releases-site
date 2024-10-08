import React from 'react';
import data from './data.json';
import Album from './components/Album';
import Sidebar from './components/Sidebar';
import Header from './components/Header'; 
import './app.css';

const App = () => {
  return (
    <div className="app-container">
      <Header /> {/* Add the header */}
      <div className="content">
        <Sidebar playlists={data.playlists.items} />
        <div className="album-list">
          {data.albums.items.map((album, index) => (
            <Album key={index} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
