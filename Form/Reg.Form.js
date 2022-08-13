function formSaveData() {
  
  //Retreving the values
  let fname = document.getElementById("dfname").value;
  let lname = document.getElementById("dlname").value;
  let age = document.getElementById("dage").value;
  let result = age >= 18 ? "True" : "False";
  let address = document.getElementById("address").value;
  let  country = document.getElementById("countrySelect").value;
  let city = document.getElementById("citySelect").value;

  //Validation
  let errorLName = document.getElementById("errorLName");
  if (fname == ''){
    document.getElementById("errorFName").innerHTML = "pls provide Firstname";    
    return false;
  }

  if (lname == "") {
    document.getElementById("errorLName").innerHTML = "pls provide Lastname";
    return false;
  }
  if (age == "") {
    document.getElementById("errorAge").innerHTML = "pls provide your age";
    return false;
  }
  if (address == "") {
    document.getElementById("errorAddress").innerHTML ="pls provide your address";
    return false;
  }
  if(result == ''){
    document.getElementById('errorRadio').innerHTML= '** pls select any one';
    return false;
  }
  if (country == "") {
    document.getElementById("errorCountry").innerHTML ="pls provide your address";
    return false;
  }
  if (city == "") {
    document.getElementById("errorCity").innerHTML ="pls provide your address";
    return false;
  }
      
  let gender = document.getElementsByName("gender");
  
  let txt = '';
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked==true) {
      txt= gender[i].value;
    }  
    
  }
 if(txt == '')
    {
      document.getElementById("errorRadio").innerHTML ="pls select any one";
      return false;
    } 
 
  
//data binding to Table 
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
  document.FormData.reset(); 
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
