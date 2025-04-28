const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongodb Connected Succesfully");
    }catch(error){
        console.log("Mongodb not connected: ", error.message);
    }
}

module.exports = connectDB;