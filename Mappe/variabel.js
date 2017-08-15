//opgave 1
var navn = "Jonas";
var alder = 19;
var tekst = "Mit navn er "+navn+" og jeg er "+alder+" år gammel";
console.log(tekst);
//____________________________________________________

//opgave 2
var moms = 1.25;
var pris_uden_moms = 400;
var pris_med_moms = pris_uden_moms * moms;
console.log(pris_med_moms);
var pris_uden_moms_02 = pris_med_moms / moms;
console.log(pris_uden_moms_02);
//____________________________________________________

//opgave 3
var forste = 10;
var anden = 20; 
anden = forste;
forste = forste+forste;
console.log(forste);
console.log(anden);
//____________________________________________________

//opgave 4.1
var carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
//____________________________________________________

//opgave 4.2
var number = 50;
document.getElementById("demo").innerHTML = number;
//____________________________________________________

//opgave 4.3
var carName = "Volvo";
document.getElementById("demo").innerHTML = carName; //Stort bogstav i carName(starter som carname)
//____________________________________________________

//opgave 4.4
var x = 5;
var y = 10;
document.getElementById("demo").innerHTML = x + y;
//____________________________________________________

//opgave 4.5
var x = 5;
var y = 10;
var z = x + y;
document.getElementById("demo").innerHTML = z;
//____________________________________________________

//opgave 4.6
var firstName = "John", lastName = "Doe", age = 35;
document.getElementById("demo").innerHTML =
firstName + " " + lastName + " is " + age;
//____________________________________________________

