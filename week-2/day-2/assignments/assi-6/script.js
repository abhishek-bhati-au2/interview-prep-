var stateslist=[{"state":"Andhra Pradesh","capital":"Amaravati"},{"state":"Arunachal Pradesh","capital":"itanagar"},{"state":"Assam","capital":"Dispur"},{"state":"Bihar","capital":"Patna"},{"state":"Chhattisgarh","capital":"Raipur"},{"state":"Goa","capital":"Panaji"},{"state":"Gujarat","capital":"Gandhinagar"},{"state":"Haryana","capital":"Chandigarh"},{"state":"Himachal pradesh","capital":"Shimla"},{"state":"Telangana","capital":"Hyderabad"},{"state":"Kerala","capital":"Thiruvananthapuram"},{"state":"Tamil Nadu","capital":"Chennai"},{"state":"Karnataka","capital":"Bengaluru"},{"state":"Jharkhand","capital":"Ranchi"},{"state":"Madhya Pradesh","capital":"Bhopal"},{"state":"Maharastra","capital":"Mumbai"},{"state":"Meghalaya","capital":"Shillong"},{"state":"Manipur","capital":"Imphal"},{"state":"Nagaland","capital":"Kohima"},{"state":"Mizoram","capital":"Aizawl"},{"state":"Odisha","capital":"Bhubaneswar"},{"state":"Rajasthan","capital":"Jaipur"},{"state":"Punjab","capital":"Chandigarh"},{"state":"Uttar pradesh","capital":"Lucknow"},{"state":"West Bengal","capital":"Kolkata"},{"state":"Tripura","capital":"Agartala"},{"state":"Sikkim","capital":"Gangtok"},
{"state":"Uttarakhand","capital":"Dehradun"}];


var template = document.getElementById('templaterow');
    
for(let i=0;i<stateslist.length;i++){
  var tbody = document.querySelector("tbody");
    var clone = document.importNode(template.content, true);
    var td = clone.querySelectorAll("td");
    td[0].textContent = i+1;
    td[1].textContent = stateslist[i].state;
    td[2].textContent = stateslist[i].capital;

    tbody.appendChild(clone);
}

