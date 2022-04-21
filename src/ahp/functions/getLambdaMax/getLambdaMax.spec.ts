import getLambdaMax from "./getLambdaMax";

describe('Get lambda max function', () => {
  it('Should return the lambda max based on the total consistency and the number of attributes', () => {
    const result = getLambdaMax(30, 5);

    expect(result).toHaveProperty('lambdaMax');
    expect(result).toHaveProperty('calc');
    expect(result.lambdaMax).toBe(6.00);
    expect(result.calc).toEqual(
      "$lambda=frac{30.00}{5.00}=6.00$"
    );
  });
});