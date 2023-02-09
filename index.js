const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const inputEl = document.getElementById("input-value");

lengthEl.innerHTML = `${inputEl.value} meters = ${(
  inputEl.value * 3.281
).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(
  3
)} meters`;
volumeEl.innerHTML = `${inputEl.value} liters = ${(
  inputEl.value * 0.264
).toFixed(3)} gallons | ${inputEl.value} gallons = ${(
  inputEl.value / 0.264
).toFixed(3)} liters`;
massEl.innerHTML = `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(
  3
)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(
  3
)} kilos`;

convertBtn.addEventListener("click", function () {
  lengthEl.innerHTML = `${inputEl.value} meters = ${(
    inputEl.value * 3.281
  ).toFixed(3)} feet | ${inputEl.value} feet = ${(
    inputEl.value / 3.281
  ).toFixed(3)} meters`;
  volumeEl.innerHTML = `${inputEl.value} liters = ${(
    inputEl.value * 0.264
  ).toFixed(3)} gallons | ${inputEl.value} gallons = ${(
    inputEl.value / 0.264
  ).toFixed(3)} liters`;
  massEl.innerHTML = `${inputEl.value} kilos = ${(
    inputEl.value * 2.204
  ).toFixed(3)} pounds | ${inputEl.value} pounds = ${(
    inputEl.value / 2.204
  ).toFixed(3)} kilos`;
});
