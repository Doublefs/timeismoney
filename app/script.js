var secondsPassed=0;
var hourlyPay = 100.00;
var currentMoney=0;

//This function is called every second
setInterval(function(){ 
secondsPassed++; //
calculateMoney();
document.getElementById("money").innerHTML = "$"+currentMoney.toFixed(2);
}, 1000);

function calculateMoney(){
    currentMoney = secondsPassed*hourlyPay/3600;
}