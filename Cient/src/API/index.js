import axios from 'axios';


const API = Object.create(null);

API.fetchArtist = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5001/api/v1/artist/"); // Changed from localhost to 127.0.0.1
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching artist:", error.message);
      console.error("Full error:", error);
      throw error;
    }
  };
  

export default API;