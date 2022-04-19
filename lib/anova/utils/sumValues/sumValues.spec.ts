import sumValues from "./sumValues";

describe("Sum values function", () => {
  it("Should return the sum of the values of an array.", () => {
    const result = sumValues([1, 2, null, 4, 5, null, 7, 8]);

    expect(result).toBe(27);
  });

  it("Should return the sum of the values of a multidimensional array.", () => {
    const result = sumValues(
      [
        [1, 2, null],
        [4, null, 6],
        [[7], 8, 9]
      ]
    );

    expect(result).toBe(37);
  });
});