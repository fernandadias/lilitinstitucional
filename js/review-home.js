var comunidade = document.getElementById("comunidade");
var imprensa = document.getElementById("imprensa");

imprensa.style.display = "none";

document.getElementById("review-select").onchange = function(){
    console.log("asd");
    comunidade.style.display = (this.selectedIndex == 0) ? "block" : "none";
    imprensa.style.display = (this.selectedIndex == 1) ? "block" : "none";
}