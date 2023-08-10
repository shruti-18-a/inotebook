const mongoose = require("mongoose");
const express = require("express");
var cors = require('cors')

mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    const port = 5000;

    app.use(cors())
    app.use(express.json())

    // Available Routes 
    app.use('/api/auth', require('./routes/auth.js'))
    app.use('/api/notes', require('./routes/notes'))

    app.listen(port, () => {
      console.log(`iNotebook backend listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


