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

