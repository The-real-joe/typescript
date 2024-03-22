import HelloWorld from "./components/HelloWorld.vue";

function sayHi(name:string){
    console.log(`hello there ${name.toUpperCase}`);

}

sayHi('john');
sayHi(3);

function calculateDiscount(price:number): number {
    const hasDiscount = true
    if(hasDiscount){
       return price
        // return '10% discount'
    }
    return price * 0.9;
}
const finalPrice = calculateDiscount(200);

function addThree(number:any){
    let anotherNum:number = 3
    return number+ anotherNum
}

let result = addThree(3);
const someValue = result;

let namesArray:string = 'peter, sally, john';
function checkForName(names:string):boolean{
    return namesArray.includes(names)
}
let nameToCheck = 'john';
checkForName(nameToCheck);

function calculatePrice(price:number, discount?:number):number{
    return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 10);

function calculateScore(initialScore:number, penaltyPoints:number = 0):number{
    return initialScore - penaltyPoints
}

let scoreAfterPenalty = calculateScore(100, 10);
let scoreWithoutPenalty = calculateScore(100);

function sum(message:string, ...numbers:number[]):string{
const doubled = numbers.map((num)=>num*2);
console.log(doubled);
let total = numbers.reduce((previous, current)=>{return previous + current}, 0);

return `${message} ${total}`
}
 result = sum('the total is: ', 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000);
 console.log(result)

 function logMessage(message:string){
    console.log(message);
 }

 logMessage(`hello, typescript`);

 function processInput(input:string | number){
if(typeof input === 'string'){
    console.log(input.toUpperCase());
} else if(typeof input === 'number'){
    console.log(input*2);
}
 }

 function createEmployee({id}:{id:number}):{id:number;isActive:boolean}{
    return{id, isActive: id % 2 === 0};
 }
    const first = createEmployee({id:1});
    const second = createEmployee({id:2});
    console.log(first, second);

//alternative    
 
function cretaeStudent(student:{id:number,name:string}):void{
    console.log(`welcome to the course ${student.name.toUpperCase()}`);
}

 const newStudent = {
    id:5,
    name:'john'
 };

 cretaeStudent(newStudent);
cretaeStudent({id:1, name:'bob'});
 
function processData(input:string | number, config:{reverse:boolean}={reverse:false}):string | number{
if(typeof input === 'number'){
    return input * input
} else {
    return config.reverse? input.toUpperCase().split('').reverse().join(''):input.toUpperCase()
}
}

type User = {
    id:number
    name:string
    isActive:boolean
}

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
  };
  const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
  };
  
  function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
  }

  type STringOrNumber = string | number;

  let value: STringOrNumber;

  value = 1;
  value = 'hello';

  type Theme = 'light' | 'dark';
  let theme: Theme = 'dark';
  theme = 'light';

  function setTheme(t:Theme){
    theme = t;
  }

  setTheme('light');
  setTheme('dark');

  type Employee = {id:number; name:string; department:string;}
  type Manager = {id:number; name:string; employees: Employee[]; }

  type Staff = Employee | Manager

  function printStaffDetails(staff:Staff):void{
    if)'employees' in staff){
        console.log(staff.name)
    }else{
        console.log(staff.name)
    }
  }

  const alice: Employee = { id:1, name:'alice'. department:'sales'};
  const steve: Employee = { id:2, name:'steve', department:'marketing'}

  const bob:Manager = { id:2, name:'bob', employees:[alice, steve]};