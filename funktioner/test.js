hello();
function hello(){
    console.log('hello');
}


//_____________Hoisting_____________
sayHello('Jonas');
function sayHello(who){
    console.log('hello', who);
}
sayHello('Natasja');
//__________
// Hvis funktionen tildeles en variabel er der ingen hoisting
 // "sayHey('test for hoisting?');" flyt ned under funktionen

var sayHey = function sayHey(value) {
    console.log(value);
}
sayHey('test for hoisting?');