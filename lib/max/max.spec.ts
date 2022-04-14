import max from "./max";

describe('Max function', () => {
  it('Should return the greatest number in a array of numbers', () => {
    const numbers = [1, 3, 5, 7, 4, 2];
    
    const result = max(numbers);

    expect(result).toBe(7);
  });
});