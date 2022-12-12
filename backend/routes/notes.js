const express=require('express');
var fetchuser=require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator'); 
const router=express.Router();
//get all the notes api/notes/fetchallnotes
router.get('/fetchallnotes',fetchuser,async(req,res)=>{

    try {
        const notes=await Note.find({user:req.user.id});
        res.json(notes)   
    } catch (error) {
        console.error(error.message);
        res.status(500).send(' Internal server error occured')  
    }
       
})
//add a node
router.post('/addnote',fetchuser,
body('title','Enter a valid title').isLength({ min: 3 }),
body('description','Must be of 5 charcter').isLength({ min: 5 }),
async(req,res)=>{
    try {
        const{title,description,tag}=req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        } 
        let uid=req.user.id
        console.log(uid);
        const note=new Note(
            {
                user:uid,title,description,tag
            }
        )
        const notesave=await note.save()
        res.json(notesave)
     } 
    catch (error) {
        console.error(error.message);
        res.status(500).send(' Internal server error occured with us')
    }
}
   
)

//update a note
router.put('/update/:id',fetchuser,
async(req,res)=>{
   const{title,description,tag}=req.body;
   const newNode={ }
   if(title){newNode.title=title};
   if(description){newNode.description=description};
   if(tag){newNode.tag=tag};

   let note=await Note.findById(req.params.id)
   if(!note)
   {
    return res.status(404).send("Not Found");
   }

   if(note.user.toString()!=req.user.id){
    return res.status(401).send("Not allowed ")
   }

   note=await Note.findByIdAndUpdate(req.params.id,{$set:newNode},{new:true})
   res.json(note)
})

//delete a note
router.delete('/delete/:id',fetchuser,
async(req,res)=>{
   const{title,description,tag}=req.body;

   let note=await Note.findById(req.params.id)
   if(!note)
   {
    return res.status(404).send("Not Found");
   }

   if(note.user.toString()!=req.user.id){
    return res.status(401).send("Not allowed ")
   }

   note=await Note.findByIdAndDelete(req.params.id)
   res.json({"Success": "Note has been deleted",note:note})
})


module.exports=router