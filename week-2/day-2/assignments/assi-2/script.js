let arr=[];
for(let i=1;i<=100;i++){
    arr.push(i)
}
// console.log(arr)
localStorage.setItem("Array",JSON.stringify(arr));
// console.log(localStorage.getItem("Array"))
document.querySelector('.myFunction').addEventListener('click', myFunction);
function myFunction() {
    let arr=JSON.parse(localStorage.getItem("Array"));
     console.log(arr)
    for(let i=0;i<arr.length;i++){
  //alert(` ${arr[i]}`)
  var node = document.createElement("li");
  var textnode = document.createTextNode(arr[i]);
  node.appendChild(textnode);
  document.getElementById("List").appendChild(node);
}
}