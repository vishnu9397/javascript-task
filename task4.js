//Smart Attendance Checker
function attendance(percent,fees){
    if(percent>=75 && fees === true){
        console.log("Allowed for Exam");
    }
    else {
        console.log("Not Allowed");
    }

}
attendance(80, true);

//Mobile Password Strength Checker
function checkPassword(password) {

    let Number = false;
    let Uppercase = false;

    for (let i = 0; i < password.length; i++) {

        let char = password[i];

        if (char >= '0' && char <= '9') {
            Number = true;
        }

        if (char >= 'A' && char <= 'Z') {
            Uppercase = true;
        }
    }

    if (password.length >= 8 && Number && Uppercase) {
        console.log("Strong Password");
    } else {
        console.log("Weak Password");
    }

}

checkPassword("Abc12345");

//Find Second Largest Number

let num = [10,50,80,20,90,70]
large =0;
secondlarge =0;
for(i=0;i<num.length;i++){
    if(num[i] > large){
        secondlarge = large;
        large = num[i];
    }
    else if(num[i] > secondlarge){
        secondlarge = num[i];
    }
}
console.log(secondlarge);

// Bus Seat Booking System
let seats = [];

for (let i = 0; i < 10; i++) {
    seats[i] = "Empty";
}

let seatNumber = 5;

if (seats[seatNumber] == "Booked") {

    console.log("Seat Already Booked");

} else {

    seats[seatNumber] = "Booked";
    console.log("Seat Booked Successfully");

}

console.log(seats);

//ATM Cash Withdraw Logic

let balance = 10000
min_balance =1000

function Withdraw(amt){
    Withdraw_amt = balance-amt;
    if(amt < balance && Withdraw_amt < min_balance ){
        return "Insufficient Balance";
    }
    else{
        Withdraw_amt = balance-amt;
        return "Withdrawal Successful";
    }
}
console.log(Withdraw(9500))

//Product Search Engine
 let Product =["iphone","samsung","realme","oppo"]
 let searchProduct = "realme";
 let found = false;
 
 for(let i of Product){
    if( i === searchProduct ){
        found = true;
        break;
    }
 }
 if (found) {
    console.log("Product Found");
} else {
    console.log("Product Not Found");
}

//Voting Eligibility System

function voter(age,id,citizen){
    if(age>=18){
        if(id==true){
            if(citizen === "Indian"){
                console.log("Eligible for voting")
            }
              else{
                 console.log("not eligible");
             }
        }
         else{
            console.log("not eligible");
        }
    }
    else{
        console.log("not eligible");
    }
}
voter(11,true,"Indian")

// Online Food Order Bill

function calculateBill(foodPrice, gst, deliveryCharge, discount) {

    let totalBill = foodPrice + gst + deliveryCharge - discount;

    console.log("Total Bill : ₹" + totalBill);

}

calculateBill(400, 40, 30, 20);

// Reverse Word Without reverse()
let word = "javascript";
let reverseWord = "";

for (let i = word.length - 1; i >= 0; i--) {

    reverseWord = reverseWord + word[i];

}

console.log(reverseWord);

//Mini Instagram Like System

let isLiked = false;
let totalLikes = 100;

function likePost() {

    isLiked = !isLiked;

    totalLikes = isLiked ? totalLikes + 1 : totalLikes - 1;

    console.log(isLiked ? "Liked ❤️" : "Like 🤍");
    console.log("Total Likes :", totalLikes);

}

likePost();