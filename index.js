//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

let inputArr = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using merge sort algorithm
function minimumValue(inputArr) {
  for (let i = 1; i < inputArr.length; i++) {
      // Choose first element in the unsorted subarray
      let current = inputArr[i];
      // The last element of our sorted subarray
      let j = i-1; 
      while ((j > -1) && (current < inputArr[j])) {
        inputArr[j+1] = inputArr[j];
        j--;
      }
      inputArr[j+1] = current;
    }
    return inputArr;
}



minimumValue(inputArr)

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(inputArr);
