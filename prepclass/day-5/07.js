const stuff = ["Meja", "Buku", "Topi", "Baju", "Kayu"];
console.log(stuff);
function addArray(arr) {
  arr.unshift("Handuk");
  arr.push("Celana");
  console.log(arr);
}

addArray(stuff);
