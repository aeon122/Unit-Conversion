let mil = parseInt(1);
let c = (mil * 1.609344);


function speedConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputKilometer/hour").innerHTML = (valNum * 1.609344);

}

function speedConverterMile(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputMile/hour").innerHTML = (valNum / 1.609344);
}