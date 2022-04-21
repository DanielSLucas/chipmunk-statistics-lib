import getConsistencyRatio from "./getConsistencyRatio";

describe('Get consistency ratio function', () => {
  it('Should return the CR based in the CI and the number of attributes, and the calculations needed to reach that results.', () => {
    const result = getConsistencyRatio(3, 3);

    expect(result).toHaveProperty('cr');
    expect(result).toHaveProperty('calc');
    expect(result.cr.toFixed(2)).toBe("5.17");
    expect(result.calc).toEqual(
      "$CR=frac{3.00}{0.58}=5.17$"
    );
  });

  it('Should return cr = 0 for a number of attriutes equal ou less than 2.', () => {
    const result = getConsistencyRatio(3, 2);

    expect(result.cr).toBe(0);
    expect(result.calc).toEqual(
      "$CR=frac{3.00}{0}=0$"
    );
  });
});