let foot = parseInt(1);
let c = (foot * 30.48);


function lengthConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCentimeter").innerHTML = (valNum * 30.48);

}

function lengthConverterCentimeter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFoot").innerHTML = (valNum / 30.48);
}