// Third Execution Context
function b() {
    var myVar;
    console.log(myVar);
}

// Second Execution Context
function a() { 
    const myVar = 2; 
    console.log(myVar);
    b();
}

// First Execution Context
const myVar = 1; 
console.log(myVar);
a();