import React from "react";
import ReactDOM from "react-dom";
import CalculatorService from './calculator.service'

describe('CalculatorService Test', () => {

    const [calculate, concatenateNumber, sumNumbers, subtractNumbers, multiplyNumbers, divideNumbers] = CalculatorService();

    it('Must ensure that 1 + 4 equals 5', () => {
        let sum = calculate(1, 4, sumNumbers);
        expect(sum).toEqual(5);
    });

    it('Must ensure that 4 - 1 equals 3', () => {
        let subtract = calculate(4, 1, subtractNumbers);
        expect(subtract).toEqual(3);
    });

    it('Must ensure that 4 * 2 equals 8', () => {
        let times = calculate(4, 2, multiplyNumbers);
        expect(times).toEqual(8);
    });

    it('Must ensure that 1 / 4 equals 2', () => {
        let divide = calculate(1, 4, divideNumbers);
        expect(divide).toEqual(0.25);
    });

    it('Must return 0 for invalid operation', () => {
        let invalidOperation = calculate(1, 4, '%');
        expect(invalidOperation).toEqual(0);
    });
});