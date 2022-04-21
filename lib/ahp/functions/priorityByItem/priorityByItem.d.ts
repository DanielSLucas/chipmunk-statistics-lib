interface PriorityByItemReturn {
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
declare function priorityByItem(arr: number[][], sums: number[]): PriorityByItemReturn;
export default priorityByItem;
