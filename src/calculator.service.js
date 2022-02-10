function CalculatorService() {

    const sumNumbers= '+';
    const subtractNumbers= '-';
    const multiplyNumbers= '*';
    const divideNumbers= '/';

    function calculate(number1, number2, operation) {
        let result;

        switch (operation) {
            case sumNumbers:
                result = number1 + number2;
                break;
            case subtractNumbers:
                result = number1 - number2;
                break;
            case multiplyNumbers:
                result = number1 * number2;
                break;
            case divideNumbers:
                result = number1 / number2;
                break;
            default:
                result = 0;
        }

        return result;
    }

    function concatenateNumber(actualNumber, concatNumber) {
        // case it has just '0' or null, restart the value
        if(actualNumber === 0 || actualNumber === null) {
            actualNumber = '';
        }

        // first digit was '.' concatenate '0' before that '.'
        if(concatNumber === '.' && actualNumber === '') {
            return '0.';
        }

        // Case '.' typed and already contains a '.', just return
        if(concatNumber === '.' && actualNumber.indexOf('.') > -1) {
            return actualNumber;
        }

        return actualNumber + concatNumber;
    }

    return [
        calculate,
        concatenateNumber,
        sumNumbers,
        subtractNumbers,
        multiplyNumbers,
        divideNumbers
    ];
}

export default CalculatorService;