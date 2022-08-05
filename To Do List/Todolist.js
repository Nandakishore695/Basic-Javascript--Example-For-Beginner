function todoList() {
  document.getElementById("error").innerHTML = "";
  let item = document.getElementById("todoInput").value;
  if (item == "") {
    document.getElementById("error").innerHTML = "Pls enter any item";
  } else {
    let text = document.createTextNode(item);
    let newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem);
    console.log(newItem);
    document.getElementById("todoInput").innerHTML = "";
    let span = document.createElement("span");
    span.textContent = " x";
    span.textDecoration = "none";
    newItem.appendChild(span);
  }

  // //Showing x near right side for all text
  let btn = document.getElementById('todoList');
  btn.addEventListener('click',function(){
    
  })
}
