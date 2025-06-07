const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const imageRoutes = require("./routes/imageRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));
app.use("/uploads", express.static("uploads"));

app.use("/api/images", imageRoutes);

const PORT =process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
