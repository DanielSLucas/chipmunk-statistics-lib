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
exports.sumValues = exports.mean = exports.getCalcWithoutResult = exports.countNotNullElements = void 0;
var countNotNullElements_1 = require("./countNotNullElements/countNotNullElements");
__createBinding(exports, countNotNullElements_1, "default", "countNotNullElements");
var getCalcWithoutResult_1 = require("./getCalcWithouResult/getCalcWithoutResult");
__createBinding(exports, getCalcWithoutResult_1, "default", "getCalcWithoutResult");
var mean_1 = require("./mean/mean");
__createBinding(exports, mean_1, "default", "mean");
var sumValues_1 = require("./sumValues/sumValues");
__createBinding(exports, sumValues_1, "default", "sumValues");
