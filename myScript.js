let nameInput = document.getElementById("name");
let nameDisp = document.getElementById("nameDisp");

nameInput.onchange = function () {
  nameDisp.innerHTML = nameInput.value;
};
