var numresult,
  str,
  isNotCal = false;

function onclicknum(nums) {
  //console.log(nums)
  str = document.getElementById("nummessege");
  if (isNotCal == true) {
    str.value = "";
  }
  str.value = str.value + nums;
  isNotCal = false;
}
//  Clear Function
function onclickclear() {
  str.value = "";
}
//  function result
function onclickresult() {
  isNotCal = true;
  str = document.getElementById("nummessege");
  numresult = eval(str.value);
  str.value = numresult;
}
// function delete numbers
function onclickDelete(){
  str.value =  str.value.slice(0, -1);
}
document.onkeydown = function (e) {
  				// console.log(e)
  switch (e) {
    case "1":
      onclicknum(1);
      break;
    case "2":
      onclicknum(2);
      break;
    case "3":
      onclicknum(3);
      break;
    case "4":
      onclicknum(4);
      break;
    case "5":
      onclicknum(5);
      break;
    case "6":
      onclicknum(6);
      break;
    case "7":
      onclicknum(7);
      break;
    case "8":
      onclicknum(8);
      break;
    case "9":
      onclicknum(9);
      break;
    case "0":
      onclicknum(0);
      break;
    case ".":
      onclicknum(".");
      break;
    case "+":
      onclicknum("+");
      break;
    case "-":
      onclicknum("-");
      break;
    case "*":
      onclicknum("*");
      break;
    case "/":
      onclicknum("/");
      break;
  }
};
