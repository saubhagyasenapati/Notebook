const mongoose=require('mongoose');


const connectToMongo = () =>{
    mongoose.connect("mongodb+srv://admin:sikan1@cluster0.v9csl.mongodb.net/inotebook")
    .then(()=>console.log("connection success"))
    .catch((err)=>console.log(err));
}
module.exports=connectToMongo;