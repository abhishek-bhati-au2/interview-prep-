//-------------ForEach,map,reduce,filter--------------

var names = [
    {firstName:"Abhishek",lastName:"singh bhati",eductaion:"12th"},
    {firstName:"Abhi",lastName:"singh bhati",eductaion:"13th"},
    {firstName:"Abhish",lastName:"singh bhati",eductaion:"11th"},
    {firstName:"Abhiram",lastName:"singh bhati",eductaion:"10th"},
    {firstName:"Abhimanyu",lastName:"singh bhati",eductaion:"9th"}
  ]
  for(var i = 0; i<names.length;i++){
    console.log(names[i]);
  }
  
  //forEach takes a call back function which is synchronous
  names.forEach(function(name){
    console.log(name.firstName);
  })
  
  var ages = [21,23,25,27,28,29,56,17,16,18,3,4,5];
  var newAges=[];
  for(var i = 0; i<ages.length;i++ ){
    if(ages[i]>21){
      newAges.push(ages[i]);
    }
  }
  console.log(newAges)
  //now we do the same thing by using filter
  
  const agesnew = ages.filter(function(age){
    if(age > 21){
      return true;
    }
  })
  console.log(agesnew)
  //by using es6
  const newAge = ages.filter(age => age > 21)
  console.log(newAge)
  
  //using map
  var onlyname = names.map(function(nam){
    return nam.firstName;
  
  })
  console.log(onlyname);
  
  //using sort
  
  const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  
  var sortedArray = companies.sort(function(c1,c2){
   if(c1.start > c2.start){
     return 1;
   }else{
     return -1;
   };
  })
  console.log(sortedArray);
  //using es6
  
  // var sortedArray2 = companies.sort((c1,c2) => ( c1.start >  c2.start ? 1 : -1))
  // console.log(sortedArray2)
  
  var sortedAges = ages.sort((a,b)=>a-b);
  console.log(sortedAges)
  
  //reduce
  
  function ageSum(ages){
    var ages = [21,23,25,27,28,29,56,17,16,18,3,4,5];
    var sum = 0;
    for(var i = 0; i<ages.length;i++){
      sum += ages[i];
    }
    return sum;
  }
  console.log(ageSum())
  
  //using reduce
  
  var ageSum2 = ages.reduce(function(total,age){
    return total + age;
  },0);
  console.log(ageSum2);
  //using es6
  
  var ageSum3 = ages.reduce((total,age) => total + age,0);
  console.log(ageSum3);
  