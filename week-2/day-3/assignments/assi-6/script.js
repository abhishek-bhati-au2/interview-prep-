$(document).ready(function() { 
    $("#but").click(function() { 
        if ($("#inp").is( 
          ":checked")) { 
            alert("Check box in Checked"); 
        } else { 
            alert("Check box is Unchecked"); 
        } 
    }); 
}); 