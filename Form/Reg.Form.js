// function countSet(){
//   const countryName =['us',[
//     //   ['', 'State/Province'],
//     //   ['AL', 'Alabama'],
//     //   ['AK', 'Alaska'],
//     //   ['AZ', 'Arizona'],
//     //   ['AR', 'Arkansas'],
//     // ],]
//   let countrysList = document.getElementById('country');
//   for (let i = 0; i<3; i++) {
//     let lists = countryName[i];
//     let selectOption = document.createElement('option');
//     selectOption.textContent = lists;
//     countrysList.appendChild(selectOption);
//   } 
// }
// countSet();

function formSaveData() {
  let fname = document.getElementById("dfname").value;
  let lname = document.getElementById("dlname").value;
  let age = document.getElementById("dage").value;
  let gender = document.getElementsByName("gender");
  let address = document.getElementById("address").value;

  let result = (age >= 18) ? 'True' : 'False';

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked)
      console.log(gender[i].value);
  }
  // countSet();
  displaySelected();
  console.log(fname, lname, result, age,address);

  document.getElementById('fnames').innerHTML= fname;
  document.getElementById('lnames').innerHTML= lname;
  document.getElementById('age').innerHTML= age;
  document.getElementById('gen').innerHTML= gender;
  document.getElementById('addr').innerHTML= address;
  document.getElementById('boolean').innerHTML= result;
}

var citiesByState = {
  India: ["Telangana", "Karnataka", "Tamilnadu"],
  Usa: ["Vega", "Inidya", "Wasinton dc"],
}
function makeSubmenu(value) {
  if (value.length == 0) document.getElementById("citySelect").innerHTML;
  else {
    var citiesOptions = "";
    for (cityId in citiesByState[value]) {
      citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
  }
}
function displaySelected() {
  var country = document.getElementById("countrySelect").value;
  var city = document.getElementById("citySelect").value;
  console.log(country + "\n" + city);
  document.getElementById('ctrys').innerHTML=country;
  document.getElementById('citys').innerHTML=city;

}
