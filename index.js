
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sort Numbers</h1>`;

// Finish the solution so that it sorts the passed in array of numbers. 
// If the function passes in an empty array or null/nil value then 
// it should return an empty array.

const solution = nums => {
  if (nums === null) {
    return []
  } else {
    return nums.sort((a,b) => a-b)
  }
}

console.log(solution([1,2,3,10,5]))
console.log(solution(null))