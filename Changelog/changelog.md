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
