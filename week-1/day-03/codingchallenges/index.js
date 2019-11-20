//check palindrome?

function ispalindrome(str){
    var n = str.length;
    for(var i = 0;i<Math.floor(n/2);i++){
      if(str[i] !== str[n-1-i]){
        return str + " " +"is not palindrome";
      }
    }
    return str + " " +"is palindrome";
  }
  console.log(ispalindrome("abadn "));
  console.log(ispalindrome("naman"))
  //---------using es6----------------------------
  function isp(strr){
  const rev = strr.split().reverse().join('');
  if(strr === rev){
    console.log("is palindrome")  ;
  }
  }
  isp("naman")
  //----------------------------------------------
  //  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
  // Example 1:
  // Input: "babad"
  // Output: "bab"
  // Note: "aba" is also a valid answer.
  // Example 2:
  // Input: "cbbd"
  
  class Palindrome {
     constructor(chars){
       this.palindrome = chars;
       this.table = new Object();
       this.longestPalindrome = null;
       this.longestPalindromeLength = 0;
  
       if(!this.isTheStringAPalindrome()){
        this.initialSetupOfTableStructure();
       }
     }
  
     isTheStringAPalindrome(){
       const reverse = [...this.palindrome].reverse().join('');
       if(this.palindrome === reverse){
         this.longestPalindrome = this.palindrome;
         this.longestPalindromeLength = this.palindrome.length;
         console.log('pal is longest', );
         return true;
       }
     }
  
     initialSetupOfTableStructure(){
       for(let i = 0; i < this.palindrome.length; i++){
         for(let k = 0; k < this.palindrome.length; k++){
          this.table[`${i},${k}`] = false;
         }
       }
       this.setIndividualsAsPalindromes();
     }
  
     setIndividualsAsPalindromes(){
      for(let i = 0; i < this.palindrome.length; i++){
        this.table[`${i},${i}`] = true;
      }
      this.setDoubleLettersPlaindrome();
     }
  
     setDoubleLettersPlaindrome(){
       for(let i = 0; i < this.palindrome.length; i++){
         const firstSubstring = this.palindrome.substring(i, i + 1);
         const secondSubstring = this.palindrome.substring(i+1, i + 2);
        if(firstSubstring === secondSubstring){
         this.table[`${i},${i + 1}`] = true;
  
         if(this.longestPalindromeLength < 2){
           this.longestPalindrome = firstSubstring + secondSubstring;
           this.longestPalindromeLength = 2;
         }
        }
       }
       this.setAnyPalindromLengthGreaterThan2();
     }
  
     setAnyPalindromLengthGreaterThan2(){
       for(let k = 3; k <= this.palindrome.length; k++){
        for(let i = 0; i <= this.palindrome.length - k; i++){
          const j = i + k - 1;
          const tableAtIJ = this.table[`${i+1},${j-1}`];
          const stringToCompare = this.palindrome.substring(i, j +1);
          const firstLetterInstringToCompare = stringToCompare[0];
          const lastLetterInstringToCompare = [...stringToCompare].reverse()[0];
          if(tableAtIJ && firstLetterInstringToCompare === lastLetterInstringToCompare){
  
            this.table[`${i},${j}`] = true;
  
            if(this.longestPalindromeLength < stringToCompare.length){
              this.longestPalindrome = stringToCompare;
              this.longestPalindromeLength = stringToCompare.length;
            }
          }
        }
       }
     }
  
     printLongestPalindrome(){
       console.log('Logest Palindrome', this.longestPalindrome);
       console.log('from =', this.palindrome );
     }
  
     toString(){
       console.log('palindrome', this.palindrome);
       console.log(this.table)
     }
   }
  
   // const palindrome = new Palindrome('lollolkidding');
   // const palindrome = new Palindrome('acbaabca');
   const palindrome = new Palindrome('acbaabad');
   palindrome.printLongestPalindrome();
   //palindrome.toString();
  
   