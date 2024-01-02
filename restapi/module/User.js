const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, 'name is required'],
        minlength:[3, "name length must be greater than or equal to 3"]
    },
    username:{
        type:String,
        required:[true, 'username is required'],
        minlength:[3, "username length must be greater than or equal to 3"],
        unique:true

    },
    email:{
        type:String,
        required:[true, "email id is required"],
        unique:true
    },
    phone:{
        type: String,
        required:[true, 'name is required'],
        minlength:[10, "phone length must be greater than or equal to 10"]
    },
    addressline:{
        type: String,
        required:[true, "please provied addressline"]
    },
    pin:{
        type:String,
        required:[true, "please provid pin"],
    },
    state:{
        type:String,
        required:[true, "please provid state"],
    },
    password:{
        type:String,
        required:[true, 'password is required'],
        minlength:[8, "password length must be greater than or equal to 8"]
    }
})

const User = mongoose.model('User', userSchema);



module.exports = User;