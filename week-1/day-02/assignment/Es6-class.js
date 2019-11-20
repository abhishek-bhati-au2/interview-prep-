//-----------es6-class-------------------------------

class animal {
    constructor(familyname,breed){
      this.familyname = familyname;
      this.breed = breed;
    }
  }
  var sayfamilyname = new animal();
  sayfamilyname.breed = "bulldog";
  sayfamilyname.familyname = "dog"
  console.log(sayfamilyname.breed);
  console.log(sayfamilyname.familyname);