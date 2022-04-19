import getConsistency from "./getConsistency";

describe('Get consistency function', ()=> {
  it('Should return the consistency array, the total consistency and the calculations needed to reach that results.', () => {
    const arr =[
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    
    const priorities = [0.13, 0.33, 0.54];
    
    const result = getConsistency(arr, priorities);    

    expect(result).toHaveProperty('consistency');
    expect(result).toHaveProperty('totalConsistency');
    expect(result).toHaveProperty('calc');
    expect(result.consistency).toEqual([ 18.53846153846154, 16.393939393939394, 15.574074074074073 ]);
    expect(result.totalConsistency).toEqual(50.506475006475014);
    expect(result.calc).toEqual(
      '$frac{(1.00xx0.13)+(2.00xx0.33)+(3.00xx0.54)}{0.13} +$\n' +
      '$frac{(4.00xx0.13)+(5.00xx0.33)+(6.00xx0.54)}{0.33} +$\n' +
      '$frac{(7.00xx0.13)+(8.00xx0.33)+(9.00xx0.54)}{0.54} =50.51$'
    );
  });
});