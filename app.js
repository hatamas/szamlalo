let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let start = document.getElementById("start");
let val = document.getElementById("val");

let ertek = 0
val.innerHTML = ertek;

plus.addEventListener("click", function() {
    alert ("+");
})

minus.addEventListener("click", function() {
    alert ("-");
})

start.addEventListener("click", function() {
    alert ("start");
})