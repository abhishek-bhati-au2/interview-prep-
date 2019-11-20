//---------------------weakset------------
var carWeakSet = new WeakSet();
var car ={
 make : 'Honda',
 modal: 'civic'
}
carWeakSet.add(car);
console.log(carWeakSet);