const express = require('express');
require('dotenv').config()
const cors = require("cors");
const { dbConnect } = require('./config/mongo');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("upload"));

app.use("/api", require("./routes"));

const port = process.env.PORT || 3001;



app.listen(port, () => {

  dbConnect()
  console.log(`listening on http://localhost:${port}`)
});
