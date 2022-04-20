import fStatistic from "./fStatistic";

describe("F statistic function", () => {
  it("Should be able to return the F statistic for the given mean squares.", () => {
    const result = fStatistic(7, 2);

    expect(result).toHaveProperty('fStatistic');
    expect(result).toHaveProperty('record');
    expect(result.fStatistic).toBe(3.5);
    expect(result.record).toEqual({
      title: "Estatística F",
      calcs: [
        `$F=frac{7}{2}=3.5$`,
      ],
    })
  });
});