//chaining using public function;

var object = function(){
    this.i = 0 ;
  
    this.add = function(i){
      this.i += i;
      return this;
    }
  
    this.subtract = function(i){
      this.i -= i;
      return this;
    }
     
    this.print = function(){
      console.log(this.i);
    }
  };
  var value = new object();
  value.add(3).subtract(2).print(1);
  
  //chaining using closures
  
  var obj = function(){
    var i = 0;
  
    var add = function(j){
      i += j;
      return this;;
    }
  
    var subtract= function(j){
      i -= j;
      return this;
    }
  
    var print = function(){
      console.log(i)
    }
    return {add:add,subtract:subtract,print:print}
  }
  
  var val = obj();
  val.add(3).subtract(2).print();