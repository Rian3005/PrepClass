const fruits = ["Jeruk", "Pepaya", "Jambu", "Anggur", "Melon"];
console.log(fruits);
function deleteArray(arr) {
  delete arr[2];
  console.log(arr);
}

deleteArray(fruits);
