let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let start = document.getElementById("start");
let val = document.getElementById("val");

let ertek = 0
val.value = ertek;

function colorChange() {
    if (ertek == 0) {
        val.style.color = "black";
    }
    else if (ertek > 0) {
        val.style.color = "green";
    }
    else {
        val.style.color = "red";
    }
}

plus.addEventListener("click", function() {
    ertek++;
    val.value = ertek;
    colorChange();
})

minus.addEventListener("click", function() {
    ertek--;
    val.value = ertek;
    colorChange();
})

start.addEventListener("click", function() {
    ertek = 0;
    val.value = ertek;
    colorChange();
})