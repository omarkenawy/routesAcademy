//1
// var num = Number(window.prompt("please enter a number: "));

// console.log("the output is:" + num);
// document.getElementById("mynum").innerHTML = "The output is: " + num;

//////////////////////////////////////////////////////////////////////////////////////////////

//2

// var num1 = Number(window.prompt("Please enter a number: "));

// if (num1 % 3 == 0 && num1 % 4 == 0) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

//////////////////////////////////////////////////////////////////////////////////////////////

//3

// var num1 = Number(window.prompt("Please enter a first number: "));
// var num2 = Number(window.prompt("Please enter a second number: "));

// if (num1 > num2) {
//     document.getElementById("myfnum").innerHTML = "first number is " + num1;
//     document.getElementById("mysnum").innerHTML = "second number is " + num2;
//     document.getElementById("total").innerHTML = "the max number is " + num1
//     // console.log("the max number is: " + num1);
// }
// else if (num2 > num1) {
//     document.getElementById("myfnum").innerHTML = "first number is " + num1;
//     document.getElementById("mysnum").innerHTML = "second number is " + num2;
//     document.getElementById("total").innerHTML = "the max number is " + num2
//     // console.log("the max number is: " + num2);
// }


//////////////////////////////////////////////////////////////////////////////////////////////

//4

// var num = Number(window.prompt("please enter a number: "));

// if (num < 0) {
//     console.log("negative");
// } else {
//     console.log("positive");
// }
//////////////////////////////////////////////////////////////////////////////////////////////


//5

// var num1 = Number(window.prompt("Please enter a first number: "));
// var num2 = Number(window.prompt("Please enter a second number: "));
// var num3 = Number(window.prompt("Please enter a third number: "));


// if (num1 > num2 && num1 > num3) {
//     document.getElementById("myfnum").innerHTML = "first number is " + num1;
//     document.getElementById("mysnum").innerHTML = "second number is " + num2;
//     document.getElementById("mytnum").innerHTML = "third number is " + num3
//     document.getElementById("total").innerHTML = "the max number is " + num1
//     // console.log("the max number is: " + num1);
// }
// else if (num2 > num1 && num2 > num3) {
//     document.getElementById("myfnum").innerHTML = "first number is " + num1;
//     document.getElementById("mysnum").innerHTML = "second number is " + num2;
//     document.getElementById("mytnum").innerHTML = "third number is " + num3
//     document.getElementById("total").innerHTML = "the max number is " + num2
//     // console.log("the max number is: " + num2);
// } else if (num3 > num1 && num3 > num2) {
//     document.getElementById("myfnum").innerHTML = "first number is " + num1;
//     document.getElementById("mysnum").innerHTML = "second number is " + num2;
//     document.getElementById("mytnum").innerHTML = "third number is " + num3
//     document.getElementById("total").innerHTML = "the max number is " + num3
// }


//////////////////////////////////////////////////////////////////////////////////////////////

//6
// var num = Number(window.prompt("please enter a number: "));

// if (num % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

//////////////////////////////////////////////////////////////////////////////////////////////

//7
// var char = window.prompt("please enter a letter:");

// if (char == "a" || char == "e" || char == "l" || char == "o" || char == "u") {
//     console.log("vowel");
// } else {
//     console.log("consonant");
// }

//////////////////////////////////////////////////////////////////////////////////////////////

//8
// var num = Number(window.prompt("enter a number: "));

// if (num > 0) {
//     for (i = 1; i <= num; i++) {
//         console.log(i);
//     }
// } else {
//     console.log("out");

// }

//////////////////////////////////////////////////////////////////////////////////////////////

//9
// var num = Number(window.prompt("enter a number: "));

// if (num > 0) {
//     for (i = 1; i <= 12; i++) {
//         console.log(num);
//     }
// } else {
//     console.log("out");

// }
//////////////////////////////////////////////////////////////////////////////////////////////

//10
// var num = Number(window.prompt("enter a number: "));

// if (num > 0) {
//     for (i = 1; i <= num; i++) {
//         if (i % 2 === 0) {
//             console.log(i);

//         }
//     }
// } else {
//     console.log("out");

// }

//////////////////////////////////////////////////////////////////////////////////////////////

//11

// var num1 = Number(window.prompt("Please enter a first number: "));
// var num2 = Number(window.prompt("Please enter a second number: "));
// console.log(num1 ** num2);

