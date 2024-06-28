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

/*

const { config } = require('dotenv');
const mongoose = require('mongoose');
require ('dotenv').config();
//const MONGODBURL_ONLINE = process.env.MONGODBURL_ONLINE;
const MONGODB_OFFLINE = process.env.MONGODB_LOCAL;

//mongoose.connect('mongodb://localhost:27017/hotels');
mongoose.connect(MONGODB_OFFLINE)
//mongoose.connect("mongodb+srv://rrahulrajgiri15:Rahulraj6626@hostel.dmxdk7z.mongodb.net/?retryWrites=true&w=majority&appName=hostel");
//mongoose.connect(MONGODBURL_ONLINE);


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


*/

const mongoose = require('mongoose');
require('dotenv').config();

// Load MongoDB URI from environment variables
const MONGODB_OFFLINE = process.env.MONGODB_LOCAL;
const MONGODB_ONLINE = process.env.MONGODB_URL_ONLINE;

// Use the correct MongoDB URI based on your environment
const mongoURI = process.env.NODE_ENV === 'production' ? MONGODB_ONLINE : MONGODB_OFFLINE;

if (!mongoURI) {
    throw new Error('MongoDB URI is not defined in environment variables');
}

// Set up MongoDB connection
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for the database connection
db.on('connected', () => {
    console.log('MongoDB connected');
});

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;
