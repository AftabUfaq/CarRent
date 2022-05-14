const mongoose = require('mongoose');
const userSchema = new  mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    mobilenumber:  {
        type: String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true
    },
    cnic: {
        type: String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    profile_pic: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
});

module.exports = mongoose.model('user', userSchema);

