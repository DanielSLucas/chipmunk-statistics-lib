import getConsistencyIndex from "./getConsistencyIndex";

describe('Get consistency index function', () => {
  it('Should return the CI based in the lambda máx and the number of attributes, and the calculations needed to reach that results.', () => {
    const result = getConsistencyIndex(6, 4);

    expect(result).toHaveProperty('ci');
    expect(result).toHaveProperty('calc');
    expect(result.ci.toFixed(2)).toBe('0.67');
    expect(result.calc).toEqual(
      "$CI=frac{6.00-4.00}{3.00}=0.67$"
    );
  });
});