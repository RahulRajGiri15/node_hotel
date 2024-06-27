/*
///lets revise all the basic conceptes like-- functions , json ,
var prompt = require ('prompt-sync')();
var a = parseInt(prompt("Enter a number: "));
var b = parseFloat(prompt("Enter second number: "));
console.log(a);
console.log(b);


// const add=function(a,b,callback){
//     console.log(a+b);
//     callback();

// }

// function add(a,b,callback){
//     callback();
//     return a+b;   
// }

// var add = (a,b,callback)=>{return a+b }
var result=add(a,b,()=>{console.log("result is shown above ")})
console.log(result)

*/

/*
var fs =require('fs');
var os =require('os');

var user =os.userInfo();
// console.log(user);
// console.log(user.username);
// var user2=os.userInfo();
// console.log(user2);
///fs is used to read write in the file
fs.appendFile('Greeting.txt',"Hello ,How are you "+user.username +"\n", ()=>{console.log("it's so nice to meet you ")});

*/
/*
var notes= require('./notes')
console.log(notes.age);
console.log(notes.add(5,6));
*/

/*
var _ =require('lodash');
var data=[1,2,4,1,2,"rahul","ram"];
//const reuniq=_.uniq(data);
console.log("all the unique data is "+ _.uniq(data));
console.log("all clone data is "+_.clone(data));
console.log(_.isString(data));
*/

/*
/////when server sends back information than it is in string form than later it is converted into object
const jsonstring='{"ram":1,"rohit":2,"rahul":3}';
const jsonobject={"ram":1,"rohit":2,"rahul":3};
var convertjsonobject= JSON.parse(jsonstring);
console.log(convertjsonobject)
var convertjsonstring=JSON.stringify(jsonobject);
console.log(convertjsonstring);


all our reviosn is complete 
*/