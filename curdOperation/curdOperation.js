document.getElementById("tableID").hidden = true;
function saveData() {
  //Input data collection
  let name = document.getElementById("ffname").value;
  let email = document.getElementById("fename").value;
  let phone = document.getElementById("fphone").value;
  let dob = document.getElementById("fdob").value;
  let url = document.getElementById("furl").value;
  let counrty = document.getElementById("fcountry").value;
  let city = document.getElementById("fcity").value;
  console.log(name, email, phone, dob, url, counrty, city);
  document.getElementById("tableID").hidden = false;
  //Validation for input field
  if (name == "") {
    document.getElementById("errorName").innerHTML = "pls provide name";
  }
  if (email == "") {
    document.getElementById("errorEmail").innerHTML = "pls provide email";
  }
  if (phone == "") {
    document.getElementById("errorPhone").innerHTML = "pls provide phone";
  } 
  if (dob == "") {
    document.getElementById("errorBirth").innerHTML = "pls provide birth";
  }
  if (url == "") {
    document.getElementById("errorUrl").innerHTML = "pls provide url";
  } 
  if (counrty == "") {
    document.getElementById("errorCountry").innerHTML = "pls provide country";
  } 
  if (city == "") {
    document.getElementById("errorCity").innerHTML = "pls provide city";
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
  

  td1.innerHTML = name;
  td2.innerHTML = email;
  td3.innerHTML = phone;
  td4.innerHTML = dob;
  td5.innerHTML = url;
  td6.innerHTML = counrty;
  td7.innerHTML = city;
  document.getElementById("bodyData").appendChild(tr);
  document.formData.reset();
}
