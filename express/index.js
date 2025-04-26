require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express();


mongoose.connect(process.env.MONGODB, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB is Connected!");
}).catch( err => console.log(err));



const helloRouter = require("./routes/user");

app.use('/hello', helloRouter);

app.get('/', (req, res) => {
    res.send("გამარჯობა სამყარო!");
});



const port = process.env.PORT || 5000;
app.listen( port, () => {
    console.log(`Server is running on port ${port}`);
} )