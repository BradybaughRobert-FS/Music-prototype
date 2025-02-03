# Changelog

## [0.0.1] - 2025-01-20

### Added
- Created `server.js` to initialize the HTTP server.
- Installed the following dependencies:
  - `nodemon` (as a development dependency for live reloading).
  - `express` (to handle HTTP requests and responses).
  - `dotenv` (for environment variable management).
  - `morgan` (for HTTP request logging).
- Created `app/index.js`:
  - Configured `express` to set up the API.
  - Added a base route (`/`) that responds with `{ message: "API is running", success: true }`.
  - Linked the `/api/v1` route to use handlers from `routes/index.js`.
- Created `routes/index.js`:
  - Added a GET route that responds with `{ success: true, message: "<HTTP method> - Request made" }`.
  - Added `artistRoutes.js` to the `routes` folder for artist-related routes.
  - Linked `artistRoutes` in `routes/index.js`.
- Updated `artistRoutes.js` with:
  - `GET` (fetch all artists).
  - `GET by ID` (fetch a specific artist).
  - `POST` (add a new artist).
  - `PUT` (update an artist).
  - `DELETE` (remove an artist).
- Created a `controller` folder in the `app` directory:
  - Added `artistController.js` to handle artist logic.
  - Moved route handler functions from `artistRoutes.js` to `artistController.js`.

### Fixed
- Corrected a typo in `routes/index.js` (`req.metod` changed to `req.method`).

---

## [0.0.2] - 2025-01-23

### Added
- Created a `db` folder inside the `app` directory.
  - Added a `config.js` file in the `db` folder to handle database configuration.
- Created a `.env` file in the main `server` directory.
  - Configured the application to use PORT `5001`.
  - Configured `MONGOD_URI` to `MONGODB_URI = mongodb://localhost:27017`
- Installed `mongoose`
- Created a `models` folder in the `app` folder
  - Created `Artists.js` file in `models` folder

### Fixed
- (No specific fixes were listed for this version.)

---

## [0.0.3] - 2025-01-24

### Added
- Created `albumController.js` file in `controller` folder
- Created `albumRoutes.js` file in `routes` folder
- Created `Album.js` file in `models` folder

---

## [0.0.4] - 2025-01-31

### Added
- Implemented album-artist relationship:
  - Updated `Artist.js` to include an `albums` field referencing `Album`.
  - Updated `albumController.js` to associate albums with artists when created.
  - Updated `artistController.js` to populate albums when fetching an artist.
  - Added `getAlbumsByArtist` function in `albumController.js`.
  - Updated `albumRoutes.js` to include `/artist/:artistId` for fetching albums by artist.
  - Updated `artistRoutes.js` to include `/artist/:id/albums` for fetching an artist with their albums.

- Started front-end development:
  - Created `client` folder and initialized Vite using `npm create vite@latest client`.
  - Installed dependencies with `npm i` and started the development server using `npm run dev`.
  - Installed `react-router-dom`, `axios`, and `tailwindcss` for front-end functionality.
  - Set up basic React Router navigation in `src/main.jsx` and `src/App.jsx`.

### Fixed
- Ensured API endpoints return properly formatted responses.
- Fixed incorrect model imports in some controllers.
