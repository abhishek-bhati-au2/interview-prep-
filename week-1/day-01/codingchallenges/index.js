//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// Examples:

// twoSum([2, 7, 11, 15], 9);  // Should return [0, 1] as the values at indices add upto 9

function Twosum(array,result){
    var res = [], m =[]
        for(var i = 0; i<array.length; i++){
          for(var j = i+1; j<array.length; j++){
            if(array[i]+array[j] == result){
              //res = i +"," +j;
              m.push(i,j);
            }
          }
        }
        return m;
  }
   console.log(Twosum([2, 7, 11, 15],18));