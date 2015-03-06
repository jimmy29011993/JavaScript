/**
 * Created by Jimmy Maldonado on 3/6/2015.
 */
window.onload=
function Myfunction() {
    var name = window.prompt('What is your name');
    var edad = window.prompt('How old are you');
    if(edad > 50)
        window.alert('You are an old person');
    else
        window.alert('You are a young person');
};