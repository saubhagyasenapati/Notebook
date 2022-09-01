const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    
    res.redirect('https://www.youtube.com/')
})

module.exports=router