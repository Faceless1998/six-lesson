const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const app = express();

dotenv.config()

connectDB();

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log("server is Connected to Port");
})