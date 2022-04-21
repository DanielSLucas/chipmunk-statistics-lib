interface GetConsistencyReturn {
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
declare function getConsistency(arr: number[][], priorities: number[]): GetConsistencyReturn;
export default getConsistency;
