// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0

// function median(num1,num2){
//   console.log(num1.concat(num2))}
// median([1,2],[8,3,4]);

function getmedian(ar1,ar2,n,m){
    var m1 =-1;
    var m2 =-1;
    var count;
    var i = 0,j = 0;
    if((n+m)%2==1){
      for(count = 0; count<=(m+n)/2; count++){
        if(i!=n && j!=m){
          m1 = (ar1[i]>ar2[j]) ? ar2[j++] : ar1[i++];
        }
        else if(i < n){
          m1 = ar1[i++];
        }else{
          m1 = ar2[j++];
        }
      }
      return m1;
    }
    else
    {
      for(count = 0; count<=(m+n)/2;count++){
        m2 = m1;
        if(i != n && j!=m){
          m1 = (ar1[i]>ar2[j] ? ar2[j++] : ar1[i++]);
        }else if(i < n){
          m1 = ar1[i++];
        }else{
          m1 = ar2[j++];
        }
      }
      return (m1+m2)/2;
    }
  }
  
  function main1(){
    var ar1 = [900];
    var ar2 = [5,8,10,20];
    var n1 = ar1.length;
    var n2 = ar2.length;
    console.log(getmedian(ar1,ar2,n1,n2));
  
  }
  main1();