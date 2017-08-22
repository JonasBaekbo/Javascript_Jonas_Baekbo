// function doSomething(someValue, callback){
//     someValue += 'Vi tester noget!';


//     callback(someValue);
//  }
//  // denne funktion vil blive udført som en callback FRA doSomething funktionen
//  function outputSomething(value){
//     console.log('<html>' + value + '</html>');
//  }

//  doSomething('text', outputSomething);

function thirdPromise(someBoolValue) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (someBoolValue) {
                resolve('Denne besked kommer fra "resolve"');
            } else {
                reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
            }
        }, 2000);
    })
}

thirdPromise(false)
    .then((success) => {
        console.log(success);
        throw new Error('lad os sige noget gik galt!');
        return 'Information sendes videre';
    }).then((nextSuccess) => {
        console.log(nextSuccess);
    }).catch((error) => {
        console.log(error);
    })