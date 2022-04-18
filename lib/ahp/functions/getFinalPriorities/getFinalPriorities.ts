interface GetFinalPrioritiesReturn {
  finalPriorities: number[];
  calc: string;
}

/**
 * Object containing the return of getFinalPriorities function
 * @typedef {Object} GetFinalPrioritiesReturn
 * @property {number[]} finalPriorities - Array with the priority of each item in the arr
 * @property {string} calc - The calculations made to get finalPriorities the priorities array
 */

/**
 * Calculates the final priority based on de other priorities
 * @param {number[][]} attributesPriorities - The options priorities for each attribute. 
 * @param {number[]} ponderationPriorities - The attributes priorities. 
 * @returns {GetFinalPrioritiesReturn}
 */
 function getFinalPriorities(attributesPriorities: number[][], ponderationPriorities: number[]): GetFinalPrioritiesReturn {
  let calc = '$'

  const finalPriorities = attributesPriorities[0].map((_, i) => {
    let total =0;

    attributesPriorities.forEach((_, j) => {
      calc+= `${j===0?'':'+'}(${attributesPriorities[j][i].toFixed(2)}xx${ponderationPriorities[j].toFixed(2)})`;

      total += (attributesPriorities[j][i] * ponderationPriorities[j]);
    });

    calc+= `=${total.toFixed(2)}$\n$`;

    return total;
  });

  calc += '$'

  return { finalPriorities, calc, };
}

export default getFinalPriorities;