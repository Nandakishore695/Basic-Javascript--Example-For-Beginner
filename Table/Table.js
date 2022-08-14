function valueBinding() {
  let value1 = document.getElementById("boxValue1").value;
  let value2 = document.getElementById("boxValue2").value;

  if (value1 == "" || value2 == "") {
    window.alert("please Enter value");
  }  

  //adding two value
  if (value1 >= 0 || value2 <= 10000) {
    let sum = parseFloat(value1) + parseFloat(value2);
    document.getElementById("result").value = sum;
  } else if (value1 >= -0 || value2 >= -100000) {
    let sum = parseFloat(value1) - parseFloat(value2);
    document.getElementById("result").value = sum;
  }
  else {
    let concatValue = value1.toString(value2);
    document.getElementById("result").value = String("" + concatValue);
  }
}
function valueToFixed() {
  document.getElementById("result1").value = '';
    let value1 = parseFloat(document.getElementById("oneFixed").value);
    let value2 = parseFloat(document.getElementById("twoFixed").value);
    if (value1 == "" || value2 == "") {
      document.getElementById("error").innerHTML = "invalid";
    }
    let fixedValue = value1.toFixed(value2);
    document.getElementById("result1").value = fixedValue;
}
//Table Creating 
let manObj = [{name:"Naidu",age:25},{name:"pickBro",age:25}];
const tableData = manObj.map(function(value){
  return `<tr>
      <td>${value.name}</td>
      <td>${value.age}</td>
  </tr>`
}).join("");
document.getElementById('tableId').innerHTML =tableData;


document.getElementById('hidden/show').hidden=true;
let indexPosition = null;

//Name checking function 
function checkFun(){
  let vauleGet = document.getElementById('valueGet').value;
  if(vauleGet){
    let listdata =manObj.filter(function(value,index){
      if(value.name == vauleGet){
        indexPosition = index;
        return value;  
      }      
    })[0];
    console.log(listdata);
    console.log(indexPosition);
    document.getElementById('errorCheck').innerHTML = "";
    document.getElementById('hidden/show').hidden=false;  
  }
  else{
    document.getElementById('errorCheck').innerHTML = "Pls select one";
  }
}

//Delete particular cello 
function spliceFun(){
  let vauleGet = document.getElementById('valueGet').value;
  if(vauleGet){
    manObj.splice(indexPosition,1)
    const tableData = manObj.map(function(value){
      return `<tr>
          <td>${value.name}</td>
          <td>${value.age}</td>
      </tr>`
    }).join("");
    document.getElementById('tableId').innerHTML =tableData;
    document.getElementById('hidden/show').hidden=true;
  }
  else{
    document.getElementById('errorCheck').innerHTML = "sorry";
    }
}

//Update particular cello 
function updateinput(){
  let vauleGet = document.getElementById('updatein').value;
  if(vauleGet){
    manObj[indexPosition].name = vauleGet;
    const tableData = manObj.map(function(value){
      return `<tr>
          <td>${value.name}</td>
          <td>${value.age}</td>
      </tr>`
    }).join("");
    document.getElementById('tableId').innerHTML =tableData;
    document.getElementById('hidden/show').hidden=true;
  }
  else{
    document.getElementById('errorCheck').innerHTML = "not update";
  }
}
