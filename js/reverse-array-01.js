
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // Swap elements
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    
        // Move towards the 
        // center of the array
        start++;
        end--;
      }

      return arr;
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray)); 
// Output: 
//[5, 4, 3, 2, 1]
