const express = require('express');
const { body, validationResult } = require('express-validator'); 
const User = require('../models/User');
const router = express.Router();

// Create a User using: POST "/api/auth". Doesn't require auth
router.post('/',
body('email','Enter a valid email').isEmail(),
body('name','Enter a valid name').isLength({ min: 10 }),
body('password','Enter Valid Password').isLength({ min: 5 }),
 (req,res)=>{
    // console.log(req.body);
    // const user = new User(req.body);
    // user.save();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      }).then(user => res.json(user)).
      catch(err=>{console.log(err)
      res.json({error:'Please enter Unique Value',message:err.message})});
});

module.exports = router     