import degreesOfFreedom from "./degreesOfFreedom";

describe("Degrees of freedom function", () => {
  it("Should return the degrees of freedom between, within and total for the given samples.", () => {
    const samples = [
      [ 26, 27, 24, 25, 29, 28 ],
      [ 17, 20, 22, 21, null, null ],
      [ 36, 33, 31, 29, null, null ],
      [ 20, 18, 17, 22, 21, 23 ]
    ]
    
    const result = degreesOfFreedom(samples);    

    expect(result).toHaveProperty("between");
    expect(result).toHaveProperty("within");
    expect(result).toHaveProperty("total");
    expect(result).toHaveProperty("record");
    expect(result.between).toBe(3);
    expect(result.within).toBe(16);
    expect(result.total).toBe(19);
    expect(result.record).toEqual({
      title: 'Graus de liberdade',
      calcs: [ 
        '$GLE=4-1=3$', 
        '$GLD=20-4=16$', 
        '$GLT=20-1=19$',
      ],
    });
  });
});