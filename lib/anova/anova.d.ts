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
declare function anova(samples: (number | null)[][], alpha: Alpha): AnovaReturn;
export default anova;
