require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./Routes/authRoutes");
const cors = require("cors");
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow the necessary HTTP methods
    credentials: true, // Allow cookies to be sent with the request (if needed)
  })
);

// Routes
app.use("/api", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
