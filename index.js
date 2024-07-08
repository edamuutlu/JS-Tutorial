/* console.log("hello"); */

/* window.alert("this is an alert"); */

/* document.getElementById("myH1").textContent = "Hello";  */

/* let age = 22; 
 
console.log(`you are ${age} years old`); 
 
let username; 
 
username = window.prompt("whats your username?"); 
 
console.log(username);  */

/* let username; 

document.getElementById("submitButton").onclick = function(){
    username = document.getElementById("usernameInput").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
} */

/* const PI = 3.14;
let result;
let radius;

document.getElementById("submitButton").onclick = function () {
    radius = document.getElementById("radiusInput").value;
    result = 2 * PI * radius;
    document.getElementById("myH1").textContent = `Result = ${result}`;
} */

    /* AZALT - RESETLE - ARTTIR ÖRNEĞİ */

/* const azaltBtn = document.getElementById("azaltBtn");
const sıfırlaBtn = document.getElementById("sıfırlaBtn");
const arttırBtn = document.getElementById("arttırBtn");
const result = document.getElementById("result");

let count = 0;

azaltBtn.onclick = function () {
    count--;
    result.textContent = count;
}

sıfırlaBtn.onclick = function () {
    count = 0;
    result.textContent = count;
}

arttırBtn.onclick = function () {
    count++;
    result.textContent = count;
} */

/* let randomNum = Math.floor(Math.random() * 100) + 1; // 1-100 arası random tam sayı oluşturma
console.log(randomNum); */

/* radio button kullanımı */
/* const myCheckBox = document.getElementById("myCheckBox");
myCheckBox.onclick = function() {
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed!";
    }else{
        subResult.textContent = "You are not subscribed!";
    }
} */

/* reduce() */
const scores = [75, 50, 90, 80, 65, 95];
const maximum = scores.reduce(getMax);
const minimum = scores.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

