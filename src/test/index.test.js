
var stringCalculator = function(){

    function stringSum(expression){
        var stringNumbers = split(expression, ',');
        var numbers = clean(stringNumbers);
        return sumValues(numbers);
    }

    function split(expression, separator){
        return expression.split(separator);
    }

    function clean(collection){
        return collection.filter(function(b) {
            return Number(b);
        })
    }

    function sumValues(stringNumbers){
        return stringNumbers.reduce(function(acc, value) {
            return acc + Number(value);
        }, 0)
    }

    return {
        stringSum: stringSum
    }


}();

describe('Test the stringSum function', function(){
    test('Sum two comma separated numbers', function(){
        expect(stringCalculator.stringSum("1,2")).toBe(3);
    });

    test('Sum a single two-digit number', function(){
        expect(stringCalculator.stringSum("10")).toBe(10);
    });

    test('Sum a comma separated set of characters', function(){
        expect(stringCalculator.stringSum("1,a,A,45,-")).toBe(46);
    });

    test('Sum with two consecutive commas', function(){
        expect(stringCalculator.stringSum("1,,5,e")).toBe(6);
    });
});



