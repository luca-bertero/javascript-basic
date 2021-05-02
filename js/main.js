
//var box = document.querySelector(".counter-box");
var ddd=document.querySelector(".counter-container");
var qqq = document.querySelector(".calc");

var box = document.createElement("div");
ddd.appendChild(box);
ddd.insertBefore(box, qqq);
box.classList.add("counter-box");

var counter = document.createElement("p");
counter.innerHTML = 0;
box.appendChild(counter);
counter.id = "counter";

var btnMinus = document.createElement("button");
btnMinus.innerHTML="-";
box.appendChild(btnMinus);
btnMinus.id="ciao";

var btnPlus = document.createElement("button");
btnPlus.innerHTML="+";
box.appendChild(btnPlus);

var btnReset = document.createElement("button");
btnReset.innerHTML="Reset";
btnReset.id="reset-btn";
var div = document.createElement("div");
box.appendChild(div);
div.appendChild(btnReset);

var number_displayed = counter;
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

btnPlus.onclick = add;

btnReset.onclick = reset;

function add(){
  number++;
  number_displayed.innerHTML=number;
}

btnMinus.onclick = minus;

function minus() {
  number--;
  number_displayed.innerHTML=number;
}

btn1.onclick = one;
btn2.onclick = two;
btn3.onclick = three;
btn4.onclick = four;
btn5.onclick = five;
btn6.onclick = six;
btn7.onclick = seven;
btn8.onclick = eight;
btn9.onclick = nine;
btn0.onclick = zero;

function one() {
  number = number + "1";
  number_displayed.innerHTML = number;
}

function two() {
  number = number + "2";
  number_displayed.innerHTML = number;
}

function three() {
  number = number + "3";
  number_displayed.innerHTML = number;
}

function four() {
  number = number + "4";
  number_displayed.innerHTML = number;
}

function five() {
  number = number + "5";
  number_displayed.innerHTML = number;
}

function six() {
  number = number + "6";
  number_displayed.innerHTML = number;
}

function seven() {
  number = number + "7";
  number_displayed.innerHTML = number;
}


function eight() {
  number = number + "8";
  number_displayed.innerHTML = number;
}


function nine() {
  number = number + "9";
  number_displayed.innerHTML = number;
}


function zero() {
  number = number + "0";
  number_displayed.innerHTML = number;
}


function reset() {
  number = "";
  number_displayed.innerHTML = 0;
}
