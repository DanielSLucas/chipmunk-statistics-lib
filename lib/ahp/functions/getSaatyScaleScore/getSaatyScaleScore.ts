/**
 * Compares two options and gives the score based on the saaty scale.
 * @param {number} greatestDif - The best option value minus the worst option value.
 * @param {number} op1Value - Option one value.
 * @param {number} op2Value - Option two value.
 * @param {'greater' | 'lesser'} betterWhen - Tells if the attribute value that is beeing compared is better when lesser or greater.
 * @returns {number} The score based on the saaty scale.
 * 1 - equal;
 * 3 - slightly superior;
 * 5 - superior;
 * 7 - significantly superior;
 * 9 - extremely superior;
 * 
 * OR
 * 
 * 1/1 - equal;
 * 1/3 - slightly inferior;
 * 1/5 - inferior;
 * 1/7 - significantly inferior;
 * 1/9 - extremely inferior;
 */
function getSaatyScaleScore(greatestDif: number, op1Value: number, op2Value: number, betterWhen: 'greater' | 'lesser'): number {
  const saatyScale = [1,3,5,7,9];
  
  const num = op1Value > op2Value ?  op1Value - op2Value : op2Value - op1Value;

  const score = (num*9)/greatestDif;

  let saatyScaleScore=1;

  saatyScale.forEach((item, i) => {
    if (score > item) {
      saatyScaleScore = saatyScale[i+1]
    }
  });

  if (betterWhen === 'greater' && op1Value < op2Value) {    
    return 1/saatyScaleScore;
  }

  if (betterWhen === 'lesser' && op1Value > op2Value) {    
    return 1/saatyScaleScore;
  }

  return saatyScaleScore;
}

export default getSaatyScaleScore;