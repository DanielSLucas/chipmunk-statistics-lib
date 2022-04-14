export interface GetConsistencyReturn {
  consistency: number[];
  totalConsistency: number;
  calc: string;
}

/**
 * Object containing the return of getConsistency function
 * @typedef {Object} GetConsistencyReturn
 * @property {number[]} consistency - The consistency array
 * @property {number} totalConsistency - The total consistency of the arr and priorities
 * @property {string} calc - The calculations made to get the sums array
 */

/**
 * Calculates the consistency for the given arr and priorities
 * @param {number[][]} arr - An array of numbers. 
 * @param {number[]} priorities - Row priorities.
 * @returns {GetConsistencyReturn}
 */
 function getConsistency(arr: number[][], priorities: number[]): GetConsistencyReturn {
  let calc ='$'
  let totalConsistency = 0;

  const consistency = arr.map((row, i) => {
    let total = 0;

    calc+='frac{';

    row.forEach((item, j) => {
      calc+=`${j===0 ? '': '+'}(${item.toFixed(2)}xx${priorities[j].toFixed(2)})`;

      total += item*priorities[j];
    });

    calc+=`}{${priorities[i].toFixed(2)}} ${i===arr.length-1 ? '': '+$\n$'}`;

    const currCons = total/priorities[i];
    totalConsistency += currCons;

    return currCons;
  });  
  
  calc+=`=${totalConsistency.toFixed(2)}$`

  return { consistency, totalConsistency, calc, };
}

export default getConsistency;