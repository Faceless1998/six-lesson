const express = require('express');
const mongoose = require("mongoose")
const dotenv = require('dotenv');
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

dotenv.config()

app.use("/api/movies", movieRoutes)
app.use("/api/users", userRoutes)

mongoose.connect(process.env.MONGODB,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected MongoDB");
    app.listen(process.env.PORT, () => {
        console.log(`Backend start at localhost:${process.env.PORT}`)
    })
}
).catch(err => {
    console.log("Error connection Mongodb", err);
})