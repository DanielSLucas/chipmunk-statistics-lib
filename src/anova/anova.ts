import { 
  degreesOfFreedom, 
  fStatistic, 
  getFdistribution, 
  meanSquares, 
  sumOfSquares 
} from "./functions";
import { Alpha, Record } from "./functions/types";

interface AnovaTableItem {
  between: number;
  within: number;
  total?: number;
}

interface AnovaReturn {
  sumOfSquares: AnovaTableItem;
  degreesOfFreedom: AnovaTableItem;
  squaresMeans: AnovaTableItem;
  fStatistic: number; 
  fdistribution: number;
  isApproved: boolean;
  records: Record[];
}

/**
 * Return of anova function
 * @typedef {Object} AnovaReturn
 * @property {SumOfSquares} sumOfSquares 
 * @property {DegreesOfFreedom} degreesOfFreedom 
 * @property {MeanSquares} squaresMeans 
 * @property {number} fStatistic 
 * @property {number} fdistribution
 * @property {boolean} isApproved
 * @property {Record[]} records
 */

/**
 * Calculates the one-way ANOVA
 * @param {(number | null)[][]} samples Two-dimensional numeric array of samples
 * @param {'0.5%'|'1%'|'2.5%'|'5%'|'10%'} alpha  
 * @returns {AnovaResults}
 */
function anova(samples: (number | null)[][], alpha: Alpha): AnovaReturn {
  const { record: SSrecord, ...squaresSums } = sumOfSquares(samples);

  const { record: DFrecord, ...freedomDegrees } = degreesOfFreedom(samples);

  const { record: MSrecord, ...squaresMeans } = meanSquares(squaresSums, freedomDegrees);

  const { record: fStatrecord, fStatistic: fStat } = fStatistic(squaresMeans.between, squaresMeans.within);

  const fdistribution = getFdistribution(alpha, freedomDegrees.between, freedomDegrees.within);

  const isApproved = fStat < fdistribution;

  return {
    sumOfSquares: squaresSums,
    degreesOfFreedom: freedomDegrees,
    squaresMeans: squaresMeans,
    fStatistic: fStat, 
    fdistribution,
    isApproved,
    records: [
      SSrecord,
      DFrecord,
      MSrecord,
      fStatrecord
    ]
  }
}

export default anova;
