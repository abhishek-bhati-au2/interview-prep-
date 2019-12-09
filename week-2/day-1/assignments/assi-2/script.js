document.querySelector('.get-dogs').addEventListener('click', getdogs);
function getdogs(e){
    e.preventDefault();
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(result => document.getElementById("get_img").src = result.message);
     //e.preventDefault();
  }