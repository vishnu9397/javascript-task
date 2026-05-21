//1. Student Login Check
let username = prompt("enter Username");
let pwd = prompt("password");
if(username == "admin" && pwd =="1234"){
    console.log("Login Success")
}
else{
    console.log("Invalid User")
}

//2. ATM Balance System

var balance = 5000
let amt = prompt("enter amount");
if(amt < balance){
    console.log( "Withdraw Success");
}
else{
    console.log("Insufficient Balance");
    
}

//3. Traffic Signal Project

var signal = "red";

switch(signal) {
    case "red":
        console.log("stop");
        break;

    case "yellow":
        console.log("ready");
        break;

    case "green":
        console.log("go");
        break;

    default:
        console.log("invalid signal");
}
//4. Age Eligibility Checker

var age = prompt("Enter your age");

if(age >= 18){
    console.log("Eligible for Vote");
}
else{
    console.log("Not Eligible");
}

//5. Shopping Discount System

var price = 4050
if(price > 5000){
    console.log(" 20% discount")
}
else if(price > 3000){
    console.log("10% discount");
    
}
else{
    console.log("no discount");
    
}

//Check password length.

let password = "Dharshini12"
if(password.length >= 8){
    console.log("Strong Password");
    
}
else{
    console.log("Weak Password");
    
}
//7. Mobile Battery Warning

let Battery = prompt("battery");
if(Battery<= 10){
    console.log( "Battery Low");
    
}
else if (Battery <= 50){
    console.log("Battery Medium");
    
}
else{
    console.log("Battery Full");
    
}
// 8. Employee Salary Bonus

var salary = 45000;

if(salary >= 50000){
    console.log("15% bonus");
}
else if(salary >= 30000){
    console.log("10% bonus");
}
else{
    console.log("5% bonus");
}
// 9. Online Food Order

var amount = prompt("Enter order amount");

if(amount > 499){
    console.log("Free Delivery");
}
else{
    console.log("Delivery Charge Added");
}

// 10. Movie Ticket Booking

var age = prompt("Enter your age");

if(age < 5){
    console.log("Free ticket");
}
else if(age < 18){
    console.log("Child ticket");
}
else{
    console.log("Adult ticket");
}

//11. Instagram Likes Counter
 
for(let i =1 ; i<=5; i++){
    console.log("Like" + "" + i)
}

//12. Countdown Timer

let count = 5
while(count>=1){
    console.log(count);
    count--;
}
console.log("Start")

//13. OTP Verification

let otp = 1234
let num = prompt("enter otp number")
if (num == otp){
    console.log("OTP Verified");
    
}
else{
    console.log("Invalid OTP");
    
}

//14. E-commerce Cart Total

let cart = [200,500,1000,300];

let total = 0;

for(let i=0; i < cart.length; i++){

    total= total+cart[i]
}
console.log("Cart total" , total );

// 15. Student Mark Grade System

var mark = prompt("Enter your mark");

if(mark >= 90){
    console.log("A Grade");
}
else if(mark >= 70){
    console.log("B Grade");
}
else if(mark >= 50){
    console.log("C Grade");
}
else{
    console.log("Fail");
}

// 16. Netflix Subscription Checker

let subscription = true;

if(subscription){
    console.log("Watch Movie");
}
else{
    console.log("Buy Subscription");
}

// 17. Product Stock Checker

let stock = 0;

if(stock > 0){
    console.log("Product Available");
}
else{
    console.log("Out of Stock");
}

// 18. Weather App Condition

let weather = "sunny";

switch(weather){

    case "sunny":
        console.log("Go Outside");
        break;

    case "rainy":
        console.log("Take Umbrella");
        break;

    case "cold":
        console.log("Wear Jacket");
        break;

    default:
        console.log("Invalid Weather");
}

//19. User Profile Object

let user = {
   name : "Navi",
   age : 20,
   city : "Bangalore"
}
for (let val in user){
    console.log(user[val]);
}

//20. WhatsApp Chat Array

let chats = ["hi","hello","where are you","ok"]

for (let c of chats){
    console.log(c);
    
}
 