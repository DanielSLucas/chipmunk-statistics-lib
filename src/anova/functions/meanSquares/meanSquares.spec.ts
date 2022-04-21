import meanSquares from "./meanSquares";

describe("Mean squares function", () => {
  it("Should return the mean square between and within.", () => {
    const ss = {
      between: 10,
      within: 5,
      total: 15,
    };

    const df = {
      between: 2,
      within: 5,
      total: 7,
    }
    
    const result = meanSquares(ss, df);

    expect(result).toHaveProperty("between");
    expect(result).toHaveProperty("within");
    expect(result).toHaveProperty("record");
    expect(result.between).toBe(5);
    expect(result.within).toBe(1);
    expect(result.record).toEqual({
      title: "Quadrado médio",
      calcs: [
        "$QME=frac{10}{2}=5$",
        "$QMD=frac{5}{5}=1$"
      ],
    });
  });
});