import priorityByItem from "./priorityByItem";

describe('Sum columns function',() => {
  it('Should return an object with an array where each item is the sum of the values of its respective column and the calculations needed to reach that result.', () => {
    const arr =[
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const columsSums = [12, 15, 18];

    const result = priorityByItem(arr, columsSums);
    
    expect(result).toHaveProperty('priorities');
    expect(result).toHaveProperty('calc');
    expect(result.priorities).toEqual([ 0.12777777777777777, 0.3333333333333333, 0.5388888888888889 ]);
    expect(result.calc).toEqual(
      '$frac{(1.00-:12.00)+(2.00-:15.00)+(3.00-:18.00)}{3.00}=0.13$\n' +
      '$frac{(4.00-:12.00)+(5.00-:15.00)+(6.00-:18.00)}{3.00}=0.33$\n' +
      '$frac{(7.00-:12.00)+(8.00-:15.00)+(9.00-:18.00)}{3.00}=0.54$\n' +
      '$$'
    );
  });
});