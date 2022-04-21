import sumValues from "./sumValues";

describe("Sum values function", () => {
  it("Should return the sum of the values of an array.", () => {
    const result = sumValues([1, 2, null, 4, 5, null, 7, 8]);

    expect(result).toHaveProperty('sum');
    expect(result).toHaveProperty('calc');
    expect(result.sum).toBe(27);
    expect(result.calc).toBe(
      "$1+2+4+5+7+8=27$"
    );
  });

  it("Should return the sum of the values of a multidimensional array.", () => {
    const result = sumValues(
      [
        [1, 2, null],
        [4, null, 6],
        [[7], 8, 9]
      ],
    );
    
    expect(result).toHaveProperty('sum');
    expect(result).toHaveProperty('calc');
    expect(result.sum).toBe(37);
    expect(result.calc).toBe(
      "$1+2+4+6+7+8+9=37$"
    );
  });
});