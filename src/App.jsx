import React from 'react';
import Header from './components/Header';  // Default import for Header
import { AlbumsCarousel } from './components/AlbumsCarousel';  // Import AlbumsCarousel
import './components/styling/app.css';  // Import app styling
import './components/styling/albumsCarousel.css';  // Import carousel styling

const App = () => {
  return (
    <div>
      <Header />
      {/* Adding AlbumsCarousel to be rendered after the Header */}
      <AlbumsCarousel /> 
    </div>
  );
};

export default App;  // Ensure App is default export
