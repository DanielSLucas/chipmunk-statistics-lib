import createComparisonTable from "./createComparisonTable";

describe("Create comparison table function", () => {
  it("Should be able to return the comparison table based on the input", () => {
    const serializedItems = [
      {        
        custo: 10,
        prazoDeEntrega: 2,
      },
      {       
        custo: 8,
        prazoDeEntrega: 4,
      },
      {       
        custo: 7,
        prazoDeEntrega: 5,
      }
    ];

    const result = createComparisonTable(serializedItems, 'custo', 'lesser');    

    expect(result).toEqual([
      [1, 0.14285714285714285, 0.1111111111111111],
      [7, 1, 0.3333333333333333],
      [9, 3, 1],
    ]);
  });
});