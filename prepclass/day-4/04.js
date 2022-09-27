function input(umur) {
  if (umur >= 21) {
    return "DEWASA";
  } else if (umur >= 13) {
    return "REMAJA";
  } else if (umur >= 9) {
    return "BIMBINGAN ORANG TUA";
  } else {
    return "SEMUA USIA";
  }
}
console.log("=-=-=-=-=-=-1=-=-=-=-=-=");
console.log("Input : 15");
console.log("Output :" + input(15));
console.log("=-=-=-=-=-=-2=-=-=-=-=-=");
console.log("Input : 32");
console.log("Output :" + input(32));
