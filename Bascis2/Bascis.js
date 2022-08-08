function valueToFixed() {
    let value1 = parseFloat(document.getElementById("oneFixed").value);
    let value2 = document.getElementById("twoFixed").value;
    // debugger
    if (value1 == "" || value2 == "") {
      document.getElementById("error").innerHTML = "invalid";
    }
    let fixedValue = value1.toFixed(value2);
    document.getElementById("result1").value = fixedValue;
    document.getElementById("result1").value = '';
  }
