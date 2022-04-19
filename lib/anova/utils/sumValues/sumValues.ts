/**
 * Sum the values of the array
 * @param {any[]} arr - Uni or multidimensional array
 * @returns {number} The sum result
 */
function sumValues(arr: Array<any>): number {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      total += sumValues(arr[i]);
      continue;
    }

    if(arr[i]) {
      total += arr[i];
    }    
  }

  return total;
}

export default sumValues;
