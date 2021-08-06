let fah = parseInt(32);
let c = ((fah - 32) * 5) / 9;


function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;

}

function temperatureConverterFahrenheit(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32;
}