const Sidebar = ({ playlists }) => {
    return (
      <div className="sidebar">
        <h3>Popular Playlists</h3>
        <ul>
          {playlists.items.map((playlist, index) => (
            <li key={index}>
              <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                {playlist.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  