// var a = 'Hello World!';

// function b() {
//     console.log('Called b!');
// }

// b();
// console.log(a);

var a;
console.log(a);

if (a === undefined) {
    console.log('a is undefined!');
} else {
    console.log('a is defined!');
}


/*
    Execution Content is created in two different phases:

    #1: CREATION PHASE
        - Global Object, 'this', Outer Environment
        - Setup Memory Space for Variables and Functions
        - a.k.a. "Hoisting"

        Variables are set equal to 'undefined' and Functions Setup.

    #2: EXECUTION PHASE 

*/