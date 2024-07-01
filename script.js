function showMessage() {
    alert('Hello from embedded script!');
}

function externalScript() {
    alert('Hello from external script!');
}

function testOperators() {
    // if statement
    let x = 10;
    if (x > 5) {
        alert('x is greater than 5');
    }

    // switch statement
    let day = new Date().getDay();
    switch (day) {
        case 0:
            alert('Sunday');
            break;
        case 1:
            alert('Monday');
            break;
        default:
            alert('Another day');
    }

    // for loop
    for (let i = 0; i < 5; i++) {
        console.log('For loop iteration: ' + i);
    }

    // while loop
    let j = 0;
    while (j < 5) {
        console.log('While loop iteration: ' + j);
        j++;
    }

    // do..while loop
    let k = 0;
    do {
        console.log('Do..While loop iteration: ' + k);
        k++;
    } while (k < 5);

    // break and continue
    for (let m = 0; m < 10; m++) {
        if (m === 3) continue; // skip iteration when m is 3
        if (m === 7) break; // stop the loop when m is 7
        console.log('Loop with break and continue: ' + m);
    }

    // return statement
    function add(a, b) {
        return a + b;
    }
    alert('2 + 3 = ' + add(2, 3));
}

function showAlert() {
    alert('This is an alert message!');
}

function showConfirm() {
    let result = confirm('Do you want to continue?');
    if (result) {
        alert('You pressed OK');
    } else {
        alert('You pressed Cancel');
    }
}

function showPrompt() {
    let name = prompt('What is your name?');
    if (name !== null) {
        alert('Hello, ' + name + '!');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('DOMContentLoadedButton').addEventListener('click', function() {
        alert('Hello from DOMContentLoaded script!');
    });
});
