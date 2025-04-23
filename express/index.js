const express = require('express')
const app = express();
const port = 5000

const helloRouter = require("./routes/user");

app.use('/hello', helloRouter);

app.get('/', (req, res) => {
    res.send("გამარჯობა სამყარო!");
})

app.listen( port, () => {
    console.log(`Server is running on port ${port}`);
} )