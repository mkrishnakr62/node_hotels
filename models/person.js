 const mongoose=require('mongoose');

 const personschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
       type: Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        require: true
    },
    mobile:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    address:{
        type:string
    },
    salary:{
        type:number,
        require: true
    }
 });

//  create person model 
const person=mongoose.model('person',personschema);
module.exports=person;