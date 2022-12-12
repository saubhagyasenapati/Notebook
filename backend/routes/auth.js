const express = require('express');
const { body, validationResult } = require('express-validator'); 
const User = require('../models/User');
const router = express.Router();
var bcrypt=require('bcryptjs')
var jwt = require('jsonwebtoken');
var fetchuser=require('../middleware/fetchuser');
const JWT_SECRET="Saubhagyaisbad"

// Create a User using: POST "/api/auth". Doesn't require auth
router.post('/createuser',
body('email','Enter a valid email').isEmail(),
body('name','Enter a valid name').isLength({ min: 10 }),
body('password','Enter Valid Password').isLength({ min: 5 }),
 async(req,res)=>{
    // console.log(req.body);
    // const user = new User(req.body);
    // user.save();
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try
    {
   let user=await User.findOne({email:req.body.email});
   if(user)
   {
    return res.status(400).json({success,error:'sorry user with same email exist'})
   }
 
   const salt= await bcrypt.genSalt(10)
   const secPass= await bcrypt.hash(req.body.password,salt)
    user=await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
    //   .then(user => res.json(user)).
    //   catch(err=>{console.log(err)
    //   res.json({error:'Please enter Unique Value',message:err.message})});
    const data={
      user:{
        id:user.id
      }
    }
   const authToken=  jwt.sign(data,JWT_SECRET)
   success=true;
    res.json({success,authToken})
    }catch(error){
        console.error(error.message);
        res.status(500).send('Some error occured')
    }
})



//Authenticate A user login api/auth/login
router.post('/login',
body('email','Enter a valid email').isEmail(),
body('password','it cannot be blacnk').exists(),
 async(req,res)=>{
    const errors = validationResult(req);
    let success=false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const{email,password}=req.body
     try {
      let user=await User.findOne({email});
      if(!user)
      {
        return res.status(400).json({error:"Please login with correct credentials"})
      }
      const passwordcompare=await bcrypt.compare(password,user.password);
      if(!passwordcompare)
      {
        return res.status(500).json({success,error:"Please login with correct credential"})
      }
      const data={
        user:{
          id:user.id
        }
      }
     const authToken=  jwt.sign(data,JWT_SECRET)
      success=true;
      res.json({success,authToken})
      
     } catch (error) {
       console.error(error.message);
        res.status(500).send(' Internal server error occured')
     }
});

//Route 3:get logged in user details api/auth/getuser.Login required
router.post('/getuser',fetchuser,async(req,res)=>{

try {
  let userid=req.user.id
  const user=await User.findById(userid).select('-password');
  if(user)
  {
    res.send(user);
  }
} catch (error) {
  console.error(error.message);
  res.status(500).send(' Internal server error occured')
}
 })
module.exports = router     