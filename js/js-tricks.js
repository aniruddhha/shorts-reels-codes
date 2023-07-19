let str1 = "hello";
let charArray = [...str1];
console.log(charArray); // Output: ["h", "e", "l", "l", "o"]


let str2 = "hello";
let reversedStr = str2.split("").reverse().join("");
console.log(reversedStr); // Output: "olleh"

let defaultValue = "Default Value";
let userInput;
let result = userInput || defaultValue;
console.log(result); // Output: "Default Value"

const arr = [1, 2, 3, 2, 4, 4, 5]
const arNw = Array.from(new Set(arr))
console.log(arNw)