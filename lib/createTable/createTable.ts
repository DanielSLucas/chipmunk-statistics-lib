type Labels = {
  column: string[],
  row: string[],
};

/**
 * Creates the table with the sums and priority vector.
 * @param {number[][]} arr - An array of numbers. 
 * @param {string[]} labels - Column labels. 
 * @param {number[]} priorities - Row priorities. 
 * @param {number[]} lastRow - Last row values. 
 * @returns {(string | number)[]} The table with the sums and priority vector
 */
 function createTable(arr: number[][], labels: Labels, priorities: number[], lastRow: (number | string)[]): (string | number)[][] {    
  const tableBody = arr.map((row, i) => {
    return [ labels.row[i], ...row, priorities[i] ];
  });
  
  const table = [
    labels.column,
    ...tableBody,
    lastRow,
  ]
  
  return table;
}

export default createTable;