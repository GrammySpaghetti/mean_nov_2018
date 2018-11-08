// PROBLEM 1 - setting types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = '9'; // placing quotes around 9 turns it into a string which is set as the type when the variable is created

// PROBLEM 2 - setting the types for function parameters
function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello('9')); // 9 must be sent as a string argument

// PROBLEM 3 - optional parameters
function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName: string;
    if (middleName == undefined) {
        fullName = `${firstName} ${lastName}`;
    }
    else {
        fullName = `${firstName} ${middleName} ${lastName}`;
    }
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));
//to fix set middleName to optional with a ? and run an if check to change full name to remove undefined values; and define fullName before the if checks

// PROBLEM 4 - interfaces and function parameters
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4 // forgot the s in belts
}

// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

// PROBLEM 5 - classes and function parameters
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja('Shane', 'Shamerson'); // these need to be new instances of Ninja and pass in the parameters required to construct the instance
const turing = new Ninja('Alan', 'Turing');
// Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = {
//    fullName: "Alan Turing",
//    firstName: "Alan",
//    lastName: "Turing"
// }
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

// PROBLEM 6 - arrow functions
var increment = x => x + 1;
console.log(increment(3));
var square = (x:number) => x * x;
console.log(square(4));
var multiply = (x: number,y: number) => x * y;
var math = (x: number, y: number) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
console.log(math(2,1))

// PROBLEM 8 - arrow functions and 'this'
class Elephant {
   constructor(public age: number){}
   birthday = () =>{ // use an arrow function here because where you define the function determines what this will be
       this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
