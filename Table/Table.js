let mainObj = [
  { name: "Akshay", age: "22", phone: "7852582470", courses: "Javascript" },
  { name: "Rohan", age: "19", phone: "7893930210", courses: "Javascript" },
  { name: "Naidu", age: "27", phone: "7900058247", courses: "Javascript" },
];
const tableData = mainObj
  .map(function (value) {
    return `<tr id ="1name">
<td >${value.name}</td>
<td>${value.age}</td>
<td>${value.phone}</td>
<td>${value.courses}</td>
</tr>`;
  })
  .join("");
document.getElementById("idTable").innerHTML = tableData;

document.getElementById("Hide_Show").hidden = true;
function inputCheck() {
  let checkedValue = document.getElementById("checked").value;
  for (let i = 0; i < mainObj.length; i) {
    if (checkedValue === mainObj[i].name) {
      document.getElementById("turechecked").value = checkedValue;
      document.getElementById("Hide_Show").hidden = false;
    } else {
      document.getElementById("invalid").value = "** Invalid";
    }
  }
}

function slice() {
  let renameValue = document.getElementById("checked2").value;
  for (i = 0; i < mainObj.length; i++) {
    if (renameValue === mainObj[i].name) {
      document.getElementById("1name").remove([renameValue]);
    }
  }
}

function updateFun() {
  let oneValue = document.getElementById("checked").value;
  let renameValue = document.getElementById("turechecked").value;
  for (var i = 0; i < mainObj.length; i++) {
    if (oneValue == mainObj[i].name) {
      let holdValue = (mainObj[i].FirstName = renameValue);
      let h = (document.getElementById("demo3").value = holdValue);
      document.getElementById("row2").innerHTML = h;
    }
  }
}
