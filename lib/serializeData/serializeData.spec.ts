import serializeData from "./serializeData";

describe('Serialize data function', () => {
  it('Should serialize the data of an two-dimensional array into an object with the values of each attribute and the rows of the table serialized as objects.', () => {
    const data = [
      ['', 'price', 'power'],
      ['opt1', 9000, 160],
      ['opt2', 8000, 125],
    ];
    
    const result = serializeData(data);    

    expect(result).toHaveProperty('attributesValues');
    expect(result).toHaveProperty('serializedItems');
    expect(result.attributesValues).toEqual({
      name: [ 'opt1', 'opt2' ],
      price: [ 9000, 8000 ],
      power: [ 160, 125 ]
    });
    expect(result.serializedItems).toEqual([
      { name: 'opt1', price: 9000, power: 160 },
      { name: 'opt2', price: 8000, power: 125 }
    ]);
  });
});