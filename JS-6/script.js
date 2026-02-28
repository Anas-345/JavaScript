let input = document.getElementById("input");
let inputClear = document.getElementById("input-clear");
let output = document.getElementById("output");
let outputClear = document.getElementById("output-clear");
let originalString = document.getElementById("original-string");
let today = document.getElementById("today");
let born = document.getElementById("born");
let birthday = document.getElementById("birthday");
let greet = document.getElementById("greet");
let time1 = document.getElementById("time-1");
let time2 = document.getElementById("time-2");
let time3 = document.getElementById("time-3");
let tax = document.getElementById("tax");
let total = document.getElementById("total");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();

originalString.innerHTML = date;

inputClear.onclick = () => {
  input.value = "";
};

outputClear.onclick = () => {
  output.innerHTML = "";
};

today.onclick = () => {
  output.innerHTML = days[date.getDay()];
};

born.onclick = () => {
  let now = new Date();
  let dob = input.value;
  if (!dob) {
    output.innerHTML = "Enter your date of Birth";
    return;
  }
  dob = new Date(dob);
  let daysYouBorn = Math.floor(
    (now.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24),
  );
  output.innerHTML = daysYouBorn + " days since you born";
};

birthday.onclick = () => {
  let now = new Date();
  let dob = input.value;
  if (!dob) {
    output.innerHTML = "Enter your date of next birthday";
    return;
  }
  dob = new Date(dob);
  let nextBirthday = Math.floor(
    (dob.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
  );
  output.innerHTML = "After " + nextBirthday + " days is your birthday";
};

greet.onclick = () => {
  let now = new Date();
  let time = now.getHours();
  if (time >= 0 && time < 12) {
    alert("Good Morning");
  } else if (time >= 12 && time < 16) {
    alert("Good Afternoon");
  } else if (time >= 16 && time < 20) {
    alert("Good Evening");
  } else {
    alert("Good Night");
  }
};

function time_1() {
  let now = new Date();
  output.innerHTML = `<p>You clicked the button @ ${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()}</p>`;
}

function time_2() {
  let now = new Date();
  output.innerHTML += `<p>You clicked the button @ ${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()}</p>`;
}

function time_3() {
  let now = new Date();
  output.innerHTML += `<p>You clicked the button @ ${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()}</p>`;
}

time1.onclick = () => time_1();
time2.onclick = () => time_2();
time3.onclick = () => time_3();

tax.onclick = () => {
  let price = +prompt("Enter your price");
  let Tax = price * 0.17;
  output.innerHTML = "Tax is: " + Tax;
};

total.onclick = () => {
  let price = +prompt("Enter price");
  let total;
  if (price < 1000) {
    total = price + price * 0.08;
  } else {
    total = price + price * 0.16;
  }
  output.innerHTML = "Total: " + total;
};
