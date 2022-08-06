function valueToFixed() {
    let value1 = parseFloat(document.getElementById("oneFixed").value);
    let value2 = document.getElementById("twoFixed").value;
    // debugger
    if (value1 == "" || value2 == "") {
      window.alert("please Enter value");
    }
  
    let fixedValue = value1.toFixed(value2);
    document.getElementById("result1").value = fixedValue;
  }