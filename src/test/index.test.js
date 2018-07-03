
var stringCalculator = function(){

    function sum(expression){
        var number = Number(expression);
        if(number){
            return number;
        } else {
            var characters = expression.split(',');
            return Number(characters[0]) + Number(characters[1]);
        }
    }

    return {
        sum: sum
    }

}();

describe('', function(){

    test('Returns casted single-digit number from string', function() {
        expect(stringCalculator.sum("1")).toBe(1);
    });

    test('Sum numbers separated by comma', function() {
        expect(stringCalculator.sum("1,2")).toBe(3);
    });


});



