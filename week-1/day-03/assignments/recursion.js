function recursion(array){
    if(array.length == 1){
      return array[0];
    }else{
      var m= array.pop()+recursion(array);
      return m;
    }
  }
  console.log(recursion([1,2,3,4,5]))