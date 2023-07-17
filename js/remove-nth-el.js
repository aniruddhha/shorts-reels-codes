


function removeNth(arr, ind) {
  const fn = (_, i) => i !== ind-1
  return arr.filter(fn);
}

const arr = [1, 2, 3, 4, 5];
console.log(removeNth(arr, 1));
// Output: 🥳🥳
// [2, 3, 4, 5]