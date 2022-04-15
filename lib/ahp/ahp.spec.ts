import ahp, { HumanInput } from "./ahp";

describe("AHP function", () => {
  it("Should return the best decision and the record with the steps to reach that decision.", () => {
    const data = [
      ['', 'custo', 'prazoDeEntrega'],
      ["opt1", 10, 2],
      ["opt2", 8, 4],
      ["opt3", 7, 5],
    ]

    const humanInput: HumanInput = {
      attributesPrioritiesTable: [
        [1, 7],
        [0.14, 1],
      ],
      attributes: [
        {
          name: 'custo',
          betterWhen: 'lesser',
        },
        {
          name: 'prazoDeEntrega',
          betterWhen: 'lesser',
        },
      ],
    };

    const result = ahp(data, humanInput);
    
    expect(result).toHaveProperty('decision');
    expect(result).toHaveProperty('records');
    expect(result.decision).toEqual({
      name: "opt3",
      custo: 7,
      prazoDeEntrega: 5,
    });
  });
});