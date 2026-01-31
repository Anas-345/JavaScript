let outputStatement = document.getElementById("outputStatement");
let output = document.getElementById("output");
let name = "Anas";

document.getElementById("clear-statement").onclick = () => {
  outputStatement.innerHTML = "";
};

document.getElementById("clear-output").onclick = () => {
  output.innerHTML = "";
};

document.getElementById("concatenation").onclick = () => {
  alert("Hello " + name);
  outputStatement.innerHTML = 'alert("Hello " + name)';
  output.innerHTML = "Hello " + name;
  outputStatement.style.alignItems = "center";
};

document.getElementById("name").onclick = () => {
  name = prompt("Enter your name");
  alert("Welcome " + name);
  outputStatement.innerHTML = `<p>name = prompt('Enter your name');</p>
  <p>alert('Welcome' + name)</p>`;
  output.innerHTML = "Welcome " + name;
  outputStatement.style.alignItems = "center";
};

document.getElementById("compare").onclick = () => {
  outputStatement.innerHTML = `
  <h3>Some Comparison Operators are here:</h3><br>
  <ul>
  <li>> Greater than</li>
  <li>< Less than</li>
  <li>>= Greater than or Equal to</li>
  <li><= Greater than or Equal to</li>
  <li>== Equal to</li>
  <li>!= Not Equal to</li>
  </ul>
  `;
  output.innerHTML = `
  <p>5 > 3: true</p>
  <p>5 < 3: false</p>
  <p>5 >= 3: true</p>
  <p>5 <= 3: false</p>
  <p>5 == 3: false</p>
  <p>5 != 3: true</p>
  `;
  outputStatement.style.alignItems = "start";
};

document.getElementById("condition").onclick = () => {
  let marks = prompt("Enter your marks");
  if (marks >= 90) {
    alert("You got A+");
  } else if (marks >= 80) {
    alert("You got A");
  } else if (marks >= 70) {
    alert("You got B");
  } else {
    alert("You are fail");
  }
};

document.getElementById("multiple-conditions").onclick = () => {
  let age = prompt("Enter your age");
  let weight = prompt("Enter your weight");
  if (age < 18) {
    alert("You are a baby");
  } else if (age >= 18 || weight < 70) {
    alert("You are smart");
  } else {
    alert("You are fat");
  }
};

document.getElementById("nested-statements").onclick = () => {
  let age = prompt("Enter your age");
  if (age >= 18) {
    if (age >= 60) {
      alert("You are an old man");
    } else {
      let weight = prompt("Enter your weight");
      if (weight >= 70) {
        alert("You are fat");
      } else {
        alert("You are smart");
      }
    }
  } else {
    alert("You are a baby");
  }
};

document.getElementById("login").onclick = () => {
  let name = prompt("Enter your user name");
  let password = prompt("Enter your password");
  if (name.toLowerCase() === "anas" && password === "123") {
    alert("You logged in");
  } else {
    alert("Invalid username or password");
  }
};
