$(document).ready(function(){
    $("button").click(function(){
      $.ajax({url: "https://dog.ceo/api/breeds/image/random", success: function(result){
          console.log(result.message)
        $("#get_img").attr("src",result.message);
      }});
    });
  });