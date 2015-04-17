
describe("Calculator", function () {
    /*Add operations*/
    describe('Add',function(){
        var calculator;
        beforeEach(function () {
            calculator = new Calculator();
        });
        afterEach(function () {
            calculator = null;
        });

        it("Should not be able to evaluate two letters", function () {
            expect(function () {calculator.add('a','b');}).toThrow('Error: Enter valid numbers');
        });

        it("Should not be able to evaluate one letter", function () {
            expect(function () {calculator.add(5,'b');}).toThrow('Error: Enter valid numbers');
            expect(function () {calculator.add('a',5);}).toThrow('Error: Enter valid numbers');
        });

        it("Should be able to evaluate two integer numbers", function () {
            var actRes = calculator.add(1,2);
            var expRes = 3;
            expect(actRes).toBe(expRes);
        });

        it("Should be able to evaluate one integer number", function () {
            calculator.setMemory(5);/*Testing method*/
            var actRes = calculator.add(10);
            var expRes = 15;
            expect(actRes).toBe(expRes);
        });
        it("Should not be able to evaluate two decimal numbers", function () {
            expect(function () {calculator.add(2.05,5.001);}).toThrow('Error: Enter only integer numbers');
        });

        it("Should not be able to evaluate one decimal number", function () {
            expect(function () {calculator.add(2,5.001);}).toThrow('Error: Enter only integer numbers');
            expect(function () {calculator.add(2.05,5);}).toThrow('Error: Enter only integer numbers');
        });
    });

    /*Substract operations*/
    describe('Substract',function(){
        var calculator;
        beforeEach(function () {
            calculator = new Calculator();
        });
        afterEach(function () {
            calculator = null;
        });
        it("Should be able to evaluate two integer numbers",function () {
            var actRes=calculator.substract(500,400);
            var expRes=100;
            expect(actRes).toBe(expRes);
        });
        it("Should be able to evaluate one integer number",function () {
            calculator.setMemory(50);
            var actRes=calculator.substract(40);
            var expRes=10;
            expect(actRes).toBe(expRes);
        });

        it("Should not be able to evaluate two letters", function () {
            expect(function () {calculator.substract('a','b');}).toThrow('Error: Enter valid numbers');
        });

        it("Should not be able to evaluate one letter", function () {
            expect(function () {calculator.substract(5,'b');}).toThrow('Error: Enter valid numbers');
            expect(function () {calculator.substract('a',5);}).toThrow('Error: Enter valid numbers');
        });

        it("Should not be able to evaluate two decimal numbers", function () {
            expect(function () {calculator.substract(2.05,5.001);}).toThrow('Error: Enter only integer numbers');
        });

        it("Should not be able to evaluate one decimal number", function () {
            expect(function () {calculator.substract(2,5.001);}).toThrow('Error: Enter only integer numbers');
            expect(function () {calculator.substract(2.05,5);}).toThrow('Error: Enter only integer numbers');
        });
    });

    /*Multiply operations*/
    describe('Multiply',function(){
        var calculator;
        beforeEach(function () {
            calculator = new Calculator();
        });
        afterEach(function () {
            calculator = null;
        });
        it("Should be able to evaluate two integer numbers", function () {
            var actRes=calculator.multiply(5,10);
            var expRes=50;
            expect(actRes).toBe(expRes);
        });

        it("Should be able to evaluate one integer number",function () {
            calculator.setMemory(50);
            var actRes=calculator.multiply(10);
            var expRes=500;
            expect(actRes).toBe(expRes);
        });

        it("Should not be able to evaluate two letters", function () {
            expect(function () {calculator.multiply('a','b');}).toThrow('Error: Enter valid numbers');
        });

        it("Should not be able to evaluate one letter", function () {
            expect(function () {calculator.multiply(5,'b');}).toThrow('Error: Enter valid numbers');
            expect(function () {calculator.multiply('a',5);}).toThrow('Error: Enter valid numbers');
        });

        it("Should not be able to evaluate two decimal numbers", function () {
            expect(function () {calculator.multiply(2.05,5.001);}).toThrow('Error: Enter only integer numbers');
        });

        it("Should not be able to evaluate one decimal number", function () {
            expect(function () {calculator.multiply(2,5.001);}).toThrow('Error: Enter only integer numbers');
            expect(function () {calculator.multiply(2.05,5);}).toThrow('Error: Enter only integer numbers');
        });
    });

    /*Divide operations*/
    describe('Divide',function(){
        var calculator;
        beforeEach(function () {
            calculator = new Calculator();
        });
        afterEach(function () {
            calculator = null;
        });
        it("Should be able to evaluate two integer numbers", function () {
            var actRes=calculator.divide(15,4);
            var expRes=15/4;
            expect(actRes).toBe(expRes);
        });
        it("Should be able to evaluate one integer number",function () {
            calculator.setMemory(50);
            var actRes=calculator.divide(35);
            var expRes=50/35;
            expect(actRes).toBe(expRes);
        });

        it("Should not be able to divide by zero", function () {
            expect(function () {calculator.divide(50,0);}).toThrow('Error: Dividing by zero');
        });

        it("Should not be able to evaluate two letters", function () {
            expect(function () {calculator.divide('a','b');}).toThrow('Error: Enter valid numbers');
        });

        it("Should not be able to evaluate one letter", function () {
            expect(function () {calculator.divide(5,'b');}).toThrow('Error: Enter valid numbers');
            expect(function () {calculator.divide('a',5);}).toThrow('Error: Enter valid numbers');
        });

        it("Should not be able to evaluate two decimal numbers", function () {
            expect(function () {calculator.divide(2.05,5.001);}).toThrow('Error: Enter only integer numbers');
        });

        it("Should not be able to evaluate one decimal number", function () {
            expect(function () {calculator.divide(2,5.001);}).toThrow('Error: Enter only integer numbers');
            expect(function () {calculator.divide(2.05,5);}).toThrow('Error: Enter only integer numbers');
        });
    });
});