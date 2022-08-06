function valueOperation() {
    let value1 = parseInt(document.getElementById("oneValue").value);
    let value2 = parseInt(document.getElementById("twoValue").value);
    let oper = document.getElementById("operation").value;
    // debugger
    if (oper === "+") {
      document.getElementById("result2").value = value1 + value2;
    } else if (oper === "-") {
      document.getElementById("result2").value = value1 - value2;
    } else if (oper === "/") {
      document.getElementById("result2").value = value1 / value2;
    } else if (oper === "%") {
      document.getElementById("result2").value = value1 % value2;
    } else if (oper === "*") {
      document.getElementById("result2").value = value1 * value2;
    } else if (oper === ">") {
      document.getElementById("result2").value = value1 > value2;
    } else if (oper === "<") {
      document.getElementById("result2").value = value1 < value2;
    }
  }