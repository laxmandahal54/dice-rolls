var dieRolls = [];
let userInput = document.querySelector("#input");
let buttonRoll = document.querySelector("#roll");
let total = document.querySelector("#total");
let buttonAll = document.querySelector("#rollAlls");
let allRolls = document.querySelector("#allRolls");

buttonRoll.addEventListener("click", function () {
  let num = 0;
  let sum = 0;

  console.log(userInput.value);
  console.log("click ok");
  while (num < userInput.value) {
    dieRolls.push(Math.ceil(Math.random() * 6));
    sum += dieRolls[num];
    num++;
  }
  total.innerHTML = sum;
});

buttonAll.addEventListener("click", function () {
  let num = 0;

  while (num < dieRolls.length) {
    allRolls.innerHTML += "<li>" + dieRolls[num] + "</li>";
    num++;
  }
});
