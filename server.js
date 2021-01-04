const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const User = require("./models/userModel");
const routes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 8080;
const mongoURL = "mongodb+srv://DAS:das123@clusterfyp.bymln.mongodb.net/DAS_DB";

mongoose.connect(
  mongoURL || "mongodb://localhost:27017/DriverAssitenceSystem",
  //  "mongodb+srv://DAS:das123@clusterfyp.bymln.mongodb.net/DriverAssitenceSystem",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!");
});

//HTTP request logger
app.use(morgan("tiny"));
app.use("/", routes);

app.listen(PORT, console.log("Server starting at port", PORT));
