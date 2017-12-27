function b() {
    console.log('Called b!');
}

b();

const a = 'Hello World!';

console.log(a);

/*
    Execution Content is created in two different phases:

    #1: CREATION PHASE
        - Global Object, 'this', Outer Environment
        - Setup Memory Space for Variables and Functions
        - a.k.a. "Hoisting"

        Variables are set equal to 'undefined' and Functions Setup.

    #2: EXECUTION PHASE 
        - Global Object, 'this', Outer Environment
        
        Runs your code.

*/