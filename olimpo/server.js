const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const app = express();
const movieRoutes = require("./routes/movieRoutes");

dotenv.config()

connectDB();
app.use("/api/movies", movieRoutes);
//localhost:5000/api/movies/


const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log("server is Connected to Port");
})