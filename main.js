const pounds = document.querySelector("#lbPounds");
const output = document.querySelector('#output')
output.style.visibility = 'hidden';

pounds.addEventListener('keyup', weightConverter);

function weightConverter(e) {
    output.style.visibility = 'visible';
    const grams = document.querySelector("#grmsOutput");
    const kg = document.querySelector("#kgOutput");
    const ounce = document.querySelector("#ounceOutput");

    if (!pounds.value) {
        output.style.visibility = 'hidden';
        grams.textContent = '';
        kg.textContent = '';
        ounce.textContent =  '';
    } else {
        grams.textContent = (453.592 * pounds.value).toFixed(2);
        kg.textContent = (.453 * pounds.value).toFixed(2);
        ounce.textContent =  (16 * pounds.value).toFixed(2);
    }
}