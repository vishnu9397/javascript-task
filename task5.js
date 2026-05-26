//ask 1 — Spread Operator

let frontEnd = ["HTML","CSS"]
let backEnd = ["Node","MongoDB"]

let fullstack = [...frontEnd,...backEnd]
console.log(fullstack);

//Task 2 — Copy Array

let original = [1,2,3]
let duplicate = [...original]
duplicate.push(4)
console.log(original);
console.log(duplicate);

//Task 3 — Object Merge

let student1 = {
  name : "Rahul"
}

let student2 = {
  role : "Developer"
}

let students= {...student1,...student2}
console.log(students);

//Task 4 — Rest Operator
function total(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest); 
    console.log(rest.length)
}
total(1,2,3,4,5,6,7,8)

//Task 5 — Array Destructuring

let colors = ["red","green","blue","yellow"]

let [color1,color2,color3,color4] = colors

console.log(color3);

//Task 6 — Nested Array Destructuring

let data = [1,[2,[3,[4]]]]


let [a, [b, [c, [d]]]] = data

console.log(a, b, c, d)

//Task 7 — Object Destructuring

let mobile = {
  brand : "Samsung",
  price : 20000,
  color : "black"
}
 
let {brand , price, color} = mobile
console.log(brand , color);

//Array Manipulation Tasks
//Task 8 — push() & pop()

let numbers = [1,2,3]
 numbers.push(4,5,6)
 numbers.pop()
 console.log(numbers);
 
 //Task 9 — shift() & unshift()

 let fruits = ["banana","orange"]

 fruits.unshift("apple")
 fruits.shift()
 console.log(fruits);

 
 //Task 10 — splice()

 let arr = [1,2,30,40,5,6]

 arr.splice(2,2,3,4)
 console.log(arr);

 //Task 11 — concat()

let a1 = [1,2]
let b1 = [3,4]
console.log(a1.concat(b1,4,5))

//Task 12 — slice()

let marks = [10,20,30,40,50,60]
let result = marks.slice(2,5)
console.log(result);

//Task 13 — flat()


let nest = [1,[2,[3,[4,[5]]]]];

let result1 = nest.flat(Infinity);

console.log(result1);

//Task 14 — fill()

let arr1 = [1,2,3,4,5];

arr1.fill("done", 3);

console.log(arr1);

//Task 15 — includes()

let values = [10,20,30,40]

console.log(values.includes(20));

console.log(values.includes(100));

//Task 16 — indexOf()

let arr2 = [1,2,3,4,3,2]

console.log(arr2.indexOf(3))
console.log(arr2.indexOf(2))

//Task 17 — lastIndexOf()
console.log(arr2.lastIndexOf(3));
console.log(arr2.lastIndexOf(2));

// Task 18 — sort()

let nums = [100,2,55,1,9]
nums.sort()
nums.sort((a,b) => a - b);

console.log(nums);


//Task 19 — reverse()

let letters = ["a","b","c","d"]
 let revletters = letters.reverse()
 console.log(revletters);

// Task 20 — Student Management
let student = ["Rahul","Ajay","Kumar"]
student.push("Ramya");
student.splice(1,1);
student[1]="dharshini"
student.reverse()
console.log(student);


//Task 21 — Shopping Cart

let cart = ["Shoes","Watch","Phone"]
cart.push("Laptop")
cart.splice(1,1)
console.log(cart.includes("Phone" ))
console.log(cart);

//Task 22 — Employee Database

let employee = {
  name : "Naveen",
  role : "Web Developer",
  salary : "5LPA"
}
 let {name, role, salary} = employee
 let EMP = {...employee}
 EMP.salary = "10LPA"
 console.log(EMP);
 console.log(employee);
 
//Task 23 — Custom Function

function company(name,...skills){
    console.log(name);
    console.log(skills);
    console.log(skills.length);
    
}

company("Naveen","HTML","CSS","JS","React")

//Task 24 — Array Analyzer

let data1 = [1,2,3,4,5,6,7,8,9,10]
console.log(data1.slice(0,5));
console.log(data1.includes(7));
console.log(data1.indexOf(10));
console.log(data1.reverse());


//Task 25 — Complete Challenge
let users = [
  {name:"Rahul",role:"Developer"},
  {name:"Ajay",role:"Designer"},
  {name:"Kumar",role:"Tester"}
];

// Add new user
users.push({name:"Arun",role:"Manager"});

// Remove last user
users.pop();

// Another array
let newUsers = [
  {name:"Vijay",role:"Developer"},
  {name:"Ravi",role:"HR"}
];

// Merge arrays
users = [...users, ...newUsers];

// Print all user names only
users.forEach(user => {
  console.log(user.name);
});

// Reverse final array
users.reverse();

console.log(users);







 