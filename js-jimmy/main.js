/**
 * Created by Jimmy Maldonado on 3/6/2015.
 */
/*var x = function() {
    var name = window.prompt('What is your name');
    var edad = window.prompt('How old are you');
    if(edad > 50)
        window.alert('You are an old person');
    else
        window.alert('You are a young person');
};

Person = function (name,age) {
    this.name =name;
    this.age = age;
};*/
var countWords = function(paragraph){
    var par=window.prompt("Enter the paragraph:");
    var words = par.split(" ");
    return words.length;
};
var getDate = function(){
   var day = new Date(day);
   var date = new Date
};


var doOperations = function(){
    console.log("The SUM: "+getSum(arguments,arguments.length-1));
    console.log("The MAX: "+getMax(arguments,arguments.length-1,arguments[arguments.length-1]));
    console.log("The MIN: "+getMin(arguments,arguments.length-1,arguments[arguments.length-1]));
    console.log("The AVG: "+getSum(arguments,arguments.length-1)/arguments.length);
};
var getSum=function(numbers,pos){
    var res=0;
    if(pos == 0){
        res= res + numbers[pos];
    }
    else{
        res= res + numbers[pos] + getSum(numbers,pos-1);
    }
    return res;
};

var getMax=function(numbers,pos,max)
{
    if(pos == 0){
        if(numbers[pos]>max)
            max= numbers[pos];
    }
    else{
        if(numbers[pos]>max)
            max = getMax(numbers,pos-1,numbers[pos]);
        else
            max = getMax(numbers,pos-1,max);
    }
    return max;
};

var getMin=function(numbers,pos,min)
{
    if(pos == 0){
        if(numbers[pos]<min)
            min= numbers[pos];
    }
    else{
        if(numbers[pos]<min)
            min = getMin(numbers,pos-1,numbers[pos]);
        else
            min = getMin(numbers,pos-1,min);
    }
    return min;
};