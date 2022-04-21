import getSaatyScaleScore from "./getSaatyScaleScore";

describe('Get Saaty scale score', () => {
  it("Should return 0.2 if the first value beeing compared is less than the second value, and the 'betterWhen' arg is set to 'greater'.", () => {
    const op1Value = 300;
    const op2Value = 700;
    const op3Value = 450;
    
    const result = getSaatyScaleScore(
      op2Value-op1Value,
      op1Value,
      op3Value,
      'greater',
    );    
    
    expect(result).toBe(0.2);
  });

  it("Should return 5 if the first value beeing compared is less than the second value, and the 'betterWhen' arg is set to 'lesser'.", () => {
    const op1Value = 300;
    const op2Value = 700;
    const op3Value = 450;
    
    const result = getSaatyScaleScore(
      op2Value-op1Value,
      op1Value,
      op3Value,
      'lesser',
    );    
    
    expect(result).toBe(5);
  });

  it("Should return 0.2 if the first value beeing compared is greater than the second value, and the 'betterWhen' arg is set to 'lesser'.", () => {
    const op1Value = 300;
    const op2Value = 700;
    const op3Value = 450;
    
    const result = getSaatyScaleScore(
      op2Value-op1Value,
      op3Value,
      op1Value,
      'lesser',
    );    
    
    expect(result).toBe(0.2);
  });
});