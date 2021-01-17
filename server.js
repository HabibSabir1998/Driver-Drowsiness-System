const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const User = require("./models/userModel");
const routes = require("./routes/api");

require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;
const mongoURL = "mongodb+srv://DAS:das123@clusterfyp.bymln.mongodb.net/DAS_DB";

mongoose.connect(
  mongoURL || "mongodb://localhost:27017/DriverAssitenceSystem",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!");
});

//HTTP request logger
app.use(morgan("tiny"));
app.use("/", routes);

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, console.log("Server starting at port", PORT));
