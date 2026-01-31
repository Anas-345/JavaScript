let outputStatement = document.getElementById("outputStatement");
let output = document.getElementById("output");
let name = "Muhammad Anas";
let number = 15;
let num1 = 100;
let num2 = 10;
let calculation =  6 + 10 - 2 * 12 / 9 + (12 - 1)

document.getElementById("clear-statement").onclick = () => {
  outputStatement.innerHTML = "";
};

document.getElementById("clear-output").onclick = () => {
  output.innerHTML = "";
};

document.getElementById("name").onclick = () => {
  alert(name);
  outputStatement.innerHTML = "alert(Muhammad Anas);";
  output.innerHTML = name;
  output.style.justifyContent = "center";
};

document.getElementById("number").onclick = () => {
  alert(number);
  outputStatement.innerHTML = "alert(15);";
  output.innerHTML = number;
  output.style.justifyContent = "center";
};

document.getElementById("variables").onclick = () => {
  outputStatement.innerHTML = "";
  output.innerHTML = `<ul>
    <li>A variable name can't contain any spaces.</li>
    <li>A variable name can contain only letters, numbers, dollar signs and underscores.</li>
    <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <span style='color:red;'>userAlert</span> and <span style='color:red;'>myVar</span> are legal.</li>
    <li>Capital letters are fine, but be careful. Variable names are case sensitive. A <span style='color:red;'>rose</span> is not a <span style='color:red;'>Rose</span>. If you assign the string 'Floribundas' to the variable <span style='color:red;'>rose</span>, and then ask JavaScript for the value assigned to <span style='color:red;'>Rose</span>, you will come up empty.</li>
  </ul>`;
};

document.getElementById("camelCase").onclick = () => {
  outputStatement.innerHTML = "";
  output.innerHTML = `<ul>
    <li><span style='color:red;'>fullName</span></li>
    <li><span style='color:red;'>userAge</span></li>
    <li><span style='color:red;'>outputStatement</span></li>
    </ul>`;
  output.style.justifyContent = "start";
};

document.getElementById("sum").onclick = () => {
  sum = num1 + num2;
  outputStatement.innerHTML = `<div>
        <p>let num1 = 100;</p>  
        <p>let num2 = 10;</p>
        <p>sum = num1 + num2</p>
    </div>`;
  output.innerHTML = sum;

  output.style.justifyContent = "center";
};

document.getElementById("subtract").onclick = () => {
  subtract = num1 - num2;
  outputStatement.innerHTML = `<div>
        <p>let num1 = 100;</p>  
        <p>let num2 = 10;</p>
        <p>subtract = num1 - num2</p>
    </div>`;
  output.innerHTML = subtract;

  output.style.justifyContent = "center";
};

document.getElementById("multiplication").onclick = () => {
  multiplication = num1 * num2;
  outputStatement.innerHTML = `<div>
        <p>let num1 = 100;</p>  
        <p>let num2 = 10;</p>
        <p>multiplication = num1 * num2</p>
    </div>`;
  output.innerHTML = multiplication;

  output.style.justifyContent = "center";
};

document.getElementById("division").onclick = () => {
  division = num1 / num2;
  outputStatement.innerHTML = `<div>
        <p>let num1 = 100;</p>  
        <p>let num2 = 10;</p>
        <p>division = num1 / num2</p>
    </div>`;
  output.innerHTML = division;

  output.style.justifyContent = "center";
};

document.getElementById("calculation").onclick = () => {
  outputStatement.innerHTML = `<div>
  <p>let calculation =  6 + 10 - 2 * 12 / 9 + (12 - 1)</p>
    </div>`;
  output.innerHTML = calculation;

  output.style.justifyContent = "center";
};
