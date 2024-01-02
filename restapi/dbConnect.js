const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Userdb')
.then(()=>{
    console.log("database is connnected");
})
.catch((error)=>{
    console.log(error);
});