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
 const obj = new Dog.UserReply({
    title: req.body.title,
    body: req.body.body
  })
  obj.save().then(item => res.json(item));
});


router.post('/save', (req, res) => {
  const data = req.body;

  const newuserreply = new Dog.UserReply(data);

  newuserreply.save().then(item => res.json(item))
});
//Update method 



module.exports = router;