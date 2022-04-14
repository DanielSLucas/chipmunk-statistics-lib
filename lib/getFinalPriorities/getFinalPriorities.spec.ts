import getFinalPriorities from "./getFinalPriorities";

describe('Get final priorities', () => {
  it('Should return an object with an array where each item is the final priority of the option and the calculations needed to reach that result.', () => {
    const attributesPriorities = [
      [0.3, 0.4, 0.4],
      [0.5, 0.2, 0.3],
      [0.6, 0.2, 0.2],
    ];

    const ponderationPriorities = [0.3, 0.5, 0.2];
    
    const result = getFinalPriorities(attributesPriorities, ponderationPriorities);

    expect(result).toHaveProperty('finalPriorities');
    expect(result).toHaveProperty('calc');
    expect(
      result.finalPriorities.map(num => num.toFixed(2))
    ).toEqual([ "0.46", "0.26", "0.31" ]);
    expect(result.calc).toEqual(
      '$(0.30xx0.30)+(0.50xx0.50)+(0.60xx0.20)=0.46$\n' +
      '$(0.40xx0.30)+(0.20xx0.50)+(0.20xx0.20)=0.26$\n' +
      '$(0.40xx0.30)+(0.30xx0.50)+(0.20xx0.20)=0.31$\n' +
      '$$'
    );
  });
});