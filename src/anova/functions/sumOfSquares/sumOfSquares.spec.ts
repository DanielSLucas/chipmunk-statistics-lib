import sumOfSquares from "./sumOfSquares";

describe("Sum of Squares function", () => {
  it("Should return the sum of squares between, within and total for the given samples", () => {
    const samples = [
      [ 26, 27, 24, 25, 29, 28 ],
      [ 17, 20, 22, 21, null, null ],
      [ 36, 33, 31, 29, null, null ],
      [ 20, 18, 17, 22, 21, 23 ]
    ]
    
    const result = sumOfSquares(samples);

    expect(result).toHaveProperty("between");
    expect(result).toHaveProperty("within");
    expect(result).toHaveProperty("total");
    expect(result).toHaveProperty("record");
    expect(result.between).toBe(457.86666666666656);
    expect(result.within).toBe(85.08333333333333);
    expect(result.total).toBe(542.9499999999999);
  });
});