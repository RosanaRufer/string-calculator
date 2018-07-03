var stringCalculator = function () {

    function sum(expression) {
        var separator = extractSeparator(expression);
        var expressionWithoutSeparator = removeSeparatorConfiguration(expression, separator);
        var characters = expressionWithoutSeparator.split(separator);
        var result = 0;
        for (var i = 0; i < characters.length; i++) {
            var number = Number(characters[i]);
            result = (number) ? result + number : result;
        }
        return result;
    }

    function removeSeparatorConfiguration(expression, separator){
        return(expression.replace('//'+separator+';', ''));
    }

    function extractSeparator(expression) {
        var defaultSeparator = ',';
        var matchSeparator = new RegExp('\/\/(.);.*');
        var result = matchSeparator.exec(expression);
        return result ? result[1] : defaultSeparator;
    }

    return {
        sum: sum
    }

}();

describe('stringCalculator', function () {

    describe('Given comma as separator', function () {

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

        test('Empty expression sums 0', function(){
            expect(stringCalculator.sum("")).toBe(0);
        });
    });

    describe('Given "#" as separator ', function(){
        test('Sum numbers separated by #', function () {
            expect(stringCalculator.sum("//#;1#2")).toBe(3);
            expect(stringCalculator.sum("//#;1#2#1")).toBe(4);
        });
    });

    describe('Given "&" as separator', function () {
        test('Sum numbers separated by &', function() {
            expect(stringCalculator.sum("//&;1&2")).toBe(3);
        });
    })
});

