let display = document.getElementById("display");
let calculator = document.getElementById('calc-btns')

let num1 = "";
let num2 = "";
let op = null;
let result
let calculated = false

function calculation() {
    switch (op) {
      case "+":
        result = Number(num1) + Number(num2);
        break;
      case "-":
        result = Number(num1) - Number(num2);
        break;
      case "*":
        result = Number(num1) * Number(num2);
        break;
      case "/":
        result = Number(num1) / Number(num2);
        break;
    }

    display.innerText = result
    num1 = '' + result
    num2 = ''
    op = null
    calculated = true
}

calculator.onclick = (e) => {
  let value = e.target.innerText;
  if (!isNaN(value) || value == ".") {
    if (value === "." && (op ? num2.includes(".") : num1.includes("."))) return;
    if (op) {
      num2 += value;
      display.innerText += value;
    } else {
        if(calculated){
            display.innerText = ''
            num1 = ''
            calculated = false
        }
      num1 += value;
      display.innerText += value;
    }
  } else if (value != "C" && value != "=") {
    if (num2) {
        calculation()
    }
    op = value;
    display.innerText = num1 + op;
  } else if (value == "C") {
    display.innerText = "";
    num1 = "";
    num2 = "";
    op = null;
  } else if (value == "=") {
    if (!num2) result = num1
    calculation()
  }
};
