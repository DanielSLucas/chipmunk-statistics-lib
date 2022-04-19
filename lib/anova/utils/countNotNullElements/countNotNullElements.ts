/**
 * Counts the number of not null elements in an array.
 * @param {any[]} arr - Uni or multidimensional array
 * @returns {number} The number of elements
 */
function countNotNullElements(arr: Array<any>): number {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count += countNotNullElements(arr[i]);
      continue;
    }

    if(arr[i]) {
      count += 1;
    }    
  }

  return count;
}

export default countNotNullElements;
