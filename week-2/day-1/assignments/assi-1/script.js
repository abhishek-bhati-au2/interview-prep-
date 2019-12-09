document.querySelector('.get-dogs').addEventListener('click', getdogs);

function getdogs(e) {
   const xhr = new XMLHttpRequest();

    xhr.open('GET',
      `https://dog.ceo/api/breeds/image/random`,true);

    xhr.onload = function() {
             if (this.readyState == 4 && this.status == 200) {
            let obj=JSON.parse(this.responseText);
            console.log(obj.message);
           document.getElementById("get_img").src = obj.message;
            }else{
              alert(`Error : ${xhr.status}`)
            }
    }

    xhr.send();
      e.preventDefault();
}