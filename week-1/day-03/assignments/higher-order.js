//functional programing?

var name = "A-bhi";
var greet = "Hi ";
console.log(greet + " "+ name);
//this is the imperative way of writing program in js.

function gret(name){
  return "Hi" +" " +name;
}
console.log(gret("Abhi"));
//this is the simple example of functional programing and this is also the pure function because it takes input and returns output in this example it takes name as input .

var name = "A-bhi";
function greeet(){
  return "Hi"+" "+ name;
}
console.log(greeet());
//this is impure function because here it does not take name as input here it take the value of name which is defined globally.

// Higher order functions are function inside the function or you can say that higher order functions are those functions which took function as an input and return function as an output.You passed function as parameters to other function and also return them as values.For example-

function makeAdjectivefire(adjective){
  return function (string){
    return adjective + " "+ string;
  }
}
var value = makeAdjectivefire("cool");
console.log(value("lecture"))

//In functional programing avoid iteration like for loop, while loop instead of them we use map, reduce and filter.

//In functional programming we avoid mutability.We prefers immutable data.For eg;-

var rooms = ["h1","h2","h3"];
console.log(rooms);
rooms[2] = "h4";
console.log(rooms);
//now we can clearly see that it is mutable data.so we write in functional programming like that-->

var rooms = ["h1","h2","h3"];
var newRooms = rooms.map(function(rm){
  if(rm == "h3"){return "h4";}
  else{return rm;}
});
console.log(newRooms);
console.log(rooms);