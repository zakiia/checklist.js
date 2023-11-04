function getInch(feet){
    const inch = feet * 12;
    return inch;
}
const myInch = getInch(5);
console.log(myInch);



function getMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}
const myMeter = getMeter(50);
console.log(myMeter);