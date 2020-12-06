const express = require('express');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

const URI = require('./config/keys/keys').MongoURI;
const routes = require('./routes/api/routes');

const app=express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>{console.log('Connected... ')}).catch(err => console.log(err))

app.use(BodyParser.json());

app.use('/',routes);


app.listen(PORT);
console.log(`Listening at port ${PORT}`)