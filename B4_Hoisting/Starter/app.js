var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

b();
console.log(a);

/*
    Execution Content is created in two different phases:

    #1: CREATION PHASE
        - Global Object, 'this', Outer Environment
        - Setup Memory Space for Variables and Functions
        - a.k.a. "Hoisting"

    #2: EXECUTION PHASE 

*/