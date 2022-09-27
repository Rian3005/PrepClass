function input(nilai) {
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else if (nilai >= 60) {
    return "D";
  } else {
    return "E";
  }
}
console.log("=-=-=-=-=-=-1=-=-=-=-=-=");
console.log("Input : 90");
console.log("Output :" + input(90));
console.log("=-=-=-=-=-=-2=-=-=-=-=-=");
console.log("Input : 89");
console.log("Output :" + input(89));
console.log("=-=-=-=-=-=-3=-=-=-=-=-=");
console.log("Input : 79");
console.log("Output :" + input(79));
console.log("=-=-=-=-=-=-4=-=-=-=-=-=");
console.log("Input : 69");
console.log("Output :" + input(69));
console.log("=-=-=-=-=-=-5=-=-=-=-=-=");
console.log("Input : 59");
console.log("Output :" + input(59));
console.log("=-=-=-=-=-=-=-=-=-=-=-=");
