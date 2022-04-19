import mean from "./mean";

describe("Mean function", () => {
  it("Should return the mean of an array of values", () => {
    const result = mean([1, 2, 3, 5]);

    expect(result).toHaveProperty("mean");
    expect(result).toHaveProperty("calc");
    expect(result.mean).toBe(2.75);
    expect(result.calc).toBe(
      "$frac{1+2+3+5}{4}=2.75$"
    );
  });

  it("Should return the mean of a multidimensional array of values", () => {
    const result = mean(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
    );

    expect(result).toHaveProperty("mean");
    expect(result).toHaveProperty("calc");
    expect(result.mean).toBe(3.5);
    expect(result.calc).toBe(
      "$frac{1+2+3+4+5+6}{6}=3.50$"
    );
  });
});