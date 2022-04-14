import createTable from "./createTable";

describe('Create table function', () => {
  it('Should return a table (two-dimensional array), with based on the received params', () => {
    const labels = ['price', 'maintenance', 'weight']
    const arr =[
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const columsSums = [12, 15, 18];
    const priorities = [0.13, 0.33, 0.54];

    const result = createTable(arr, labels, priorities, columsSums);

    expect(result).toEqual([
      ['', 'price', 'maintenance', 'weight', 'V'],
      ['price',       1,  2,  3, 0.13],
      ['maintenance', 4,  5,  6, 0.33],
      ['weight',      7,  8,  9, 0.54],
      ['$Sigma$',    12, 15, 18, '']
    ]);
  });
});