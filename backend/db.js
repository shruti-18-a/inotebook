const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/inotebook')
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

module.exports = mongoose;




/* const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully");
    })
  }

module.exports = connectToMongo;*/