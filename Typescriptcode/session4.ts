// Session 04 - Error Handling, Custom Errors,
//Inheritance, Overriding, Top Casting

// 1. 1. Error Handling - try/catch/finally
// When something goes wrong at runtime 
// (wrong JSON, divide by zero, file not found), JavaScript throws an
// Error. Use try-catch-finally to handle it gracefully instead of crashing.

// function parsing()
// {
//     try{
//         let result=JSON.parse('{"name": "tom"}');
//         console.log(result);

//     }
//     catch(error)
//     {
//         console.log(error);
//     }
//     finally
//     {
//         console.log("Close the DB Connections");
//     }
// }
// parsing();
// console.log('Done');// code continued after the try catch

// try: code that might throw an error.- catch: runs only if an error occurs inside try.- 
// finally: runs no matter what -- 
// error or no error. 
// Good for cleanup like closing DB connections

// 2. throw - Throwing Errors Manually

// You can throw your own errors using the 'throw' keyword. This is useful for validating inputs.

function div(a: number,b: number): number{
    if(b===0)
    {
        throw new Error(" can not divided by 0");
    }
    return a/b;
}

let result=div(10,10);
console.log(result);

// 3. Custom Error Classes
// You can create your own error classes by extending the built-in Error class. 
// This helps identify what kind of error occured.

class ElementError extends Error{
    constructor(message: string)
    {
        super(message);
    }
}

class BrowserError extends Error{
    constructor(message: string)
    {
        super(message);
    }
}

class FrameWorkError extends Error{
    constructor(message: string)
    {
        super(message);
    }
}

// Using custom errors:

let browser='chrome';
switch(browser){
    case'chrome':
    console.log('lauch the chrome');
    break;

    default:
        console.log('please pass the right browser name');
        throw new BrowserError("Invalid browser name" + browser);

        // The line below will NOT execute 
        // because the error was thrown:console.log('entering the app url');

}