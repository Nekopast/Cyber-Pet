function changeValue(barNumber, change) {
    let progressBar = document.getElementById("health" + barNumber);
    progressBar.value = progressBar.value + change;
}
let health1 = document.getElementById("health1");
let health2 = document.getElementById("health2");
let health3 = document.getElementById("health3");
let health4 = document.getElementById("health4");

setInterval(() => {
    health1.value -= 10;
    health2.value -= 10;
    health3.value -= 10;
    health4.value -= 10;
}, 2500);
