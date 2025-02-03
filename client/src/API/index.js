import axios from "axios";

const API = Object.create(null);

API.fetchArtists = async () => {
  const response = await axios.get("http://localhost:5001/api/v1/artist");

  console.log(response.data);
  return response.data;
};

export default API;
