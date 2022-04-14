import { 
  createTable, 
  getConsistency, 
  getConsistencyIndex, 
  getConsistencyRatio, 
  getLambdaMax, 
  priorityByItem, 
  sumColumns 
} from "../index";

export interface Step {
  title: string;
  table: (string | number)[][];
  calcs: string[];
}

export interface PonderationResults {
  comparisonTable: number[][];
  sums: number[];
  priorities: number[];
  lambdaMax: number;
  consistency: number[];
  totalConsistency: number;
  ci: number;
  cr: number;
  isConsistent: boolean;
  record: Step;
}

/**
 * Object with all the properties returned from ponderation function.
 * @typedef {Object} PonderationResults
 * @property {number[][]} comparisonTable - Table with comparisons between provided options.
 * @property {number[]} sums - The sum total for each column of the comparisonTable.
 * @property {number[]} priorities - The priority from each item (row) in the comparisonTable.
 * @property {number} lambdaMax - The result of the division of the totalConsistency by the number of attributes beeing compared.
 * @property {number[]} consistency - The result of dividing the priority of each row of the 'comparisonTable' by the sum of multiplying each item (of the respective row) by its priority.
 * @property {number} totalConsistency - The sum of all consistencies.
 * @property {number} ci - Consistency index, the result of dividing the lambdaMax minus the number of attributes by the number of attributes minus 1.
 * @property {number} cr - Consistency ratio, the result of dividing the CI by the RI (ramdom index - based in the array order).
 * @property {boolean} isConsistent - Tells if the result is consitent.
 * @property {Object} record - The record of what was made in this function.
 */

/**
 * Do all the math for the given comparison table.
 * @param {number[][]} comparisonTable - Two-dimensional array with the comparison values between options
 * @param {string[]} labels - The identifiers for rows and columns
 * @param {string} title - The title for this calculations record
 * @returns {PonderationResults} Object with all the properties returned from ponderation function.
 */
 function ponderation (comparisonTable: number[][], labels: string[], title: string):PonderationResults {
  const totalNumOfAttributes = comparisonTable[0].length; 

  const { sums, calc: sumCalc } = sumColumns(comparisonTable);

  const { priorities, calc: prioritiesCalc } = priorityByItem(comparisonTable, sums);
  
  const { consistency, totalConsistency, calc: consistencyCalc } = getConsistency(comparisonTable, priorities);

  const { lambdaMax, calc: lambdaMaxCalc } = getLambdaMax(totalConsistency, totalNumOfAttributes);
  
  const { ci, calc: ciCalc} = getConsistencyIndex(lambdaMax, totalNumOfAttributes);

  const { cr, calc: crCalc } = getConsistencyRatio(ci, totalNumOfAttributes);
  
  const table = createTable(
    comparisonTable, 
    {
      column: ['', ...labels, 'V'],
      row: labels
    }, 
    priorities, 
    ['$Sigma$', ...sums, '']
  );

  const record = {
    title,
    table,
    calcs: [
      sumCalc,
      prioritiesCalc,
      consistencyCalc,
      lambdaMaxCalc,
      ciCalc,
      crCalc,
    ]
  };   

  return {
    comparisonTable,
    sums,
    priorities,
    lambdaMax,
    consistency,
    totalConsistency,
    ci,
    cr,
    isConsistent: cr < 0.1,
    record,
  };
}

export default ponderation;