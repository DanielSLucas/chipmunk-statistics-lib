/**
 * Creates the table with the sums and priority vector.
 * @param {number[][]} arr - An array of numbers. 
 * @param {string[]} labels - Column labels. 
 * @param {number[]} priorities - Row priorities. 
 * @param {number[]} lastRow - Last row values. 
 * @returns {(string | number)[]} The table with the sums and priority vector
 */
 function createTable(arr: number[][], labels: string[], priorities: number[], lastRow: number[]): (string | number)[][] {  
  const arrPlusPriority = arr.map((row, i) => {
    return [ labels[i], ...row, priorities[i] ];
  });
  
  const table = [
    ['', ...labels, 'V'],
    ...arrPlusPriority,
    ['$Sigma$', ...lastRow, ''],
  ]
  
  return table;
}

export default createTable;