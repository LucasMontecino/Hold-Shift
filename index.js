const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");
let lastChecked;

function handleInputCheck(e) {
  let inBetween = false;

  //   Verifico si esta presionando la tecla shift

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleInputCheck);
});
