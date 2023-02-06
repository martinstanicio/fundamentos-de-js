const documentStyle = document.documentElement.style;
const colorInput = document.querySelector("#color");

colorInput.addEventListener("input", function () {
  documentStyle.setProperty("--clr-primary-h", this.value);
});
