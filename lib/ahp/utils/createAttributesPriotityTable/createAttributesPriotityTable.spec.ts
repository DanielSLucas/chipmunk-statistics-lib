import createAttributesPriotityTable from "./createAttributesPriotityTable";

describe("Create Attributes Priotity Table", () => {
  it("Should be able to create a comparison table based on a list of the attributes ordered by priority.", () => {
    const result = createAttributesPriotityTable(
      ['preco', 'potencia', 'km/L'],
      ['km/L', 'preco', 'potencia'],
    );

    expect(result).toEqual([
      [1, 5, 0.2],
      [0.2, 1, 0.1111111111111111],
      [5, 9, 1]
    ]);
  });
});