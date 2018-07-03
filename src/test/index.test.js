
var stringCalculator = function(){

    function sum(){
    }

    return {
        sum: sum
    }

}();

describe('', function(){

    test('Returns casted single-digit number from string', function() {
        expect(stringCalculator.sum("1")).toBe(1);
    });


});



