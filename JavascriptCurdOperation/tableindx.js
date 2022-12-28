const studentsSec = document.querySelector(".student-form");
const gridSec = document.querySelector(".grid");
const btnEd = document.querySelector("#btnEdit");
const btnDl = document.querySelector("#btnDelete");
const btnAdd = document.querySelector("#btnAdd");
const btnSubmit = document.querySelector("#btnSubmit");
const btnCancel = document.querySelector("#btnCancel");
btnEd.addEventListener("click", editStudent);
btnDl.addEventListener("click", deleteStudent);
btnAdd.addEventListener("click", addStudent);
btnSubmit.addEventListener("click", saveStudent);
btnCancel.addEventListener("click", cancelStudent);
let isEdit = false;
const studentsList = [
    { name: "John", email: "John@gmail.com ", gender: "Male", mobile: "546456456", id: 1 },
    { name: "Doe", email: "doe@gmail.com", gender: "Male", mobile: 34534434554, id: 2 }
]

let selection = [];
renderStudents();
function renderStudents() {
    selection = [];
    let tbody = document.querySelector("#tbStudents");
    tbody.innerHTML = "";
    studentsList.forEach(function (item) {
        tbody.innerHTML += renderRow(item)
    });
    tbody.querySelectorAll("input").forEach(function (element) {
        element.addEventListener("click", handleSelection);
    })
}
function handleSelection(event) {
    const selectedEle = event.target;
    const id = selectedEle.dataset.id;
    if (selectedEle.checked) {
        selection.push(id);
    } 
    // else {
    //     const idx = selection.indexOf(id);
    //     if (idx > -1) {
    //         selection.splice(idx, 1)
    //     }
    // }
}
function renderRow(student) {
    const _tbRow = `<tr>
   <td><input type="checkbox" data-id="${student.id}" /></td>
   <td>${student.name}</td>
   <td>${student.email}</td>
   <td>${student.gender}</td>
   <td>${student.mobile}</td>
   </tr>`
    return _tbRow;
}
function editStudent() {
    isEdit = true;
    const student = studentsList.find(function (std) { return std.id == selection[0] });
    gridSec.hidden = true;
    studentsSec.hidden = false;
    const _form = document.forms["studentForm"];
    _form.name.value = student.name;
    _form.email.value = student.email;
    _form.gender.value = student.gender;
    _form.mobile.value = student.mobile;
}
function addStudent() {
    isEdit = false;
    studentsSec.hidden = false;
    gridSec.hidden = true;
}
function saveStudent() {
    const _form = document.forms["studentForm"];
    const student = {
        id: "",
        name: _form.name.value,
        email: _form.email.value,
        gender: _form.gender.value,
        mobile: _form.mobile.value
    }
    if (student.name == "") {
        const errorSpan = document.querySelector(".error_name").hidden = false;
    }
    else if (student.email === "") {

    }
    else if (student.email) {
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(student.email)) {

        } else {
            alert("Please enter valid email")
        }
    }
    if (isEdit) {
        studentsList.forEach(function (item) {
            if (item.id == selection[0]) {
                item.name = student.name;
                item.email = student.email;
                item.gender = student.gender;
                item.mobile = student.mobile;
            }
        })
    } else {
        student.id = studentsList.length + 1;
        studentsList.push(student);
    }
    studentsSec.hidden = true;
    gridSec.hidden = false;
    renderStudents();
}
function cancelStudent() {

}
function deleteStudent() {
    debugger
    if (selection.length > 1 || selection.length === 0) {
        alert("Please select one student");
    } else {
        const isConfirm = confirm("Are you sure ? do you really want to delete ?");
        if (isConfirm) {
            debugger
            const idx = studentsList.findIndex(function (value) { return value.id == selection[0] })
            studentsList.splice(idx, 1);
            renderStudents();
        }
    }
}
