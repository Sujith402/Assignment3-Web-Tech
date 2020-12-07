const express = require('express');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');
const cors = require('cors');

const URI = require('./config/keys/keys').MongoURI;
const routes = require('./routes/api/routes');

const app=express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>{console.log('Connected... ')}).catch(err => console.log(err))

app.use(BodyParser.json());
app.use(cors());

app.use('/api/items',routes);

app.get('/',(req,res) => {
  res.json('<h1>Working?</h1>')
})

app.listen(PORT);
console.log(`Listening at port ${PORT}`)
