var Calculator = function(){
    var _memory = 0;
    //var _res;
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
    }
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
    }
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
    }
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
    }
    this.resetMemory = function () {
        _memory = 0;
    };

    this.setMemory = function(value){
        _memory = value;
    };
};