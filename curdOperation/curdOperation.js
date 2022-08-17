document.getElementById("tableID").hidden = true; //form hide
document.getElementById("formId").hidden = false;

var citiesByState = {
  India: ["Telangana", "Karnataka", "Tamilnadu"],
  Usa: ["Vega", "Inidya", "Wasinton dc"],
};

function saveData() {
  debugger
  //Input data collection
  let name = document.getElementById("ffname").value;
  let email = document.getElementById("fename").value;
  let phone = document.getElementById("fphone").value;
  let age = document.getElementById("fdob").value;
  let url = document.getElementById("furl").value;
  let counrty = document.getElementById("fcountrySelect").value;
  let city = document.getElementById("fcitySelect").value;

  //Validation
  let nameRegex = /^[A-z a-z ]{3,20}$/;
  if (name.match(nameRegex)) {
    document.getElementById("errorName").innerHTML = "";
  } 
  else if(name == ""){
    document.getElementById("errorName").innerHTML = "pls provide name";
  }
  else {
    document.getElementById("errorName").innerHTML = "Name is not valid";
    return false;
  }

  let emailRegex = /^[a-zA-Z._0-9]{3,25}@[a-z]{3,10}[.]{1}[a-z.]{3,5}$/;
  if (email.match(emailRegex)) {
    document.getElementById("errorEmail").innerHTML = "";
  } 
  else if(email==""){
    document.getElementById("errorEmail").innerHTML = "pls provide valid";
  }
  else {
    document.getElementById("errorEmail").innerHTML = "Email is not valid";
    return false;
  }

  let phoneRegex = /^[0-9+]{3,13}$/;
  if (phone.match(phoneRegex)) {
    document.getElementById("errorPhone").innerHTML = "";
  } 
  else if(phone==""){
    document.getElementById("errorPhone").innerHTML = "pls provide number ";
  }
  else {
    document.getElementById("errorPhone").innerHTML = "Number is not match ";
    return false;
  }

  let ageRegex = /^[0-9-]{10}$/;
  if (age.match(ageRegex)) {
    document.getElementById("errorBirth").innerHTML = "";
  }
  else if(age==""){
    document.getElementById("errorBirth").innerHTML = "pls provide age";
  }
  else {
    document.getElementById("errorBirth").innerHTML = "Age is not valid";
    return false;
  }

  let urlRegex = /https?:\/\/(a-z\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*$/; 
  if (url.match(urlRegex)) {
    document.getElementById("errorUrl").innerHTML = "";
  }
  else if(url==""){
    document.getElementById("errorUrl").innerHTML = "pls provide url";
  }
  else {
    document.getElementById("errorUrl").innerHTML = "Url is not valid";
    return false;
  }

  if (counrty == "") {
    document.getElementById("errorCountry").innerHTML = "Select Counrty";
  }
  else {
    document.getElementById("errorCountry").innerHTML = "";
  }

  if (city == "") {
    document.getElementById("errorCity").innerHTML = "Select City";
  } 
  else {
    document.getElementById("errorCity").innerHTML = "";
    document.getElementById("tableID").hidden = false;
    document.getElementById("formId").hidden = true;
  }

  let years = new Date(new Date() - new Date(age)).getFullYear() - 1970;

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

  td1.innerHTML = name;
  td2.innerHTML = email;
  td3.innerHTML = phone;
  td4.innerHTML = years;
  td5.innerHTML = url;
  td6.innerHTML = counrty;
  td7.innerHTML = city;
  td8.innerHTML = `<button><a onclick="onEdit(this)">Edit</a></button>
    <button><a onclick="onDelete(this)">Delete</a></button>`;

  document.getElementById("bodyData").appendChild(tr);

  //Form value reset line
  document.formData.reset();
}

function makeSubmenu(value) {
  if (value.length == 0) document.getElementById("fcitySelect").innerHTML;
  else {
    var citiesOptions = "";
    for (cityId in citiesByState[value]) {
      citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
    }
    document.getElementById("fcitySelect").innerHTML = citiesOptions;
  }
}

function onDelete(td) {
  let row = td.parentNode;
  document.getElementById("bodyData").deleteRow(row.rowIndex);
}
