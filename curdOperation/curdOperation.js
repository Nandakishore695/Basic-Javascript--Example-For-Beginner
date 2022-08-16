document.getElementById("tableID").hidden = true; //form hide
document.getElementById("formId").hidden = false;
var citiesByState = {
  India: ["Telangana", "Karnataka", "Tamilnadu"],
  Usa: ["Vega", "Inidya", "Wasinton dc"],
};

let selectedRow = null;

function saveData() {
  //Input data collection
  let name = document.getElementById("ffname").value;
  let email = document.getElementById("fename").value;
  let phone = document.getElementById("fphone").value;
  let age = document.getElementById("fdob").value;
  let url = document.getElementById("furl").value;
  let counrty = document.getElementById("fcountrySelect").value;
  let city = document.getElementById("fcitySelect").value;

  //Validation

  if (name =="") {
    document.getElementById("errorName").innerHTML = "Name is not correct";
  }
  if (email == "") {
    document.getElementById("errorEmail").innerHTML = "Email is not valid";
  }
  if (phone == "") {
    document.getElementById("errorPhone").innerHTML = "Phone is not valid";
  }
  if (age == "") {
    document.getElementById("errorBirth").innerHTML = "Birth is not valid";
  }
  
  if (url == "") {
    document.getElementById("errorUrl").innerHTML = "Url is not valid";
  }
  if (counrty == "") {
    document.getElementById("errorCountry").innerHTML = "Country is not valid";
  }
  if(city == "") {
    document.getElementById("errorCity").innerHTML = "City is not valid";
  } 
  else {
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

function onEdit(td) {
    document.getElementById("formId").hidden = false;
  let row = td.parentElement.parentElement;
  document.getElementById("ffname").value = row.cells[0].innerHTML;
  document.getElementById("fename").value = row.cells[1].innerHTML;
  document.getElementById("fphone").value = row.cells[2].innerHTML;
  document.getElementById("fdob").value = row.cells[3].innerHTML;
  document.getElementById("furl").value = row.cells[4].innerHTML;
  document.getElementById("fcountrySelect").value = row.cells[5].innerHTML;
  document.getElementById("fcitySelect").value = row.cells[6].innerHTML;  
}
function updateRecord(formData) {
  row.cells[0].innerHTML = formData.name;
  row.cells[1].innerHTML = formData.email;
  row.cells[2].innerHTML = formData.phone;
  row.cells[3].innerHTML = formData.dob;
  row.cells[4].innerHTML = formData.url;
  row.cells[5].innerHTML = formData.counrty;
  row.cells[6].innerHTML = formData.city;
}

function onDelete(td) {
  let row = td.parentElement.parentElement;
  document.getElementById("bodyData").deleteRow(row.rowIndex);
}
