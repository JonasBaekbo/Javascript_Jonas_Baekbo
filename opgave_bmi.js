function bmi(hoejde, vaegt) {
    var bmi = vaegt / Math.pow(hoejde, 2).toFixed(2);
    if (bmi < 16.00) {
        console.log("Du er stærkt undervægtig");
    }
    if (bmi => 16.00 && bmi <= 16.99) {
        console.log("Du er moderat undervægtig");
    }
    if (bmi => 17.00 && bmi <= 18.49) {
        console.log("Du muligvis er undervægtig.");
    }
    if (bmi => 18.50 && bmi <= 24.99) {
        console.log("Du har en normal BMI");
    }
    if (bmi => 25.00 && bmi <= 27.49) {
        console.log("Du er muligvis overvægtig");
    }
    if (bmi => 27.50 && bmi <= 29.99) {
        console.log("Du er overvægtig.");
    }
    if (bmi => 30.00 && bmi <= 34.99) {
        console.log("Overvægtig fedme klasse 1.");
    }
    if (bmi => 35.00 && bmi <= 39.99) {
        console.log("Overvægtig fedme klasse 2.");
    }
    if (bmi > 40) {
        console.log("Overvægtig fedme klasse 3.");
    }
}
bmi(1.50, 55);