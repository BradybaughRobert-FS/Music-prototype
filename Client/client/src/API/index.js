import axios from "axios";

const API = Object.create(null);

API.fetchArtists = async (searchQuery) => {
  try {
    const response = await axios.get(`http://localhost:5001/api/v1/artist?name=${searchQuery}`);
    console.log("API Response:", response);
    return response.data.artists;
  } catch (error) {
    console.error("Error fetching artists:", error);
    return [];
  }
};

export default API;
