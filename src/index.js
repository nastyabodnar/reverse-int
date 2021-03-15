module.exports = function reverse (n) {
   let reversedNumber =  parseInt(String(n).split("").reverse().join(""), 10);
     return reversedNumber;
}
