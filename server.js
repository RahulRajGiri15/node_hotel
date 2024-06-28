//package.json-----in this you have only nessarary details 
//package-lock.json-------in this you have all the details 

// console.log("Server is running");


//////Function
///1st way to decalre a function

// function add(a,b){
//     return a*b;
// }
// var result = add(7,6);
// console.log(result);


///2nd way to decalre a function 

// var add=function(a,b){
//     return a*b
// }
// var result = add(7,6);
// console.log(result);


//// 3rd way to decalre a function //////////

//var add = (a,b) => {return a+b;}
// var result = add(7,6);
// console.log(result);


/////4th way to decalre a function///////////
// var add =(a,b) => a+b;
// var result = add(7,6);
// console.log(result);
// //
//////5th way to write a funtion 

///also a function is something which is written as fun() thats it
//(function(){console.log("rahul")})();

//////callback function////////////
////callback function -- it is type of function which excute  a another function is completed and call for it
//callbackfunction ----  a function called inside another function 

/*
function callback(){
    console.log("your work is Done call back executed");
}
var add4 = function(a ,b ,callback){
    result =a+b;
    console.log(result);//main function work complete
    callback();
}
add4(11,22,callback);
*/

/*
var add5=function(a,b,rahul){
    result =a+b;
    console.log(result);//main function work complete
    rahul(); //callback function
}
//add5(3,8,function(){console.log("this is rahul")});
//or//
add5(5,6, ()=>console.log("this is rahul"));

*/

/*

///npm i prompt-sync
var prompt =require("prompt-sync")();
var a =prompt("Enter your first name: ");
const b =prompt("Enter your second name: ");

var display1=function(n , m , calfun){
    console.log("Your name is "+n);
    console.log("Secondly your is  "+m);
    calfun();
}
display1(a,b, ()=>console.log("Your  Entered name  is displayed above"));

*/


/*

/////////////fs and os //////////////
///fs ---fs is used to read write a file 
///os ---os is used to know about the system information and system settings
var fs =require('fs');
var os = require('os');

var user=os.userInfo();
console.log(user);
console.log(user.username);
//appendFile --path,data,callbackfuntion
fs.appendFile("Greeting.txt","Hi "+user.username+"\n",()=>{console.log("this is callback funtion")});

console.log(os);//tells you all about os function
console.log(fs);//tells you all about fs function


*/

/*
///How to import a another js file into different os file

var notes =require('./notes.js');
console.log(notes);

var age = notes.age;
console.log(age);

var result=notes.addnumber(age+49,10);
console.log(result);
*/

/*
/////Now be will be using lodash function 
/////lodash function----this funtion is used to deal with data (lodash has large number of function avaliable through which we can maniplate the data )
var _ = require('lodash');
var data =["rahul",2,5,6,6,"rohit","tiger"];

const result= _.uniq(data);
const filter=_.clone(data);

console.log(" all the unique data "+result);
console.log("Clone of data is "+ filter);
console.log(_.isString('rahul'));
console.log(_.isString(true));//as true is boolean so answer is false


*/

/*

//////////JSON---javascriptobjectnotation------this is used to translate server data to client and make it so that client can understand it
/////////JSON--- deta in json is in string format 
///Here convert json (string) into object
var jsonString='{"name":"Rahul", "age":34, "city" : "Ranchi"}';
var jsonObject=JSON.parse(jsonString);//here string is converted into object
console.log(jsonObject);
console.log(jsonObject.age);
console.log(typeof(jsonObject))
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
// console.log(jsonObject.name); // Output: John

*/

/*
////Here convert object to string /////

const objectToConvert ={"Name":"Rahul","age":45,"City":"Ranchi"};
const jsonStringified =JSON.stringify(objectToConvert);//here object is tranferrd into string
console.log(jsonStringified);
console.log(typeof(jsonStringified));

*/

/*
//////server-----this is responsibe for communcating with the client and the database(waiter )
/////api--all the thing defined which server can do(menu card)---collection of list 
////endpoint -----all the list of function i.e a server can do or it can perform(all the list in api)(all the different type of food in the menu)

///How a demo is installed in express

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

*/
/*
app.get('/chiken',function(req,res){
    res.send("here you will chiken as per you ordered")
})
app.get('/idli',(req,res)=>{ //////req---request  ////res---response
    
    res.send("you will get your idli as per orederd");
})
app.post('/person',(req,res)=>{
    
})
app.post('/items',(req,res)=>{
    res.send("this is your items block")
})
app.get('/panner',(req,res)=>{
    var panner_required={
        name:"panner tikka",
        color:"red and yellow",
        size:"23 cm diameter",
        is_chutney:true,
        is_roti:false
    }
    res.send(panner_required)
})

*/




///get-----it is used in server to basically revtive the information

const express = require('express')
const app = express()
const db = require('./db.js');
require('dotenv').config();///using .env to hide sensitive information
///Here we are using body parser ----whose basic function is to extract usefull information from the data and send it to req.dody

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000  ////this is used to use PORT provided by local environment 

///using .env to hide sensitive information
require('dotenv').config();

///import person model

//const menu = require('./models/menu.js');  
//const MenuItem = require('./models/menu.js');  we are already uing them in router files 

app.get('/',function(req,res){
    res.send("hello this is my first server response");
})

///POST route to add a person



////Importing router files ////and using them 
const personRoutes = require('./routes/personRoutes.js');
app.use('/person',personRoutes);

const menuRoutes = require("./routes/menuRoutes.js");
app.use('/menu',menuRoutes);/////here /menu is written do we don't have to define it any where other

app.listen(PORT, ( )=>{
    console.log("listening to port 3000 ");
})

