import ponderation from "./ponderation";

describe("Ponderation function", () => {
  it("Should do all the calculations with the received comparison table and return an object with this properties: comparisonTable, sums, priorities, lambdaMax, consistency, totalConsistency, ci, cr, isConsistent, record", () => {
    const comparisonTable = [      
      [1, 5, 9],
      [0.2, 1, 7],
      [0.11, 0.14, 1],
    ]
    
    const result = ponderation(
      comparisonTable, 
      ['attrb1', 'attrb2', 'attrb3'], 
      'ponderacao'
    );    

    expect(result).toHaveProperty('comparisonTable')
    expect(result).toHaveProperty('sums')
    expect(result).toHaveProperty('priorities')
    expect(result).toHaveProperty('lambdaMax')
    expect(result).toHaveProperty('consistency')
    expect(result).toHaveProperty('totalConsistency')
    expect(result).toHaveProperty('ci')
    expect(result).toHaveProperty('cr')
    expect(result).toHaveProperty('isConsistent')
    expect(result).toHaveProperty('record')
  });
});