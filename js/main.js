var number_displayed=document.getElementById("counter");

var btnPlus = document.getElementById("btn-pls");
var btnMinus = document.getElementById("btn-mns");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var btn5 = document.getElementById("btn-5");
var btn6 = document.getElementById("btn-6");
var btn7 = document.getElementById("btn-7");
var btn8 = document.getElementById("btn-8");
var btn9 = document.getElementById("btn-9");
var btn0 = document.getElementById("btn-0");

var number="";

btnPlus.addEventListener("click",function () {
  number++;
  number_displayed.innerHTML=number;
});

btnMinus.addEventListener("click",function () {
  number--;
  number_displayed.innerHTML=number;
});


btn1.addEventListener("click",function () {
  number=number+"1";
  number_displayed.innerHTML=number;
});

btn2.addEventListener("click",function () {
  number=number+"2";
  number_displayed.innerHTML=number;
});

btn3.addEventListener("click",function () {
  number=number+"3";
  number_displayed.innerHTML=number;
});

btn4.addEventListener("click",function () {
  number=number+"4";
  number_displayed.innerHTML=number;
});

btn5.addEventListener("click",function () {
  number=number+"5";
  number_displayed.innerHTML=number;
});

btn6.addEventListener("click",function () {
  number=number+"6";
  number_displayed.innerHTML=number;
});

btn7.addEventListener("click",function () {
  number=number+"7";
  number_displayed.innerHTML=number;
});

btn8.addEventListener("click",function () {
  number=number+"8";
  number_displayed.innerHTML=number;
});

btn9.addEventListener("click",function () {
  number=number+"9";
  number_displayed.innerHTML=number;
});

btn0.addEventListener("click",function () {
  number=number+"0";
  number_displayed.innerHTML=number;
});

function minusNumber() {
  number--;
  number_displayed.innerHTML=number;
}

function reset() {
  number="";
  number_displayed.innerHTML=0;
}
