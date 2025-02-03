import React from "react";
import SearchBar from "./components/SearchBar";
import API from "./API";
import "./App.css";

function App() {
  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("Search button clicked!", event.target.search.value);

    try {
      const response = await API.fetchArtists();
      console.log("From API:", response);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  return (
    <div>
      <h1>Artist Search</h1>
      <SearchBar onSubmit={handleSearch} />
    </div>
  );
}

export default App;
