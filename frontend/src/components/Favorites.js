import './Favorites.css';

const Favorites = ({ favorites, handleRemoveFavorite }) => {
  return (
    <div className="favorites-container">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites</p> // display "No favorites" message when there are no items in the favorites list
      ) : (
        <ul>
          {favorites.map((favorite, index) => (
            <div className="favorite" key={index}>
            <div className="overlay">
              <button onClick={() => handleRemoveFavorite(favorite)}>Remove</button>
              <h3>{favorite.trackName}</h3>
              <h3>{favorite.artistName}</h3>
              <p className='collection'>{favorite.collectionCensoredName}</p>
              <a href={favorite.trackViewUrl}>Get on iTunes</a>
            </div>
            <img
              src={favorite.artworkUrl100}alt={`${favorite.trackName} artwork`}/>
          </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;