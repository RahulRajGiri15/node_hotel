//let and var varible ko normaly use kr sakte h but 
//const -- agr const use kr rhe h tabb jo value ek baar assign kr de humne to wooo wapas se change ny ho sakta h 
// output print krne ke liye console.log() ka use krte h

const PromptSync = require("prompt-sync");

var a =80;
let b=90;
let c=a+b;
console.log(c);
d=c+400;
console.log(d);
const ab="rahul";
console.log(ab);
//ab= "rohit";
console.log(ab);

/////////////////Array//////////////////////


var arr =["rahul", "Arshia", "ram","shyam"];
console.log(arr);
console.log(arr[2]);
arr.push("sita");
console.log(arr);

/////////if else/////////
var age=30;
if(age>18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}
console.log(typeof(age));
//////for loop/////////

for(var i=0;i<5;i++){
    console.log(i);
}
/////////////Object////////////
//add any number of varible in object

const person = {
    name: "rahul",
    age:19,
    hobbies:["read","music"]
};
console.log(person);


//////////function//////////

const age1 = [12.45,67,45,47];
const result =age1.filter(checkage)
function checkage(age1){
    return age1>18;
}
console.log(result);

/////////////INput a number or anything//////////// 
////for taking a input from the user you need---------------    var prompt =require('prompt-sync')();
var prompt =require('prompt-sync')();
const age2 = prompt("Please enter your name or your number ");
if(age2>18){
    console.log("Number is greater than 18 and number is  "+age2);
}
else{
    console.log("less than 18 ")
}

//////////////////////take a name and display it ////////////
var name1=prompt("Enter your name to disaplay in upper case");
//var name2=name1.toUpperCase();
//console.log(name2);
console.log(name1.toUpperCase())

