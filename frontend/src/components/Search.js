// import './Search.css';

export default function Search({term, setTerm, media, setMedia,handleSearch ,toggleFavorites}) {
  return (
    <div className="search-input">
        {/* Controlled input for search term */}
        <input type="text"
        placeholder="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)} />
        {/* Controlled select element for media type */}
        <select value={media} onChange={(e) => setMedia(e.target.value)}>
          <option value="">Select media type</option>
          <option value="movie">Movie</option>
          <option value="podcast">Podcast</option>
          <option value="music">Music</option>
          <option value="audiobook">Audiobook</option>
          <option value="shortFilm">Short Film</option>
          <option value="tvShow">TV Show</option>
          <option value="software">Software</option>
          <option value="ebook">Ebook</option>
          <option value="all">All</option>
        </select>
        {/* Button to initiate the search */}
        <button onClick={handleSearch}>Search</button>
        <button onClick={toggleFavorites}>Favorites</button>
      </div>
  )
}
