var stringCalculator = function () {

    function sum(expression) {
        var characters = expression.split(',');
        var result = 0;
        for (var i = 0; i < characters.length; i++) {
            var castedNumber = Number(characters[i]);
            result = (castedNumber) ? result + castedNumber : result;
        }
        return result;
    }

    return {
        sum: sum
    }

}();

describe('', function () {

    test('Returns casted single-digit number from string', function () {
        expect(stringCalculator.sum("1")).toBe(1);
    });

    test('Sum numbers separated by comma', function () {
        expect(stringCalculator.sum("1,2")).toBe(3);
        expect(stringCalculator.sum("1,2,1")).toBe(4);
    });

    test('Return casted number and ignore character', function () {
        expect(stringCalculator.sum("1,a")).toBe(1);
    });


});



