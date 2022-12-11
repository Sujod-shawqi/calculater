// calculater bmi
let height;
let weight;

// Main Function
let bmifunction = function () {
  height = document.getElementById("height").value;
  weight = document.getElementById("weight").value;
  // console.log(height, weight);
  height = height / 100;
  let bmi = weight / (height * height);
  document.getElementById("result").innerHTML = bmi;
  if (bmi < 18.5) {
    document.getElementById("status").innerHTML = "under weight";
  } else if (bmi >= 18.5 && bmi < 25) {
    document.getElementById("status").innerHTML = "Healthy";
  } else if (bmi >= 25 && bmi < 30) {
    document.getElementById("status").innerHTML = "over weight";
  } else {
    document.getElementById("status").innerHTML = "obese";
  }
};
