import { getCalcWithoutResult } from "../index";

interface SumValuesReturn {
  sum: number;
  calc: string;
}

/**
 * Object containing the return of sumValues function
 * @typedef {Object} SumValuesReturn
 * @property {number} sum - The sum result
 * @property {string} calc - The calculations made to get the sum
 */

/**
 * Sum the values of the array
 * @param {any[]} arr - Uni or multidimensional array
 * @returns {number} The sum result
 */
function sumValues(arr: Array<any>): SumValuesReturn {
  let sum = 0;
  let calc = '$';

  for (let i = 0; i < arr.length; i++) {    
    if (Array.isArray(arr[i])) {
      let { sum: currSum, calc: currCalc } = sumValues(arr[i])      
      
      currCalc = currCalc.replace(/\$|=\d+/g, '');
      
      sum += currSum;
      calc += `${calc === '$' ? '' : '+'}${getCalcWithoutResult(currCalc)}`;
 
      continue;
    }

    // sum only if it is a number
    if(arr[i] && !Number.isNaN(arr[i])) {
      sum += arr[i];      
      calc += `${calc === '$' ? '' : '+'}${arr[i]}`;
    }    
  }
  calc += `=${sum}$`;
  
  return { sum, calc, };
}

export default sumValues;
