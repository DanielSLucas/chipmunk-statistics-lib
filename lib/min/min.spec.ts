import min from "./min";

describe('Min function', () => {
  it('Should return the smallest number in a array of numbers', () => {
    const numbers = [3, 5, 1, 7, 4, 2];
    
    const result = min(numbers);

    expect(result).toBe(1);
  });
});