
let awesomeName:string = 'shakeAndBake'; // typescript can know even if you dont have the type but should use them
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);
//awesomeName = 42;

let amount:number = 20;
amount = 12 - 1;
//amount = 'pants';

let isAwesome:boolean = true;
isAwesome = false;
isAwesome = true;
//isAwesome = 'shakeAndBake';

let variable:string = 'hello';
variable = variable.toUpperCase();

let num:number = 5;
num = num + 1;

let isThat:boolean = num>= 10;

let tax:number | string = 10;
tax = 100;
tax = 'taxes';


let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
requestStatus = 'pending';
//requestStatus = 'random';

let notSure:any = 4;
notSure = 'maybe a string instead';
notSure = false;

let random; //starts as any beacause theres no hints for typescript

const books = ['book1', 'book2', 'book3'];

let foundBook:string | undefined;

for (let book of books) {
    if(book === 'book1') {
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break
    }
}
console.log(foundBook?.length)

let discount:number | string = 20;
discount = '20%';

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';

let prices:number[] = [100, 75, 42];
prices.push(23);

let fruit:string[] = ['apples', 'oranges', 'pears'];
fruit.push('grapes');

let randomValues:[] = [];

let names = ['peter', 'susan', 123];

let array:(string | boolean)[] = ['apple', true, 'orange', false];

let temp:number[] = [1, 2, 3];

let colors:string[] = ['red', 'blue', 'green'];

let mixedArray:(number | string)[] = [1, 'a', 2, 'b', 3, 'c'];

let car:{brand:string; year:number} ={brand:'toyota', year: 2020};
car.brand = 'ford';
//car.color = 'blue';

let car2:object = {brand:'ford', year: 2020};

let book = {
    title: 'book1',
   cost: 10
}

let pen = {
    title: 'red',
    cost: 20
}

let notebook = {
 title: 'notebook1',
}

let items:{ readonly title:string; cost?:number}[] =[book, pen, notebook];
// items[0].title = 'book2';

let bike:{brand:string; year:number} = {
    brand: 'honda',
    year: 2020
}
let laptop:{brand:string; year:number} = {
    brand: 'apple',
    year: 2020
}
let products:{brand:string; year:number}[] = [bike, laptop];

