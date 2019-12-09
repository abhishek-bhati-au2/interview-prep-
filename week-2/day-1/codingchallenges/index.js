// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

function startingAndendingpos(n){
    var num = [5,7,8,8,10,8];
    var first = -1,last=-1;
    for(var i = 0; i<num.length; i++){
      if(n != num[i])
        continue;
        if (first == -1) 
              first = i; 
               last = i; 
      
    }
    if (first != -1)
   return [first,last];
   else
   return [-1,-1]
  }
  console.log(startingAndendingpos(8));
  
  //better approach
  
  function start(num,low,high,n,leng){

    if(high >= low){
      var mid = low + (high - low)/2;
     // console.log(mid);
    if( ( mid == 0 || n > num[mid-1]) && num[mid] == n) 
              return mid; 
          else if(n > num[mid]) 
              return start(num, (mid + 1), high, n, leng); 
          else
              return start(num, low, (mid -1), n, leng); 
    }
    return -1;
  }
  
  function end(num,low,high,n,leng){
    
    if(high>=low){
      var mid = low + (high -low)/2;
      if (( mid == leng-1 || n < num[mid+1]) && num[mid] == n) 
              return mid; 
          else if (n < num[mid]) 
              return end(num, low, (mid -1), n, leng); 
          else
              return end(num, (mid + 1), high, n, leng); 
    }
    return -1;
  }
  function main(){
    var num =  [1, 2, 3, 4, 7, 8, 8]; 
    var n = 8;
    var leng = num.length;
    var low = 0;
    var high = leng-1;
    console.log([start(num,low,high,n,leng),end(num,low,high,n,leng)]);
   
   }
  main();
  
  