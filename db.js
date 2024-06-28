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
require('dotenv').config();
const MONGODBURL_ONLINE = process.env.MONGODBURL_ONLINE_DATA;
//const MONGODB_OFFLINE = process.env.MONGODB_LOCAL;

//mongoose.connect('mongodb://localhost:27017/hotels');
//mongoose.connect("mongodb+srv://hoteluser:india6626@hotel.v1gh4on.mongodb.net/?retryWrites=true&w=majority&appName=hotel");

//mongoose.connect(MONGODB_OFFLINE)
mongoose.connect(MONGODBURL_ONLINE);


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


