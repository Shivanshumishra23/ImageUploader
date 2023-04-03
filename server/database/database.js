const mongoose =require('mongoose');

const Connect= ()=>{
    mongoose
    .connect('mongodb+srv://mishrashivanshu2004:Shiva_23@cluster0.yxnfpqd.mongodb.net/ImageUpload')
    .then(()=>console.log("Mongodb connected"))
    .catch((err)=>console.log("Mongo Error" ,err));

}

module.exports = Connect
