const express = require('express');
const { body, validationResult } = require('express-validator'); 
const User = require('../models/User');
const router = express.Router();

// Create a User using: POST "/api/auth". Doesn't require auth
router.post('/createuser',
body('email','Enter a valid email').isEmail(),
body('name','Enter a valid name').isLength({ min: 10 }),
body('password','Enter Valid Password').isLength({ min: 5 }),
 async(req,res)=>{
    // console.log(req.body);
    // const user = new User(req.body);
    // user.save();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try
    {
   let user=await User.findOne({email:req.body.email});
   if(user)
   {
    return res.status(400).json({error:'sorry user with same email exist'})
   }
    user=await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      })
    //   .then(user => res.json(user)).
    //   catch(err=>{console.log(err)
    //   res.json({error:'Please enter Unique Value',message:err.message})});
    res.json(user)
    }catch(error){
        console.error(error.message);
        res.status(500).send('Some error occured')
    }
});

module.exports = router     