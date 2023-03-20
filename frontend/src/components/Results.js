import './Results.css';

const Results = ({ searchResults, handleFavorite }) => {

  return (
    <div className="results-container">
      {searchResults.map((result, index) => (
        <div className="result" key={index}>
          <div className="overlay">
          <button onClick={() => handleFavorite(result)}>Add Favorite</button>
            <h3>{result.trackName}</h3>
            <h6>{result.artistName}</h6>
            <p className='collection'>{result.collectionCensoredName}</p>
          </div>
          <img
            src={result.artworkUrl100}alt={`${result.trackName} artwork`}/>
        </div>
      ))}
    </div>
  );
};

export default Results;
