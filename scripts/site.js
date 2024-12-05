var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Введи по братски имя.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Внешний вид саковых обезьян," + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Внешний вид саковых обезьян," + storedName;
}

myButton.onclick = function () {
  setUserName();
};


