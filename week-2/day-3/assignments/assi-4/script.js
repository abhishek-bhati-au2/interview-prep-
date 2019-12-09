$('#button1').click(function(){ 

    var elementCount = $( "#iddiv" ).find( "*" ).length;
  
    $( "body" ).append( "" + elementCount + " element(s) found" );
  });