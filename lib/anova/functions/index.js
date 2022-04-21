"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.sumOfSquares = exports.meanSquares = exports.getFdistribution = exports.fStatistic = exports.degreesOfFreedom = void 0;
var degreesOfFreedom_1 = require("./degreesOfFreedom/degreesOfFreedom");
__createBinding(exports, degreesOfFreedom_1, "default", "degreesOfFreedom");
var fStatistic_1 = require("./fStatistic/fStatistic");
__createBinding(exports, fStatistic_1, "default", "fStatistic");
var getFdistribution_1 = require("./getFdistribution/getFdistribution");
__createBinding(exports, getFdistribution_1, "default", "getFdistribution");
var meanSquares_1 = require("./meanSquares/meanSquares");
__createBinding(exports, meanSquares_1, "default", "meanSquares");
var sumOfSquares_1 = require("./sumOfSquares/sumOfSquares");
__createBinding(exports, sumOfSquares_1, "default", "sumOfSquares");
