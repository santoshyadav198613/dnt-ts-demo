import { Employee } from './class';

let e = new Employee();

let fname = 'test';

let lname: string;

let age: number;

let population: bigint;

let isValid: boolean = false;
console.log(isValid);

// transpilation

// const pi=3.143;
// union type
let unionType: string | string[];

unionType = 'dgsfdg';
unionType = ['dsgf', 'dsgfsdfg'];

let employee: any;

employee = 10;
employee = 'dgfd';
employee = ['fgfd', 'sdfsg'];

let department: string[];

department = ['IT', 'Marketing', 'Finanace', 'test1', 'test2'];

department.forEach(dept => console.log(dept));

const result = department.filter(dept => dept == 'IT');

console.log(result);

const result1 = department.find(dept => dept == 'IT');
console.log(result1);

for (const dept of department) {
    console.log(dept)
}


// let results: [string, number, string[]];


function getResult() {
    return ['dgfs', 10, ['df', 'asd']]
}

let [a, b] = getResult();

console.log(a);

// Object destructuring
let emp = { id: 1, empname: '123', email: 'dgfdg' };

// emp.name;
emp.id;
emp.email;

// use same varibale names
let { id, empname, email } = emp;

// create new variables
let { id: empId, empname: ename, email: empEmail } = emp;

console.log(ename);

// array destructuring
// ...rest operator
let [dept1, dept2, ...restDepts] = department;

// department[0];
// department[1];

console.log(dept1)
console.log(dept2);
console.log(...restDepts);


// spread operator , spread syntax

let products = {
    id: 1,
    name: 'Iphone x',
    price: 15000
};

// products.name = 'One Plus';

products = { ...products, name: 'One Plus' };

let orders = ['order1', 'order2'];

// orders.push()

orders = [...orders, 'order3'];

enum Color {
    Red,
    Green,
    Blue
}

const color = Color.Blue;
console.log(color);