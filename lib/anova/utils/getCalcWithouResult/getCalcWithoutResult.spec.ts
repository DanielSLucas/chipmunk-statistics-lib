import getCalcWithoutResult from "./getCalcWithoutResult";

describe("Get calc without result", () => {
  it("Should return the asciimath expression without delimiters and the result", () => {
    const result = getCalcWithoutResult('$1+2+3=61$');

    expect(result).toEqual('1+2+3');
  });
});