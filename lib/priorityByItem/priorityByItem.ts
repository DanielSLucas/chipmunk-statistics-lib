export interface PriorityByItemReturn {
  priorities: number[];
  calc: string;
}

/**
 * Object containing the return of priorityByItem function
 * @typedef {Object} PriorityByItemReturn
 * @property {number[]} priorities - Array with the priority of each item in the arr
 * @property {string} calc - The calculations made to get the priorities array
 */

/**
 * Calculates the priority for each item in the arr
 * @param {number[][]} arr - An array of numbers. 
 * @param {number[]} sums - Array with the sum of each column values. 
 * @returns {PriorityByItemReturn}
 */
 function priorityByItem(arr: number[][], sums: number[]):PriorityByItemReturn {
  let calc = '$';

  const priorities = arr.map((row) => {
    let total = 0;

    calc+='frac{';

    row.forEach((item, j) => {
      calc+= `${j===0?'':'+'}(${item.toFixed(2)}-:${sums[j].toFixed(2)})`;

      total += item/sums[j];
    });

    calc+=`}{${row.length.toFixed(2)}}`;

    const result = total/row.length;

    calc+=`=${result.toFixed(2)}$\n$`;

    return result;
  });

  calc += '$';

  return { priorities, calc, };
}

export default priorityByItem;