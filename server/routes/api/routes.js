const express = require('express');
const router = express.Router();

const dog = require('../../models/item');

//Get method 
router.get('/',(req,res) => {
  dog.find().sort({age : 1}).limit(3).then(items => {
    res.json(items)
  });
});

//Post method
router.post('/',(req,res) => {
 const obj = new dog({
    category: req.body.category,
    age: req.body.age
  })
  obj.save().then(item => res.json(item));
});

//Update method 



module.exports = router;