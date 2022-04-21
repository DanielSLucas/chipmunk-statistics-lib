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
 * Calculates the final priority based on the other priorities
 * @param {number[][]} attributesPriorities - The options priorities for each attribute.
 * @param {number[]} ponderationPriorities - The attributes priorities.
 * @returns {GetFinalPrioritiesReturn}
 */
declare function getFinalPriorities(attributesPriorities: number[][], ponderationPriorities: number[]): GetFinalPrioritiesReturn;
export default getFinalPriorities;
