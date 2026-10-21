// let isActive: boolean=true;

// isActive=false;
// console.log(isActive);

// let num: number =100;
// console.log(num);
// console.log(typeof num);

// // Special Types: null,un-defined,bigint

// let user : null=null;
// let x: undefined=undefined;
// console.log(user);
// console.log(x);


// let dis: bigint=100n;
// console.log(10n+dis);

// // Any & Un-known
// let testValue: any;
// testValue=100;
// testValue='testing';
// testValue=true;
// console.log(testValue);

let value : unknown='hello';
console.log(value);
console.log(typeof value);

// void & never
// void means the function does not return anything. 
// never means the function will never complete normally -- it alwaysthrows an erroror runs forever

// void: no return value

function testing(): void
{
    console.log("hello testing");
}

testing();

function getMarks(stName: string): void{
    console.log(stName,100);
        console.log(stName.length);
}
getMarks('Tom');

// // never : Always throws an erroror infinite loop
// function throwElementError(locator : string): never
// {
//     throw new Error(locator + " is not found");
    
// }
// throwElementError('#login');

// Uninon Type
// A union type allows a variable to hold more than one type. Use the | (pipe) symbol.

let id: string | number;
id="123asd"// valid
id=1234;// valid
console.log(id);

// Arrays
// Number Array:
let marks: number[]=[20,20,30,40];
console.log(marks);
console.log(marks.length);

let devices : string[] =["macbook pro","airtel sim","Iphone","imac"];

// Mixed Array using generics
let names: Array<string | number>=["tom","Kunal","Akash",100];
let salary:Array<number>=[100,200,300];
console.log(names);
console.log(salary);

// Tupel
// A tuple is a fixed-length array where each position has a specific type. 
// Think of it as a static, structured array.

let myUser: [string,number]=["Akash",12.33];
console.log(myUser);

let person:[string, string, number, boolean] =["Akash","Kumar",12.44,true];

//Unlike regular arrays, tuples enforce both the type and the position of each element.

// Type Alias(Custom Type)

// Custom type object
// type userType={
//     readonly name: string,
//     salary: number,
//     isActive: boolean,
//     city: string

// }

// let newUser:userType={
//     name: 'Akash',
//     salary:12.33,
//     isActive:true,
//     city: 'Delhi'
// }
// console.log(newUser);
// newUser.salary=33.44; // Allowed
// newUser.name='dfvjkhb'// Error becaue readyonly


// Custom type for union

type orderIDType=string | number;
let orderID: orderIDType=123;
orderID='3434';// also valid

type statusCodeType=string | number;
let okStatusCode: statusCodeType=200;
okStatusCode='200 OK';
console.log(okStatusCode);

// readonly means the property can be set once during creation but cannot be changed later.



