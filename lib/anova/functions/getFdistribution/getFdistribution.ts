const Fdistributions = require('./Fdistributions.json');
import { Alpha } from "../types";

/**
 * Gets the F distribution of Fisher-Snedecor for the given alpha, 
 * DFB (degrees of freedom between) and DFW (degrees of freedom within)
 * @param {'0.5%'|'1%'|'2.5%'|'5%'|'10%'} alpha 
 * @param {number} DFB 
 * @param {number} DFW 
 * @returns {number}
 */
function getFdistribution(alpha: Alpha, DFB: number, DFW: number): number {
  return Fdistributions[alpha][`${DFB}x${DFW}`];
}

export default getFdistribution;