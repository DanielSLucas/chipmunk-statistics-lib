/**
 * Returns the greatest number in an array of numbers.
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The greatest number in the provided array.
 */
function max(arr: number[]): number {
  let greatestNum = arr[0];

  arr.forEach(num => {    
    if (num > greatestNum) greatestNum = num;
  });

  return greatestNum;
}

export default max;