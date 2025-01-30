/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertionInput = document.querySelector('#convertion-input');
const convertionBtn = document.querySelector('#convertion-button');

const massResult = document.querySelector('#mass-result');
const volumeResult = document.querySelector('#volume-result');
const lengthResult = document.querySelector('#length-result');

const theme = document.querySelector('#theme');
const themeSwitchBtn = document.querySelector('.change-theme-button');

convertionInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
});

function themeSwitch() {
    if (theme.classList.contains('white-theme')) {
        theme.classList.remove('white-theme');
        theme.classList.add('dark-theme');
        themeSwitchBtn.textContent = '☀️'
    } else {
        theme.classList.remove('dark-theme');
        theme.classList.add('white-theme');
        themeSwitchBtn.textContent = '🌙'
    }
}


function convert(value) {
    let meter = value * 3.281;
    let liter = value * 0.264;
    let kilogram = value * 2.204;

    const convertLengthtHTML = `${value} meters = ${meter.toFixed(3)} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`;
    const converttVolumeHTML = `${value} liters = ${liter.toFixed(3)} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`;
    const converttMassHTML = `${value} kilograms = ${kilogram.toFixed(3)} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilograms`;

    massResult.innerHTML = converttMassHTML;
    volumeResult.innerHTML = converttVolumeHTML;
    lengthResult.innerHTML = convertLengthtHTML;

    convertionInput.value = '';
}

convertionBtn.addEventListener("click", () => convert(Number(convertionInput.value)));
themeSwitchBtn.addEventListener("click", themeSwitch);