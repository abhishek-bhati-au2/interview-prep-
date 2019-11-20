// closure gives you access to the outer function scope from inner function

function name(){
    var nam = "Abhishe singh bhati";
    function say(){
      console.log(nam);
    }
    say();
  }
  name();
  