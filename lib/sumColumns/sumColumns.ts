export interface SumColumnsReturn {
  sums: number[];
  calc: string;
}

/**
 * Object containing the return of sumColumns function
 * @typedef {Object} SumColumnsReturn
 * @property {number[]} sums - Array with the sum of each column values
 * @property {string} calc - The calculations made to get the sums array
 */

/**
 * Calculates the sum of each column values
 * @param {number[][]} arr - An array of numbers. 
 * @returns {SumColumnsReturn}
 */
function sumColumns(arr: number[][]): SumColumnsReturn {
  let calc ='$';
  
  const sums =  arr.map((row, i) => {
    let sum = 0;
    
    row.forEach((item, j) => {
      calc+= `${j===0?'':'+'}${arr[j][i].toFixed(2)}`
      sum += arr[j][i];
    });
    calc+=`=${sum.toFixed(2)}$\n$`

    return sum;
  })
  calc += '$'

  return { sums, calc, };
}

export default sumColumns;