//////////////////////////////////////////////////////////////////////////////////////////////

//12

// var firstSubject = Number(window.prompt("Enter the grade of first subject: "));
// var secondSubject = Number(window.prompt("Enter the grade of second subject: "));
// var thirdSubject = Number(window.prompt("Enter the grade of third subject: "));
// var fourthSubject = Number(window.prompt("Enter the grade of fourth subject: "));
// var fifthSubject = Number(window.prompt("Enter the grade of fifth subject: "));

// var total = fifthSubject + secondSubject + thirdSubject + fourthSubject + fifthSubject;
// var average = total / 5;
// var percentage = (total / 500) * 100;

// console.log("the total is" + total);
// console.log("Average marks = " + average);
// console.log("percentage = " + percentage);



//////////////////////////////////////////////////////////////////////////////////////////////

//13
// var monthNum = Number(window.prompt("enter month number: "));var monthNum = Number(window.prompt("enter month number: "));

// if (monthNum == 2) {
//     console.log("28 or 29 days");
// }
// else if (monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11) {
//     console.log("30 days");
// } else {
//     console.log("31 days");
// }

//////////////////////////////////////////////////////////////////////////////////////////////

//14
// var physics = Number(window.prompt("enter a physcis mark: "));
// var chemistry = Number(window.prompt("enter a chemistry mark: "));
// var biology = Number(window.prompt("enter a biology mark: "));
// var math = Number(window.prompt("enter a math mark: "));
// var computer = Number(window.prompt("enter a computer mark: "));
// var total = physics + chemistry + biology + math + computer;

// var percentage = (total * 500) / 100;

// if (percentage >= 90) {
//     console.log("the grade is A");
// }
// else if (percentage >= 80) {
//     console.log("the grade is B");
// }
// else if (percentage >= 70) {
//     console.log("the grade is C");
// }
// else if (percentage >= 60) {
//     console.log("the grade is D");
// }
// else if (percentage >= 40) {
//     console.log("the grade is E");
// } else {
//     console.log("the grade is F");
// }

//////////////////////////////////////////////////////////////////////////////////////////////
//switch
//15
// var monthNum = Number(window.prompt("enter month number: "));

// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days");
//         break;
//     case 2:
//         console.log("28 or 29 days (February)");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 days");
//         break;
//     default:
//         console.log("Enter a valid number");

// }
//////////////////////////////////////////////////////////////////////////////////////////////

//16
// var char = window.prompt("please enter a letter:");
// switch (char) {
//     case a:
//     case l:
//     case o:
//     case u:
//     case e:
//         console.log("vowel");
//         break;
// default:console.log("consonant");
// }
//////////////////////////////////////////////////////////////////////////////////////////////

//17
// var num1 = Number(window.prompt("enter a number: "));

// var num2 = Number(window.prompt("enter a number: "));


// switch (true) {
//     case (num1 > num2): console.log("num1 is greater than num2");
//     break;
//     case (num2 > num1): console.log("num2 is greater than num1");
//     break;

// }

//////////////////////////////////////////////////////////////////////////////////////////////


//18
// var num = Number(window.prompt("enter a number: "));

// switch (true) {
//     case (num % 2 == 0): console.log("the number is even");
//         break;
//     default: console.log("the number is odd");

// }


//////////////////////////////////////////////////////////////////////////////////////////////

//19
// var num = Number(window.prompt("enter a number: "));

// switch (true) {
//     case (num > 0): console.log(num + " is positive");
//         break;
//     case (num < 0): console.log(num + " is negative");
//         break;
//     default: console.log(num + " is zero");
// }

//////////////////////////////////////////////////////////////////////////////////////////////

//20

// var operator = window.prompt("enter a valid operator(+,-,/,*): ");
// var num1 = Number(window.prompt("enter first number: "));
// var num2 = Number(window.prompt("enter second number: "));
// var result;


// switch (operator) {
//     case '+': result = num1 + num2;
//         break;
//     case '-': result = num1 - num2;
//         break;
//     case '*': result = num1 * num2;
//         break;
//     case '/':
//         if (num2 === 0) {
//             window.alert("Error: Division by zero!");
//             result = undefined;
//         } else {
//             result = num1 / num2;
//         }
//         break;
//     default: console.log("not valid operator");

// }