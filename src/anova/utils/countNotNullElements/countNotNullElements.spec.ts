import countNotNullElements from "./countNotNullElements";

describe("Count not null elements function", () => {
  it("Should return the number of not null elements of an array", () => {
    const result = countNotNullElements([1, 2, null, 4, 5, null, 7, 8]);

    expect(result).toBe(6);
  });

  it("Should return the number of not null elements of a multidimensional array", () => {
    const result = countNotNullElements(
      [
        [1, 2, null],
        [4, null, 6],
        [[7], 8, 9]
      ]
    );

    expect(result).toBe(7);
  });
});