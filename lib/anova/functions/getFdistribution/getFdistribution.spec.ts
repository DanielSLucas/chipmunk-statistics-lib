import getFdistribution from "./getFdistribution";

describe("Get F distribution function", () => {
  it("Should be able to get F distribution for the given, alpha, DFB and DFW.", () => {
    const result = getFdistribution('5%', 3, 16);

    expect(result).toBe(3.239)
  });
});