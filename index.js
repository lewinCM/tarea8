const express = require('express');
require('dotenv').config()
const cors = require("cors");
const { dbConnect } = require('./config/mongo');
const swaggerUI = require('swagger-ui-express');
const openApiConfigration = require('./docs/swagger');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("upload"));

app.use("/api", require("./routes"));

const port = process.env.PORT || 3000;

// =======Ruta de docs=====//
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfigration))
app.listen(port, () => {

  dbConnect()
  console.log(`listening on http://localhost:${port}`)
});

