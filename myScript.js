let nameInput = document.getElementById("name");

nameInput.onchange = function () {
  document.getElementById("nameDisp").innerHTML = this.value;
};
