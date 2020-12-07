const express = require('express');
const router = express.Router();

const Dog = require('../../models/item');

//Get method 
router.get('/category=:category',(req,res) => {
  Dog.dog.find({category:req.params.category}).sort({age : 1}).then(items => {
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