import sumColumns from "./sumColumns";

describe('Sum columns function',() => {
  it('Should return an object with an array where each item is the sum of the values of its respective column and the calculations needed to reach that result.', () => {
    const arr =[
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const result = sumColumns(arr);


    expect(result).toHaveProperty('sums');
    expect(result).toHaveProperty('calc');
    expect(result.sums).toEqual([12, 15, 18]);
    expect(result.calc).toEqual(
      "$1.00+4.00+7.00=12.00$\n$2.00+5.00+8.00=15.00$\n$3.00+6.00+9.00=18.00$\n$$"
    );
  })
});