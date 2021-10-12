const billInput = document.querySelector(".bill-input");
const customTaxInput = document.querySelector(".custom");
const buttons = document.querySelectorAll(".button");
const numOfPeople = document.querySelector(".num-of-people-input");
const resetButton = document.querySelector(".reset-button");
const tipText = document.querySelector(".tip");
const totalText = document.querySelector(".total");
let tip = 0.0;
let total = 0.0;
let tipPercentage = 0;

function reset() {
	billInput.value = null;
	customTaxInput.value = null;
	numOfPeople.value = null;
	resetButton.disabled = true;
	tipPercentage = 0;
	tip = null;
	total = null;
	tipText.innerHTML = "0.00";
	totalText.innerHTML = "0.00";
}

function calculate() {
	if (customTaxInput.value > 0) {
		tipPercentage = customTaxInput.value / 100;
	}
	tip = (billInput.value * tipPercentage) / numOfPeople.value;
	if (isFinite(tip)) {
		tipText.innerHTML = tip.toFixed(2);
	}
	total = parseFloat(billInput.value) / numOfPeople.value + parseFloat(tip);
	if (isFinite(total)) {
		totalText.innerHTML = parseFloat(total).toFixed(2);
	}
	resetButton.disabled = false;
}

for (let button of buttons) {
	button.addEventListener("click", e => {
		tipPercentage = e.target.value;
		customTaxInput.value = null;
		calculate();
	});
}

resetButton.addEventListener("click", reset);
billInput.addEventListener("input", calculate);
customTaxInput.addEventListener("input", calculate);
numOfPeople.addEventListener("input", calculate);
