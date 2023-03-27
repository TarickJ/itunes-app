iTunes Search App
Demo http://itunes-app-searcher.herokuapp.com/
The iTunes Search App is a simple React-based web application that allows users to search for media content on iTunes, such as music, movies, and TV shows, and save their favorite items to a separate list. The app utilizes the iTunes API to retrieve search results and displays them in an organized format, with options to add favorites, remove favorites, and toggle the display of the favorites list.

Installation
To run the app locally, you will need to have Node.js installed on your computer. Once you have Node.js installed, follow these steps:

- Clone the repository to your local machine by running git clone https://github.com/example/itunes-search-app.git in your terminal or command prompt.
- Navigate to the root directory of the project in your terminal or command prompt.
- Run npm install to install the necessary dependencies.
- Run npm start to start the local development server.
- The app should open automatically in your default web browser. If it does not, navigate to http://localhost:3000/ in your web browser.

Security
- There were no API keys used in this app
- Helmet helps with security by setting security-related HTTP headers that help to protect the application from various attacks. It helps to prevent attacks such as cross-site scripting (XSS), clickjacking, and other security vulnerabilities. Additionally, Helmet disables the Cross-Origin-Embedder-Policy (COEP) header to resolve any related security issues.


To use the app, follow these steps:

- Enter a search term in the search bar and select a media type from the dropdown menu.
- Click the "Search" button to initiate the search.
- The search results will be displayed on the page, with an option to add each item to the favorites list.
- To view the favorites list, click the "Favorites" button in the search bar.
- To remove an item from the favorites list, click the "Remove" button next to the item.
