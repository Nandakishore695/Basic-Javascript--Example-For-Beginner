const employes = [{ id: 1, name: "NandaKishore", email: "nandakishore@gmail.com", gender: "male", mobile: '7893797371', },
{ id: 2, name: "Upender", email: "upendere@gmail.com", gender: "male", mobile: '990894535', },
{ id: 3, name: "Ajay", email: "ajay@gmail.com", gender: "male", mobile: '880894535', }
];

let redcordSelected = [];
function renderEmployesList(emp) {
    const listOfRow = `<tr>
    <td><input type="checkbox" id="${emp.id}"/></td>
    <td>${emp.name}</td>
    <td>${emp.email}</td>
    <td>${emp.gender}</td>
    <td>${emp.mobile}</td>
    </tr>`
    return listOfRow;
}

function tableListData() {
    redcordSelected = [];
    let tbody = document.querySelector("#tbStudents");
    tbody.innerHTML = ""
    employes.forEach(function (para) {
        tbody.innerHTML += renderEmployesList(para)
    })
    tbody.querySelectorAll("input").forEach(function (checkList) {
        checkList.addEventListener("click", checkboxSelection);
    })
}
tableListData();

function checkboxSelection(event) {
    const idSelection = event.target;
    const id = idSelection.id;
    if (idSelection.checked) {
        redcordSelected.push(id)
    }
}

const btnDelete = document.querySelector("#btnDelete");
btnDelete.addEventListener("click", deleteDataOfEmployes);
function deleteDataOfEmployes() {
    if (redcordSelected.length > 1) {
        alert("Please select one student");
    }
    else {
        const authenticate = confirm("sure to delete selected record");
        if (authenticate) {
            const idx = employes.findIndex(function (value) {
                return value.id == redcordSelected[0];
            })
            employes.splice(idx, 1);
            tableListData()
        }
    }
}

const savebtn = document.querySelector("#btnSubmit")
savebtn.addEventListener("click", newRecordData)
function newRecordData() {
    debugger
    const insertData = document.forms["employeDataCreating"]
    const obj = {
        id: "",
        name: insertData.name.value,
        email: insertData.email.value,
        gender: insertData.gender.value,
        mobile: insertData.mobile.value,
    };
    obj.id = employes.length + 1;
    employes.push(obj);
    if (isEdit) {
        employes.forEach(function (item) {
            if (item.id == redcordSelected[0]) {
                item.name = obj.name;
                item.email = obj.email;
                item.gender = obj.gender;
                item.mobile = obj.mobile;
            }
        })
    }
    tableListData()
    formReset();
}

let isEdit = false;
const btnEditEmploye = document.querySelector("#btnEdit");
btnEditEmploye.addEventListener("click", editEmploye);
function editEmploye() {
    isEdit = true;
    const employesFind = employes.find(function (item) {
        return item.id == redcordSelected[0]
    })
    const employesDetailsEdit = document.forms["employeDataCreating"]
    employesDetailsEdit.name.value = employesFind.name;
    employesDetailsEdit.email.value = employesFind.email;
    employesDetailsEdit.gender.value = employesFind.gender;
    employesDetailsEdit.mobile.value = employesFind.mobile;
}

function formReset() {
    const insertData = document.forms["employeDataCreating"]
    const obj = {
        id: "",
        name: insertData.name.value = " ",
        email: insertData.email.value = " ",
        gender: insertData.gender.value = " ",
        mobile: insertData.mobile.value = " ",
    };
    obj = null
}
