//without using currying
function sayHello(greeting,name){
    return greeting + " "+ name;
  }
  console.log("Hi","A-bhi")
  
  //with using currying
  function sayHi(greeting){
    return function(name){
      return greeting + " "+ name;
    }
  }
  console.log(sayHi("Hello")("AttainU"));
  var sayHi2 = sayHi("hello");
  console.log(sayHi2("Bhanu"));
  //this is called clousers