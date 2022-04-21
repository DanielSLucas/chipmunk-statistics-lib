"use strict";
exports.__esModule = true;
var anova_1 = require("./anova");
describe("ANOVA function", function () {
    it("Should return if the variance of an array of samples is acceptable or not.", function () {
        var samples = [
            [26, 27, 24, 25, 29, 28],
            [17, 20, 22, 21, null, null],
            [36, 33, 31, 29, null, null],
            [20, 18, 17, 22, 21, 23]
        ];
        var result = (0, anova_1["default"])(samples, '5%');
        expect(result).toHaveProperty("isApproved");
        expect(result).toHaveProperty("sumOfSquares");
        expect(result).toHaveProperty("degreesOfFreedom");
        expect(result).toHaveProperty("squaresMeans");
        expect(result).toHaveProperty("fStatistic");
        expect(result).toHaveProperty("fdistribution");
        expect(result).toHaveProperty("records");
    });
});
