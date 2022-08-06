function valueBinding() {
  //captureing two values from input
  document.getElementById("result").value = "";
  let value1 = document.getElementById("boxValue1").value;
  let value2 = document.getElementById("boxValue2").value;
  // debugger
  // condition input field mt message show
  if (value1 == "" || value2 == "") {
    window.alert("please Enter value");
  }
  let ConcatValue = value1 + value2;
  document.getElementById("result").value = ConcatValue;
  console.log(ConcatValue);

  //adding two value
  if (value1 >= 0 || value2 <= 10000) {
    let sum = parseFloat(value1) + parseFloat(value2);
    console.log(sum);
    document.getElementById("result").value = sum;
  } else if (value1 >= -0 || value2 >= -100000) {
    let sum = parseFloat(value1) - parseFloat(value2);
    console.log(sum);
    document.getElementById("result").value = sum;
  }
}





