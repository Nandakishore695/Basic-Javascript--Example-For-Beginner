function formSaveData() {

  let fname = document.getElementById("dfname").value;
  if (fname == "") {
    document.getElementById("errorFName").innerHTML = "pls provide Firstname";
  }
  let lname = document.getElementById("dlname").value;
  if (lname == "") {
    document.getElementById("errorLName").innerHTML = "pls provide Lastname";
  }
  let age = document.getElementById("dage").value;
  if (age == "") {
    document.getElementById("errorAge").innerHTML = "pls provide your age";
  }
  
  let address = document.getElementById("address").value;
  if (address == "") {
    document.getElementById("errorAddress").innerHTML =
      "pls provide your address";
  }
  let result = age >= 18 ? "True" : "False";

  let gender = document.getElementsByName("gender");
  let txt = '';
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked==true) {
      txt= gender[i].value;
    }
    else if(gender == ''){
      document.getElementById('errorRadio').innerHTML= '** pls select any one';
    }    
  }
  console.log(fname, lname, result, age, address,txt);

  let  country = document.getElementById("countrySelect").value;
  let city = document.getElementById("citySelect").value;
  let tr = document.createElement("tr");
  let td1 = tr.appendChild(document.createElement("td"));
  let td2 = tr.appendChild(document.createElement("td"));
  let td3 = tr.appendChild(document.createElement("td"));
  let td4 = tr.appendChild(document.createElement("td"));
  let td5 = tr.appendChild(document.createElement("td"));
  let td6 = tr.appendChild(document.createElement("td"));
  let td7 = tr.appendChild(document.createElement("td"));
  let td8 = tr.appendChild(document.createElement("td"));

  td1.innerHTML = fname;
  td2.innerHTML = lname;
  td3.innerHTML = age;
  td4.innerHTML = txt;
  td5.innerHTML= country;
  td6.innerHTML= city;
  td7.innerHTML = address;
  td8.innerHTML = result;
  document.getElementById("tab").appendChild(tr);
}

var citiesByState = {
  India: ["Telangana", "Karnataka", "Tamilnadu"],
  Usa: ["Vega", "Inidya", "Wasinton dc"],
};
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
