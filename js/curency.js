let currency = document.getElementById("currency");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let para1 = document.getElementById("para1");

// function to convert sheckele to  dollar
function FunctionInput1(x) {
  x.preventDefault();
  let conver_currency = currency.value / 3.5;
  para1.textContent = conver_currency;
}
input1.addEventListener("click", FunctionInput1);

// function to convert dollar to  sheckele
function FunctionInput2(x) {
  x.preventDefault();
  let conver_currency = currency.value * 3.5;
  para1.textContent = conver_currency;
}
input2.addEventListener("click", FunctionInput2);

// function to convert sheckele to  euro
function FunctionInput3(x) {
  x.preventDefault();
  let conver_currency = currency.value / 1.8;
  para1.textContent = conver_currency;
}
input3.addEventListener("click", FunctionInput3);

// function to convert euro to  sheckele
function FunctionInput4(x) {
  x.preventDefault();
  let conver_currency = currency.value * 1.8;
  para1.textContent = conver_currency;
}
input4.addEventListener("click", FunctionInput4);
