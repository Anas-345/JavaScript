let output = document.getElementById("output");
let outputClear = document.getElementById("output-clear");
let condition = document.getElementById("condition");
let switchStatement = document.getElementById("switch");
let name = document.getElementById('name')

outputClear.onclick = () => {
  output.innerHTML = "";
};

condition.onclick = () => {
  let date = new Date();
  let day = date.getDay();
  if (day === 0) {
    alert("It's Sunday");
  } else if (day === 1) {
    alert("It's Monday");
  } else if (day === 2) {
    alert("It's Tuesday");
  } else if (day === 3) {
    alert("It's Wednesday");
  } else if (day === 4) {
    alert("It's Thursday");
  } else if (day === 5) {
    alert("It's Friday");
  } else {
    alert("It's Saturday");
  }
};

switchStatement.onclick = () => {
  let date = new Date();
  let day = date.getDay();
  switch (day) {
    case 0:
      output.innerHTML = "It's Sunday";
      break;
    case 1:
      output.innerHTML = "It's Monday";
      break;
    case 2:
      output.innerHTML = "It's Tuesday";
      break;
    case 3:
      output.innerHTML = "It's Wednesday";
      break;
    case 4:
      output.innerHTML = "It's Thursday";
      break;
    case 5:
      output.innerHTML = "It's Friday";
      break;

    default:
      output.innerHTML = "It's Saturday";
      break;
  }
};

name.onclick = () => {
  let value;
  do {
    value = prompt('Enter your name')
  } while (value === null || value.trim() === '');
  output.innerHTML = value
}