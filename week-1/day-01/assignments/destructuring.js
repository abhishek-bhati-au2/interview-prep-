//------------------destructuring------------
//destructuring of an array
let arr = ["Ilya", "Kantor"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); //Ilya
console.log(surname); //Kantor

//destructuring by using es6 
const head = [1,2,3,4];
const [h1,h2,h3]=head;
console.log(`${h1},${h2},${h3}`);

//destructuring of an object

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200