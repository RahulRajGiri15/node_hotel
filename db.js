/*

const mongoose = require('mongoose');
//Define the mongodb connection URL
const mongoURL ='mongodb://localhost:27017/hotels'//Replace mydatabase with database name

//Set up mongodb connections
mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotels');

///get the default connection
///mongoose maintains a default connection object represting the Mongodb connection
const db=mongoose.connection;

///Define event listeners for database connection

db.on('connected',() => {
    console.log("server is connected");
});
db.on('error',(errr)=>{
    console.log("server is facing some error ",errr);
});
db.on('disconnected', ()=>{
    console.log("server is diconnected");
});

///Exports the database connection 
module.exports =db;

