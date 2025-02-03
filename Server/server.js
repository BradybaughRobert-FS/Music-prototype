require("dotenv").config();
const express = require("express"); // Ensure Express is required
const app = require("./app");       // Assuming this sets up routes and middleware
const connectDB = require("./app/db/config");
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


connectDB();

const PORT = process.env.PORT || 5001; // Changed to match your API port

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
