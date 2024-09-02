let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let dblzero = document.querySelector("#dblzero");
let plus = document.querySelector("#plus");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let div = document.querySelector("#div");
let point = document.querySelector("#dot");
let Ac = document.querySelector("#ac");
let del = document.querySelector("#del");
let equal = document.querySelector(".equal");
let display = document.querySelector("#display");
let curr = " ";
display.value = curr;

one.onclick = () => {
  curr = curr + "1";
  display.value = curr;
};
two.onclick = () => {
  curr = curr + "2";
  display.value = curr;
};
three.onclick = () => {
  curr = curr + "3";
  display.value = curr;
};
four.onclick = () => {
  curr = curr + "4";
  display.value = curr;
};
five.onclick = () => {
  curr = curr + "5";
  display.value = curr;
};
six.onclick = () => {
  curr = curr + "6";
  display.value = curr;
};
seven.onclick = () => {
  curr = curr + "7";
  display.value = curr;
};
eight.onclick = () => {
  curr = curr + "8";
  display.value = curr;
};
nine.onclick = () => {
  curr = curr + "9";
  display.value = curr;
};

zero.onclick = () => {
  curr = curr + "0";
  display.value = curr;
};
dblzero.onclick = () => {
  curr = curr + "00";
  display.value = curr;
};

Ac.onclick = () => {
  curr = "";
  display.value = curr;
};

del.onclick = () => {
  curr = curr.slice(0, curr.length - 1);
  display.value = curr;
};

plus.onclick = () => {
  curr = curr + "+";
  display.value = curr;
};
sub.onclick = () => {
  curr = curr + "-";
  display.value = curr;
};
mul.onclick = () => {
  curr = curr + "*";
  display.value = curr;
};

div.onclick = () => {
  curr = curr + "/";
  display.value = curr;
};
point.onclick = () => {
  curr = curr + ".";
  display.value = curr;
};
equal.onclick = () => {
  curr = eval(curr);
  display.value = curr;
};
