
var stringCalculator = function(){

    function sum(expression){
        var number = Number(expression);
        if(number){
            return number;
        } else {
            var characters = expression.split(',');
            var result = 0;
            for (var i = 0; i < characters.length; i++){
                result += Number(characters[i]);
            }
            return result;
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
        expect(stringCalculator.sum("1,2,1")).toBe(4);
    });


});



