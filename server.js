const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
app.use(cors()) // after you initialize your express app instance
require('dotenv').config();
const port =process.env.PORT;
const mongoose = require('mongoose');
const getBooks = require('./controllers/Book.controller');
// const seedUserData = require('./models/User.model');


mongoose.connect('mongodb://localhost:27017/FavoriteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);




// seedUserData();

// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 
app.get('/books', getBooks);

app.listen(port) // kick start the express server to work