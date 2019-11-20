//---------apply,bind,call---------------------------

var objj = {num1:2,num2:3};

var add = function(a,b,c){
  return this.num1+a+b+c;
}
console.log(add.call(objj,1,2,3))

//apply is exact same as call but here we put all the values of variable in an array
var sum=[1,2,3];
var add2 = function(a,b,c){
  return this.num1+a+b+c;
}
console.log(add2.apply(objj,sum));

//bind
var add3 = function(a,b,c){
  return this.num2+a+b+c;
}
var bound = add3.bind(objj);
console.log(bound(1,2,3))