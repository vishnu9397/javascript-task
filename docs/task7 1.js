//1. E-Commerce Product Filter

let apilink = "https://fakestoreapi.com/products/";

fetch(apilink)
.then((data)=>{
    return data.json()
})
.then((product)=>{
    let cost = product.filter((item)=>{
        return item.price > 100
        && item.category === "electronics"
    })
    cost.forEach((item)=>{
        console.log(item.title);
        console.log(item.price);

    }
    );
    
})

//2. Online Shopping Cart Total

let cart = [
  {product:"Shoes", price:2000, qty:2},
  {product:"Watch", price:1500, qty:1},
  {product:"Bag", price:1000, qty:3}
]

 let total = cart.reduce((a,item)=>{

    return a + item.price * item.qty
 },0)
 console.log("Total bill amount:", total);

 //3. Employee Salary Dashboard

 let employees = [
  {name:"John", salary:25000},
  {name:"Sam", salary:50000},
  {name:"Ravi", salary:45000},
  {name:"Kumar", salary:30000}
]

let emp = employees.filter((c)=>{
    return c.salary > 40000
})
emp.map((c)=>{
    console.log(c.name);
    
})

//4. Food Delivery App

let hotels = [
  {hotel:"A2B", rating:4.1},
  {hotel:"KFC", rating:4.7},
  {hotel:"Dominos", rating:4.3}
]
let Hotel =hotels.find((item)=>{
    return item.rating > 4.5 
})
console.log(Hotel);

//5. Student Pass/Fail System


let marks = [45,67,89,90,34];
let result = marks.every((mark) => {
  return mark >= 35;
});

console.log(result);

//6. OTP Verification System

let otpList = [1234,4567,7890,9876]
let otp = Number(prompt("enter your otp"))
let check = otpList.includes(otp)
console.log(check);

//7. Movie Booking Timer

let countdown = 10
 let bookingtime = setInterval(()=>{
    console.log(countdown);
    countdown--;

    if (countdown < 0) {
        clearInterval(bookingtime)
    }
 },1000)
 
//8. Instagram Like Counter

let like = 1

let likes = setInterval(()=>{
    console.log("Likes : " , like);
    like++;
    if(like > 10){
        clearInterval(likes)
    }
    
},1000)

//9. Login Authentication

let username = prompt("enter username:")
let password = prompt("enter password:")

if(username == "admin" &&  password == "12345"){
    console.log("Login Success");
    
}
else{
    console.log("Invalid Credentials");
    
}

//10. Weather App Simulation

let internet = true
let weather = new Promise((resolve,reject)=>{
    if(internet){
        resolve("Weather Data")
    }else{
        reject("No Internet")
    }

})

weather
.then((data)=>{
    console.log(data);
    
})
 .catch((error) => {
    console.log(error);
  });

  //11. Amazon Product Search

  let products = [
  "White Shirt",
  "Black Shoes",
  "Denim Shirt",
  "Watch",
  "Casual T-Shirt"
];


let result1 = products.filter((product) => {
  return product.toLowerCase().includes("shirt");
});

console.log(result1);

//12. YouTube Video Duration
let videos = [10,20,30,40]
let duration =videos.reduce((a,time)=>{
    return (a+time);
    
},0)
console.log(duration);

//13. Swiggy Order Status

let orderStatus = "Preparing";

switch(orderStatus) {

  case "Placed":
    console.log("Your order has been placed.");
    break;

  case "Preparing":
    console.log("Your food is being prepared.");
    break;

  case "Out for Delivery":
    console.log("Your order is out for delivery.");
    break;

  case "Delivered":
    console.log("Your order has been delivered.");
    break;

  default:
    console.log("Invalid order status.");
}

//14. WhatsApp Chat Analyzer

let chats = ["hi","hello","where","ok","bye"]
let count =0
for(let i=0 ; i< chats,length; i++){
    count++
}
console.log("Total Messages:", count);

//15. Netflix Age Restriction

let age = prompt("enter your age")

console.log(age >= 18 ? "watch movie" : "access denied");

//16. Flipkart Product Sorting

let prices = [1200,450,9999,2500,700]
let products1 = prices.sort((a,b)=>{
    return a-b
})

console.log(products1);

//17. Employee Attendance

let attendence =["present","absent","present"]

let result2 = attendence.reduce((count,status)=>{
    count[status] = (count[status] || 0) + 1;
},{})
console.log(result2);


let balance = 5000;

//18. Banking System
function deposit(amount) {
  balance += amount;
  console.log("Deposited:", amount);
}


function withdraw(amount) {

  if(amount <= balance) {
    balance -= amount;
    console.log("Withdrawn:", amount);
  } else {
    console.log("Insufficient Balance");
  }

}

function checkBalance() {
  console.log("Current Balance:", balance);
}

deposit(2000);

withdraw(1000);

checkBalance();

//19. Zomato Rating Checker
let ratings = [4.5, 3.8, 2.9, 4.2];

let result4 = ratings.some((rating) => {
  return rating < 3;
});

console.log(result4);
