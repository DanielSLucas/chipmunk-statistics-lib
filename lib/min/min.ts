/**
 * Returns the smallest number in an array of numbers.
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The smallest number in the provided array.
 */
function min(arr: number[]): number {
  let smallestNum = arr[0];

  arr.forEach(num => {
    if (num < smallestNum) smallestNum = num;
  });

  return smallestNum;
}

export default min;