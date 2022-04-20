import { Record } from "../types";

interface FStatisticReturn {
  fStatistic: number;
  record: Record;
}

/**
 * Calculates the F statistic for the given params
 * @param {number} meanSquareBetween Mean square between the columns
 * @param {number} meanSquareWithin Mean square within the columns
 * @returns {number} F statistic
 */
function fStatistic(meanSquareBetween: number, meanSquareWithin: number): FStatisticReturn {
  const fStatistic = meanSquareBetween/meanSquareWithin;
  
  return {
    fStatistic,
    record: {
      title: "Estatística F",
      calcs: [
        `$F=frac{${meanSquareBetween}}{${meanSquareWithin}}=${fStatistic}$`,
      ],
    },
  };
}

export default fStatistic;
