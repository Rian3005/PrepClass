function cekKabisat(year) {
  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap) {
    return "kabisat";
  } else {
    return "bukan kabisat";
  }
}

console.log("=-=-=-=-=-=-1=-=-=-=-=-=");
console.log("Input : 1900");
console.log("Output :" + cekKabisat(1900));
console.log("=-=-=-=-=-=-2=-=-=-=-=-=");
console.log("Input : 2000");
console.log("Output :" + cekKabisat(2000));
console.log("=-=-=-=-=-=-3=-=-=-=-=-=");
console.log("Input : 2001");
console.log("Output :" + cekKabisat(2001));
console.log("=-=-=-=-=-=-4=-=-=-=-=-=");
console.log("Input : 2016");
console.log("Output :" + cekKabisat(2016));
console.log("=-=-=-=-=-=-=-=-=-=-=-=");
