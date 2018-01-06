
var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() {
	divisor.style.width = slider.value+"%";
}

$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});
