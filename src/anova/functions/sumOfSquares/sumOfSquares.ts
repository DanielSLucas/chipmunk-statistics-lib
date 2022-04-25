import { countNotNullElements, mean } from "../../utils";
import { Record } from "../types";

interface SumOfSquaresReturn {
  total: number;
  between: number;
  within: number;
  record: Record;
}

/**
 * Return of sumOfSquares function
 * @typedef {Object} SumOfSquaresReturn
 * @property {number} total sum of squares total (SST)
 * @property {number} between sum of squares between/columns (SSB)
 * @property {number} within sum of squares within/error (SSW)
 * @property {Record} record the calculations made
 */

/**
 * Calulates the sum of squares: total (SST), between/columns (SSB), within/error (SSW) for the given samples
 * @param {(number | null)[][]} samples Two-dimensional numeric array of samples
 * @returns {SumOfSquaresReturn} All the sum of squares results
 */
 function sumOfSquares(samples: (number | null)[][]): SumOfSquaresReturn {
  const { mean: overallMean, calc: overallMeanCalc } = mean(samples);
  let ssb = 0;
  let ssw = 0;

  let meansCalcs = [`média geral$=$${overallMeanCalc}`];
  let sswCalcs = '$SSD=';
  let ssbCalcs = '$SSE=';

  samples.forEach((sample, i) => {
    const { mean: sampleMean, calc: sampleMeanCalc } = mean(sample);
    meansCalcs.push(
      `média amostras #${i+1}$=$${sampleMeanCalc}`
    );

    const diffToOverallMean = sampleMean - overallMean;
    ssw += Math.pow(diffToOverallMean, 2) * countNotNullElements(sample);
    sswCalcs += `${sswCalcs === '$SSD=' ? '' : '+'}(${sampleMean.toFixed(2)}-${overallMean.toFixed(2)})^2xx${countNotNullElements(sample)}`

    sample.forEach(value => {      
      if (value && !Number.isNaN(value)) {
        const diffToSamplelMean = value - sampleMean;           
        ssb += Math.pow(diffToSamplelMean, 2);
        ssbCalcs += `${ssbCalcs === '$SSE=' ? '' : '+'}(${value.toFixed(2)}-${sampleMean.toFixed(2)})^2`
      }          
    });         
  });
  
  sswCalcs += `=${ssw.toFixed(2)}$`;
  ssbCalcs += `=${ssb.toFixed(2)}$`;

  const sst = ssw + ssb;
  const sstCalc = `total$=${ssw.toFixed(2)}+${ssb.toFixed(2)}=${sst.toFixed(2)}$`  

  const record = {
    title: "Soma de quadrados",    
    calcs: [
      ...meansCalcs,
      ssbCalcs,
      sswCalcs,
      sstCalc,
    ]
  };   

  return {
    between: ssw,
    within: ssb,
    total: sst,
    record,
  };
}

export default sumOfSquares;