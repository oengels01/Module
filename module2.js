function numberConvertUSD(num) {
  return "$" + num.formatMoney();

  Number.prototype.formatMoney = function(c, d, t){
  var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
}
module.exports=numberConvertUSD;
//  var numString = number.toFixed(2).toString(1);
// console.log("numString is " + numString);
// var convertNumber = Math.random();
// }
// numberCovert(6);
// numberCovert(6.23);
// numberCovert(6.999);
