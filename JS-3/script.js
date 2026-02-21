let input = document.getElementById("input");
let output = document.getElementById("output");
let clearInput = document.getElementById("input-clear");
let clearOutput = document.getElementById('output-clear')
let alertBtn = document.getElementById("alert-btn");
let printName = document.getElementById("print-name");
let printCities = document.getElementById("print-cities");
let addCity = document.getElementById("add-city");
let table = document.getElementById('table')

let cities = [
  "Faisalabad",
  "Lahore",
  "Karachi",
  "Islamabad",
  "Burewala",
  "Sheikhupura",
  "Kashmir",
];

clearInput.onclick = () => {
  input.value = "";
};

clearOutput.onclick = () => {
    output.innerHTML = ''
}

alertBtn.onclick = () => {
  alert("I am alert");
};

printName.onclick = () => {
  output.innerHTML = `
        ${input.value ? input.value : "Please type your name in the input field"}
    `;
  input.value = "";
};

printCities.onclick = () => {
  let result = "";
  for (let i = 0; i < cities.length; i++) {
    const element = cities[i];
    result += `${i + 1}) ${element} `;
  }
  output.innerHTML = result;
};

addCity.onclick = () => {
  let city = input.value;
  let exist = false;
  for (let i = 0; i < cities.length; i++) {
    const element = cities[i];
    if (element === city) {
      exist = true;
    }
  }
  if (city && !exist) {
    cities.push(city);
  }
  output.innerHTML = `${city ? (exist ? city + " already in the list" : city + " has been successfully added in your list") : "Please type your city name in the input field"}`;
  input.value = ''
};

table.onclick = () => {
    let num = input.value
    let result = ''

    if (isNaN(num) || num === '') {
        result = 'Enter a number in input field'
    }else{   
        for (let i = 1; i <= 10; i++) {
            result += `<p>${num} x ${i} = ${num*i}</p>`
        }
    }
     output.innerHTML = result
}