import { useState } from 'react';
import Favorites from './Favorites';
import Header from './Header';
import Results from './Results';
import Search from './Search';
import Modal from './Modal';

function App() {
  // Set up state variables for search term, media type, search results, and favorites
  const [term, setTerm] = useState('');
  const [media, setMedia] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false); // new state variable for the modal

  // Function to handle the search button click event
  const handleSearch = async () => {
    try {
      // Make a GET request to the server API with the search term and media type
      const response = await fetch(`/api/search?term=${term}&media=${media}`);
      console.log(response)
      // Parse the JSON response data and update the search results state variable
      const data = await response.json();
      setSearchResults(data.results);
      console.log(data.results)
    } catch (error) {
      // Log any errors to the console
      console.error(error);
    }
  };

  // Function to add an item to the favorites list
  const handleFavorite = (item) => {
    // Check if the item is already in the favorites array
    const alreadyAdded = favorites.some((favorite) => favorite.trackId === item.trackId);
    
    // Only add the item if it hasn't been added before
    if (!alreadyAdded) {
      // Update the favorites state variable by creating a new array with the current favorites and the new item
      setFavorites([...favorites, item]);
    }
  };
  

  // Function to remove an item from the favorites list
  const handleRemoveFavorite = (item) => {
    // Update the favorites state variable by creating a new array with all favorites except the one being removed
    setFavorites(favorites.filter((favorite) => favorite.trackId !== item.trackId));
  };

  // Function to toggle the display of the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Render the search input, search results, and favorites list
  return (
    <div className="main-container">
      <Header />
      <Search
        term={term}
        setTerm={setTerm}
        toggleFavorites={toggleModal} // update the toggleFavorites prop to toggle the modal instead of the favorites component
        handleSearch={handleSearch}
        media={media}
        setMedia={setMedia}
        />
      {searchResults.length > 0 &&
      <Results
        searchResults={searchResults}
        handleFavorite={handleFavorite}
        />}
      {showModal && // render the modal only if showModal is true
      <Modal onClose={toggleModal}>
        <Favorites
          favorites={favorites}
          handleRemoveFavorite={handleRemoveFavorite}
        />
      </Modal>}
    </div>
  );
}

export default App;
