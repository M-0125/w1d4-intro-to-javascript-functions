//function declaration
function testFn() {
  // console.log("----------");
  // console.log("HELLO!");
  // console.log("----------");
}

//function call or function invocation
testFn();


console.log("===================");

//a function with return 
function add(num1, num2){
  const sum = num1 + num2
  
  return sum

  //will not be executed | unreachable code
  console.log({num1, num2})
}

const result = add(3,4);
console.log(result);

console.log("===================");

//callback function
//a function that is passed as an argument to another function
const catSays = function(max){
  let catMessage = "";

  for(let i = 0; i < max; i++){
    catMessage += "meow";
  }

  return catMessage
}

// const tempCall = catSays;
// console.log(tempCall(2))

function doSomething(cb){
  //check the value of cb (parameter)
  console.log('callback -->',cb)
  //check the type of cb (parameter)
  console.log(typeof cb)

  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....
  //i might do a lot of things here....

  //invoke the callback function
  console.log(cb(5));
}

doSomething(catSays)

console.log("===================");

//inline function
//a function that is defined in another function

// console.log(tempCall())

function doSomething2(callback){
  console.log("Inline Function", callback(3))
}

doSomething2(function(max){
  let catMessage = "";

  for(let i = 0; i < max; i++){
    catMessage += "meow";
  }

  return catMessage
})

//DRY - Dont repeat yourself


console.log("===================");

//Hoisting
/*
  In JS, it's a behaviour where a variable and function declaration
  are moved to the top of their respective scope (during compilation time/phase).
*/

console.log(firstName);
var firstName = "hoge";

//what's happening behind the scenes of above statement
// var firstName; //declaration is hoisted
// console.log(firstName); //undefined
// firstName = "hoge"; //assignment stays in place


console.log(hoistMe());
function hoistMe(){
  return "I'm hoisted"
}

//This throws an error
// console.log(hoistMeExp());
// const hoistMeExp = function(){
//   return "I'm hoisted"
// }


console.log("===================");

//Shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope.

let y = 1;
console.log("before func:", y)
function nonShadowing(){
  y = y + 1
}
nonShadowing()
console.log("after func:", y)



let z = 1;
console.log("before shadow fun:", z)
function shadowing(){
  let z = 2;
  z = z + 1;
}
shadowing();
console.log("after shadow fun:", z)