var Calculator = function(){
    /**
     * Calculator memory
     * @type {int}
     */
    var _memory = 0;

    /**
     * Return the sum of a and b or a and the calculator memory
     * @return {int}
     */
    this.add = function(a,b){
        if(isNaN(a) || ( b != undefined && isNaN(b)))
        {
            throw('Error: Enter valid numbers');
        }
        else if((a % 1 != 0) || ( b != undefined && b % 1 != 0))
        {
            throw('Error: Enter only integer numbers');
        }
        else
        {
            if(b != undefined){
                _memory = a + b;

            }else{
                _memory = _memory + a;
            }
            return _memory;
        }
    };

    /**
     * Return the subtraction of a minus b or a minus the calculator memory
     * @return {int}
     */
    this.substract = function(a,b){
        if(isNaN(a) || ( b != undefined && isNaN(b)))
        {
            throw('Error: Enter valid numbers');

        }
        else if((a % 1 != 0) || ( b != undefined && b % 1 != 0))
        {
            throw('Error: Enter only integer numbers');
        }
        else
        {
            if(b != undefined){
                _memory = a - b;
            }else{
                _memory = _memory - a;
            }
            return _memory;
        }
    };

    /**
     * Return the multiplication of a and b or a and the calculator memory
     * @return {int}
     */
    this.multiply = function(a,b){
        if(isNaN(a) || ( b != undefined && isNaN(b)))
        {
            throw('Error: Enter valid numbers');

        }
        else if((a % 1 != 0) || ( b != undefined && b % 1 != 0))
        {
            throw('Error: Enter only integer numbers');
        }
        else
        {
            if(b != undefined){
                _memory = a * b;
            }else{
                _memory = _memory * a;
            }
            return _memory;
        }
    };

    /**
     * Return the division of a and b or a and the calculator memory
     * @return {int}
     */
    this.divide = function(a,b){
        if(isNaN(a) || ( b != undefined && isNaN(b)))
        {
            throw('Error: Enter valid numbers');

        }
        else if((a % 1 != 0) || ( b != undefined && b % 1 != 0))
        {
            throw('Error: Enter only integer numbers');
        }
        else
        {
            if(b != undefined){
                if(b == 0){
                    throw('Error: Dividing by zero');
                }else{
                    _memory =  a / b;
                }
            }else{
                _memory = _memory / a;
            }
            return _memory;
        }
    };

    /**
     * Reset the calculator memory
     */
    this.resetMemory = function () {
        _memory = 0;
    };

    /**
     * Set the calculator memory
     */
    this.setMemory = function(value){
        _memory = value;
    };
};