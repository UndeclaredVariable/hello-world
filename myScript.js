let nameInput = document.getElementById("name");

nameInput.onchange = function () {
  document.getElementById("nameDisp").innerHTML = 'Hello ' + this.value;
};
