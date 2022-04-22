"use strict";
exports.__esModule = true;
var ahp_1 = require("./ahp");
describe("AHP function", function () {
    it("Should return the best decision and the record with the steps to reach that decision.", function () {
        var data = [
            ['', 'custo', 'prazoDeEntrega'],
            ["opt1", 10, 2],
            ["opt2", 8, 4],
            ["opt3", 7, 5],
        ];
        var humanInput = {
            attributesPrioritiesTable: [
                [1, 7],
                [0.14, 1],
            ],
            attributes: [
                {
                    name: 'custo',
                    betterWhen: 'lesser'
                },
                {
                    name: 'prazoDeEntrega',
                    betterWhen: 'lesser'
                },
            ]
        };
        var result = (0, ahp_1["default"])(data, humanInput);
        expect(result).toHaveProperty('decision');
        expect(result).toHaveProperty('decisionPriority');
        expect(result).toHaveProperty('records');
        expect(result.decision).toEqual({
            name: "opt3",
            custo: 7,
            prazoDeEntrega: 5
        });
        expect(result.decisionPriority).toEqual(57.67);
    });
});
