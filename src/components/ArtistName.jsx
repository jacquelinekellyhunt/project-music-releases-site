const ArtistName = ({ artists }) => {  
    if (artists.length === 1) {
      return (
        <a 
          href={artists[0].external_urls.spotify} 
          target="_blank" 
          className="artist-name">
          {artists[0].name}
        </a>
      );
    } else if (artists.length === 2) {
      return (
        <span className="artist-name">
          <a 
            href={artists[0].external_urls.spotify} 
            target="_blank">
            {artists[0].name+" "}
          </a> 
          & 
          <a 
            href={artists[1].external_urls.spotify} 
            target="_blank">
            {" "+artists[1].name}
          </a>
        </span>
      );
    }
  };
  
  export default ArtistName;
  