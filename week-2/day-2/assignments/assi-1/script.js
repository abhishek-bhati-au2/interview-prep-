//document.querySelector('.get-cities').addEventListener('click', getcities);
// function getcities(){
//   fetch("https://restcountries.eu/rest/v2/all")
// .then(response => response.json())
// .then(cities => document.getElementById("main").innerHTML= getPika(cities));
// }

 
// const getPika = (cities) => {
//   const names = cities
//     .map((city) => `<li>${city.name}</li>`)
//     .join("\n");

//   return `<ul>${names}</ul>`;
// };

document.querySelector('.get-cities').addEventListener('click', getcities);
function getcities(){
  const xhr = new XMLHttpRequest();
  xhr.open("get","https://restcountries.eu/rest/v2/all",true);
  xhr.onload = function() {
              if (this.readyState == 4 && this.status == 200) {
                let cities =JSON.parse(this.responseText);
            console.log(cities);
           document.getElementById("main").innerHTML = getPika(cities);
            }else{
              alert(`Error : ${xhr.status}`)
            }
              }
   xhr.send();

}
const getPika = (cities) => {
  const names = cities
    .map((city) => `<li>${city.name}</li>`)
    .join("\n");

  return `<ul>${names}</ul>`;
};