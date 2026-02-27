let input = document.getElementById("input");
let output = document.getElementById("output");
let inputClear = document.getElementById("input-clear");
let outputClear = document.getElementById("output-clear");
let lowerCase = document.getElementById("lower-case");
let upperCase = document.getElementById("upper-case");
let capitalize = document.getElementById("capitalize");
let format = document.getElementById("format");
let printCities = document.getElementById("print-cities");
let addCity = document.getElementById("add-city");
let checkCity = document.getElementById("check-city");
let findWord = document.getElementById("find-word");
let replaceWord = document.getElementById("replace-word");
let originalString = document.getElementById('original-string')

let string =
  "I love my country Pakistan. I like my city Faisalabad. I love my Homeland.";

let cities = [
  "Faisalabad",
  "Gujranwala",
  "Islamabad",
  "Multan",
  "Karachi",
  "Jhang",
  "Kashmir",
];

inputClear.onclick = () => {
  input.value = "";
};

outputClear.onclick = () => {
  output.innerHTML = "";
};

lowerCase.onclick = () => {
  let value = input.value;
  value
    ? (output.innerHTML = value.toLowerCase())
    : (output.innerHTML = "Please enter text in input field");
  input.value = "";
};

upperCase.onclick = () => {
  let value = input.value;
  value
    ? (output.innerHTML = value.toUpperCase())
    : (output.innerHTML = "Please enter text in input field");
  input.value = "";
};

capitalize.onclick = () => {
  let value = input.value;
  value
    ? (output.innerHTML = value
        .toLowerCase()
        .split(" ")
        .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
        .join(" "))
    : (output.innerHTML = "Please enter text in input field");
  input.value = "";
};

format.onclick = () => {
  let value = input.value;
  value
    ? (output.innerHTML = value
        .toLowerCase()
        .split(" ")
        .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
        .join(" "))
    : (output.innerHTML = "Please enter text in input field");
  input.value = "";
};

printCities.onclick = () => {
  output.innerHTML = cities
    .map((city, index) => `<p>${index + 1}) ${city}</p>`)
    .join("");
};

addCity.onclick = () => {
  let value = input.value;
  let check = false;
  cities.forEach((city) => {
    if (city.toLowerCase() === value.toLowerCase()) {
      check = true;
    }
  });
  if (!value) {
    output.innerHTML = "Please enter text in input field";
  } else if (check) {
    output.innerHTML = value + " is already in list";
  } else {
    cities.push(value);
    output.innerHTML = value + " added successfully";
  }
  input.value = "";
};

checkCity.onclick = () => {
  let value = input.value;
  let check = false;
  cities.forEach((city) => {
    if (city.toLowerCase() === value.toLowerCase()) {
      check = true;
    }
  });
  value
    ? check
      ? (output.innerHTML = value + " found in the list")
      : (output.innerHTML = value + " not in the list")
    : (output.innerHTML = "Please enter text in input field");
  input.value = "";
};

findWord.onclick = () => {
  let value = input.value;
  value
    ? string.includes(value)
      ? (output.innerHTML = value + " found in the string")
      : (output.innerHTML = value + " not found in string")
    : (output.innerHTML = "Please Enter text in input field");
  input.value = "";
};

replaceWord.onclick = () => {
  let value = input.value;
  if (value) {
    if (string.includes(value)) {
      let val = prompt("Enter value you wanna replace");
      string = string.replace(value, val);
      output.innerHTML = "Value Replaced";
    } else {
      output.innerHTML = "Value not found";
    }
  } else {
    output.innerHTML = "Please Enter text in input field";
  }
  input.value = "";
  originalString.innerHTML = string
};
