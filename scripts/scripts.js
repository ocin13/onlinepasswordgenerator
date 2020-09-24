//slider button
var slider = document.getElementById("myRange");
var value = document.getElementById("selectValue");
value.innerHTML = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  value.innerHTML = this.value;
}