const ArtistName = ({ artist }) => {
    return (
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="artist-name"
      >
        {artist.name}
      </a>
    );
  };
  
  export default ArtistName;
  