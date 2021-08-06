let gal = parseInt(1);
let c = (gal * 3.78541);



function volumeConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputLiter").innerHTML = (valNum * 3.78541);

}

function volumeConverterGallon(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputGallon").innerHTML = (valNum / 3.78541);
}