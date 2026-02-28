let input = document.getElementById("input");
let inputClear = document.getElementById("input-clear");
let output = document.getElementById("output");
let outputClear = document.getElementById("output-clear");
let round = document.getElementById("round");
let ceil = document.getElementById("ceil");
let floor = document.getElementById("floor");
let random = document.getElementById("random");
let dice = document.getElementById("dice");
let password = document.getElementById("password");
let convertString = document.getElementById("convert-string");
let controlLength = document.getElementById("control-length");
let gst = document.getElementById("gst");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()-_=+[]{}|\\:;\"'<>,.?/";

let originalString = 25.12345;

inputClear.onclick = () => {
  input.value = "";
};

outputClear.onclick = () => {
  output.innerHTML = "";
};

round.onclick = () => {
  let value = input.value.trim();
  value && !isNaN(value)
    ? (output.innerHTML = Math.round(Number(value)))
    : (output.innerHTML = Math.round(originalString));
  input.value = "";
};

ceil.onclick = () => {
  let value = input.value.trim();
  value && !isNaN(value)
    ? (output.innerHTML = Math.ceil(Number(value)))
    : (output.innerHTML = Math.ceil(originalString));
  input.value = "";
};

floor.onclick = () => {
  let value = input.value.trim();
  value && !isNaN(value)
    ? (output.innerHTML = Math.floor(Number(value)))
    : (output.innerHTML = Math.floor(originalString));
  input.value = "";
};

random.onclick = () => {
  let number = Math.round(Math.random() * 100);
  output.innerHTML = number;
};

dice.onclick = () => {
  let number = Math.ceil(Math.random() * 6);
  output.innerHTML = number;
};

password.onclick = () => {
  let length = Number(input.value.trim());
  let password = "";
  let gen = upperCase + lowerCase + specialChars + numbers;
  if (!length || isNaN(length) || length < 4 || length >= 100) {
    length = 12;
  }
  for (let i = 0; i < length; i++) {
    password += gen[Math.floor(Math.random() * gen.length)];
  }
  output.innerHTML = password;
  input.value = "";
};

convertString.onclick = () => {
  let value = input.value.trim();
  let str = "";
  for (let i = 0; i < value.length; i++) {
    str += Math.floor(Math.random() * numbers.length);
  }
  str
    ? (output.innerHTML = str)
    : (output.innerHTML = "Enter input in input field");
};

controlLength.onclick = () => {
  let length = Number(input.value.trim());
  let password = "";
  let gen = upperCase + lowerCase + specialChars + numbers;
  if (!length || isNaN(length) || length < 4 || length > 100) {
    password = "Please Enter a Number in input field between 4 - 100";
  } else {
    password = "";
    for (let i = 0; i < length; i++) {
      password += gen[Math.floor(Math.random() * gen.length)];
    }
  }
  output.innerHTML = password;
  input.value = "";
};

gst.onclick = () => {
  let value = Number(input.value.trim());
  let gstCalculate;
  if (!value || isNaN(value)) {
    gstCalculate = "Enter a valid number in input field";
  } else {
    gstCalculate = value * 0.18;
  }
  output.innerHTML = gstCalculate;
  input.value = "";
};
