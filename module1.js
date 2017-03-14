function randomBetween(minVal, maxVal) {
var range = (maxVal-minVal);
var randomDecimal = Math.random();
var randomInRange = randomDecimal * range + minVal;
return randomInRange;
}

console.log(randomBetween(10,60));

module.exports = randomBetween;
