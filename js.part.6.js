   // Function

//    function hello () {
//     console.log("hello");
//    }
//     hello();
//     hello();
//     hello();

    // print - hello , hello , hello / function ko jitne baar call karenge utni baar print hoga

    //  function printName () {
    //     console.log("apna college");
    //     console.log("saurav singh")
    //  }
    //   // function ke under loop use karna
    //   function print1to5() {
    //     for (let i=1; i<=5; i++) {
    //         console.log(i);
    //     }
    //   }
    //   // function ke under if-else use karna
    //    function isAdult() {
    //     let age = 18;
    //     if(age >= 18) {
    //         console.log("adult");
    //     } else {
    //         console.log("not adult");
    //     }
    //    }
    //    isAdult();

     //  print1to5();
     //  printName ();

     // practice Qs-1
      
    //  function printPoem() {
    //     console.log("Twinkle Twinkle, little star");
    //     console.log("How I wonder what you are");
    //     console.log("Up above the world so high");
    //     console.log("like a diamond in the sky");
    //     console.log("Twinkle Twinkle, little star");
    //     console.log("How I wonder what you are");
    //  }
    //  printPoem();

     // Practice Qs-2
      // ye normal JS file me hai
      //  let rand = Math.floor(Math.random() * 6) + 1;
      // console.log(rand);

      // print- 3,4,6,2,1

    // Ab function me generate karte hai

    //  function rollDice() {
    //     let rand = Math.floor(Math.random() * 6) + 1;
    //   console.log(rand);

    //  }
    //  rollDice();
    //  rollDice();
    //  rollDice();
    //  rollDice();

     // Multiple time dice ko roll kar sakte hai
     // print - 2,2,4,3, - 2,1,5,3

     // Function With Arguments

    //  function printName(name) {
    //     console.log(name);
    //  }
    //    printName("saurav");

     // hum multiple value bhi de sakte hai

    //  function printInfo(name, age) {
    //     console.log(`${name}'s age is ${age}.`);
    //  }
    //    printInfo("saurav", 23);
    //    printInfo("rajat", 19);
    //    printInfo("karan"); 
    //    printInfo(14) ;
  
     // print - saurav's age is 23.
     // print - rajat's age is 19.
     // print - karan's age is undefined - isme age nhi likha to undefined de diya
     // print - 14's age is undefined - name is jagah per age le liya 

    //    function sum(a, b) {
    //     console.log(a+b);
    //    }

    //    sum(1, 2);
    //    sum(4, 5);
    //    sum(7, 8);

       // print - 3,9,15

       // Practice Qs- 3

    //    function calcAvg(a,b,c) {
    //     let avg = (a+b+c)/3;
    //     console.log(avg);
    //    }
    //    calcAvg(2, 4, 6);

       // print- 4

       // Practice Qs- 4

    //    function printTable(n) {
    //     for(let i=n; i<=n*10; i+=n) {
    //         console.log(i);
    //     }
    //    }
    //   printTable(2);

      // print - 2,4,6,8,10...........20.

      // Return keyword

    //   function sum(a, b) {
    //     return a+b;
    //       }
    //    // let s = sum(3, 4);
    //   //  print - 7

    //    //console.log (sum(3,4));
    //  //   print - 7
    //  //  sum(sum(1,2),3);
    //  // print- 3
    //   console.log( sum(sum(1,2),3));

    // function sum(a, b) {
    //     console.log("hello");
    //     console.log("hello");
    //     return a+b;
    //     console.log("hello2");
    //     console.log("hello2");
    // }
    //  console.log(sum(1, 2));
     // print - 2 he hello print honge

    //  function isAdult(age) {
    //     if(age >= 18) {
    //         return "adult";
    //     } else {
    //         return "not adult";
    //     }
    //  }
    
    // practice- 5

    //  function getSum(n) {
    //     let sum = 0;

    //     for (let i=1; i<=n; i++) {
    //         sum += i;
    //     }
    //     return sum;
    //  } 

     // print- 6

     // Practice Qs - 6

   //   let str = ["hi", "hello", "bye", "!"];

   //   function concat(str) {
   //      let result = "";

   //      for(let i=0; i<str.length; i++) {
   //          result += str[i];
   //      }
   //      return result;
   //   } 

     // print - hihellobye

      // Scope - (1)- Function Scope

      // let sum = 54; // Global Scope - isko kahi bhi use kar sakte hai
      // function calcSum(a, b) {
      //    let sum = a+b;  // Function scope - isko only function ke under he use kar sakte hai
      //    console.log(sum); // 2. ab yaha se print ho jayega
      // }

      // calcSum(1, 2);
      // console.log(sum); // Global scope wala print hoga - 54
     //  console.log(sum); // 1. yaha se print nhi hoga

     // print - 3

      // (2)- Block Scope { } iske ander he work karega

    // {
     // let  a = 25; abhi ye print nhi hoga
     // const a = 25;  // ab bhi nhi hoga
    // var a = 25; // ab print ho jayegi - kyuki var keyword per hamara block scope apply nhi karta hai
     // print - 25
   // }
    // console.log(a);

    // for(let i=1; i<=5; i++) {
     //  console.log(i); // print - 1,2,3,4,5 // Block Scope
    // }
    // console.log(i); // ab print nhi hoga error hoga 

    // let age = 25;
    // if(age >= 18) {
    //   let str = "adult";
    // }
    // console.log(str);

    // (3) - Lexical Scope 

    // function outerFunc() {  // outer function
    //   let x = 5;
    //   let y = 6;
    //   function innerFunc() {   // inner function // Function Scope hai
    //     let a = 10;  // a variable  - ye print nhi hoga
    //     console.log(x);  // print - 5
    //     console.log(y);  // print - 6
    //   }
    //   console.log(a); // outer function a variable ko access nhi kar sakta hai
     
    //   innerFunc();
    // }

     // Practice Qs - 7

    //  let greet = "hello"; // Global scope

    //  function changeGreet() {  // Function Scope
    //   let greet = "namaste";
    //   console.log(greet);

    //   function innerGreet() {   // Lexical Scope
    //     console.log(greet);  // abhi ye function exxecuit nhi ho raha hai
    //   }
    //    innerGreet();  // print - namaste

    //  }

    //   console.log(greet);
    //   changeGreet(); 

      // print - hello namaste

      // Function Expressions


  // let name = "shradha";

  // let sum = function(a, b) {
  //   return a+b;
  // }
     // print - sum + enter = function he print hoga. and function ki value ke liye sum(1, 2); = 3
   
    //  let hello = function() {
    //   console.log("hello");  // print - hello(); = hello
    //  }

    //  hello = function() {
    //   console.log("namaste");  // print - namaste
    //  }

     // Higher Order Function
     // (1)
    //  function multipleGreet(func, count) {  // higher order function hoga
    //   for(let i=1; i<=count; i++) {
    //     func();
    //   }
    //  }
    //  let greet = function() {
    //   console.log("hello");
    //  }
    // //  greet();
    // //  greet();  // jitni baar call karenge utni baar print hoga hello, hello
    //   multipleGreet(greet,2);

      // (2) - Returns a function

     // odd number ke liye dedecect karta hai

     //  let odd = function(n) {
      //   console.log(!(n%2 == 0));
     // }
    // print - odd(5); = true, odd(10); = false, odd(11); = true
   
    // even number ke liye dedecect karta hai
    
   //  let even = function(n) {
    //   console.log(n%2 == 0);
   //  }
    // print - even(2); = true, even(5); = false

    // function oddOrEvenFactory(request) {
    //  if(request == "odd") {
    //   let odd = function(n) {
    //     console.log(!(n%2 == 0));
    //   }
    //   return odd;
    //  } else if(request == "even") {
    //   let even = function(n) {
    //     console.log(n%2 == 0);
    //   }
    //   return even;
    //  } else {
    //   console.log("wrong request");
    //  }
    // }
    //  let request = "odd" // even

    // print - request - odd

    // Methods

    const calculator = {
      num: 55,
      add: function(a, b) {
        return a+b;
      },
      sub: function(a, b) {
        return a-b;
    },
    mul: function(a, b) {
      return a*b;
  }
};
  // Shorthand
 const calculator = {
  add (a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  }
 };
    
        


