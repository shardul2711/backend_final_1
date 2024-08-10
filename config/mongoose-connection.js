const mongoose = require("mongoose");
// const dbgr = require("debug")("development:mongoose");

mongoose
    .connect("mongodb://localhost:27017/sketch1")
    .then(function(){
        console.log("connected");
    })
    .catch(function(err){
        console.log(err);
    });

module.exports = mongoose.connection;