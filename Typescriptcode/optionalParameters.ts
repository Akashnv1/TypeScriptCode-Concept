// 1. Optional Parameters
// In Typescript , you can mark a parameter as optional using the ? symbol. Optional parameters
// must come after the required parameters.

// function printData(name: string, age?: number) : void{
//     console.log(name);
//     console.log(age);

// }
// printData('Root');// Root , undefined
// printData('Root',30); // Root 30

// // Practical Example Browser launch

// function launchBrowser(browser:string,headless?:boolean): boolean
// {
//     if(headless)
//     {
//         console.log('Run the test cases in ' + browser + 'with headless mode'+ headless);
//         return true;

//     }else {
//             console.log('Run the test cases in normal mode' + browser);
//             return true;
//         }
//     }

// let result=launchBrowser('chrome',false);
// console.log(result);

// // Combining the normal , optional and rest parameter
// // Order=> normal param->optional param->rest param

// function search(name: string,color: string,price?:number,seller?:string,...values:any): void
// {
//     if(price && seller)
//     {console.log('performing search' , name,color,price,seller);
//     }
//     else{
//         console.log('performing search' , name,color)
//     }
// }
// search('Mac book','white',1000,'Amazon');
// search('Mac book','white');

// In the typescript , you specify the return type of the 
// function after the parentheses using a colon

// function launchBrowser(name:string):boolean
// {
//     switch(name.toLowerCase().trim()){
//         case 'chrome':
//             console.log('chrome is launched');
//             return true;

//               case 'firefox':
//             console.log('ff is launched');
//             return true;

//              case 'edge':
//             console.log('edge is launched');
//             return true;

//             default:
//                 console.log('Please pass the right browser')
//                 return false;


//     }
    

// // }

// // let result=launchBrowser('chrome');
// // console.log(result);

// // 3. Functions with Promises (async/await)

// // When a function returns a Promise, 
// // you specify the return type as Promise<type>. This is very common in playwright

// function getNumber() : Promise<number>
// {
//     return Promise.resolve(100);
// }

// getNumber().then((result)=>console.log(result));

// function getTraninerName() : Promise<string>
// {
//     return Promise.resolve('naveen');
// }
// getTraninerName().then((result)=>console.log(result));


// // Promise with custom type and setTimeout:

// type userType={name: string,age:number};

// function getUserData(): Promise<userType>{


// return new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         let user={name:'akash',age:27};
//         resolve(user);
        
//     }, 3000);
// })
// }

// async function getMyUserData(){
// let myUser=await getUserData();
// console.log(myUser);
// }
// getMyUserData();

// Playwright sytle promise

// function click(element:string): Promise<void>
// {
//     console.log('click on' + element);
//      return  Promise.resolve();
   
// }

// async function doClick(element:string):Promise<void>
// {
//     await click(element);
// }

// doClick('forgotPasswordlink');

//In Playwright, most actions like click(), 
// fill(), goto() return Promise<void>. You always use 'await' with them.


// TypeScript supports function overloading.
//  You define multiple signatures (prototypes) but only one implementation with body.

// step 1 : define signature (no body):

function combination(a: number,b:number): number;
function combination(a: string,b:string): string;
function combination(a: string,b:number): string;
function combination(a: number,b:string): string;

// step 2 one implementation with `any` types.
function combination(a:any,b:any)
{
    return a+b;
}
//calling with matching signatures:

console.log(combination(100, 200)); //
console.log(combination('tom', 10)); //
console.log(combination('tom', 'pop'));
console.log(combination(100, 'pop')); // '100pop'

//Unlike JavaScript where the last function wins, TypeScript function overloading
//  gives you compile-time checking for each signature

// Enum

// Enums let you define a set of named constants. 
// They make your code more readable and prevent typos in hardcoded string value

enum BROWSERS {CHROME = 'chrome',FIREFOX = 'firefox',EDGE = 'edge',SAFARI = 'safari'}
enum ENVS {QA = 'qa',STAGE = 'stage',PROD = 'prod'}

console.log(BROWSERS.CHROME); // 'chrome'
console.log(BROWSERS.FIREFOX); // 'firefox'

