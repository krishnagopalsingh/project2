 // (1) 'this' in JavaScript

//  const student = {
//     name: "shradha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() { 
//     // itna karne se hum print (access)nhi karba sakte hai
//         console.log(this); // ishse puri student ki object print hui hai
//         let avg = (this.eng + this.math + this.phy) / 3;  // (this. ke saath access karba sakte hai)
//      // print - avg= 95
//         // console.log(avg);
//         // ye bhi print karba sakte hai
//         console.log(`${this.name} got avg marks = ${avg}`);
//         // print - shradha got avg marks = 95
//     }
//  }
  
//   function getAvg() {
//     console.log(this);
//    // print - window object
//  }

  // (2) try & catch

//    console.log("hello");
//    console.log("hello");
//    console.log(a); // print - itna bus print nhi hoga error hoga
//    console.log("hello2");
//    console.log("hello2");
//    console.log("hello2");
    // isme error ke pahle wale 2 statement print ho jayenge but jaha se error hai waha se print nhi hoga.
    // means kisi website/code me error ke pahle tak sab execute and print hoga but jaha se error hoga waha se print hona band ho jaiyga.

  //Example-

//    console.log("hello");
//    console.log("hello");
//     // let a = 5;  // ye kar de to 5 print ho jaiyga
//    try {   // try bus likhne se print nhi hoga saath me catch bhi likhna hoga
//     console.log(a);
//    } catch (err) {  // catch ke saath function ko bhi print karba sakte hai
//     console.log("caught an error.. a is not defined");
//     console.log(err);
//    }
   
//    console.log("hello2");
//    console.log("hello2");
//    console.log("hello2"); 

   // print - hello,hello, caught an error.. a is not defined

   // Miscellaneous Topics
   // (3) Arrow Function

   // Ex- 1.
    // const sum = (a, b) => {     
    //     console.log(a+b);
    // };
   //  const sum = (a, b) => (a+b);  // Ise hum single line me bhi print karba sakte hai
    
    //  // print - sum(2, 3) = 5

     // Ex- 2.
    //  const cube = n => {
    //     return n*n*n;

    //  };

     // print - cube(2);= 8 cube(4);= 64
     
     // Ex- 3.
    //   const pow = (a, b) => {
    //     return a**b;
    //   };
     // print - pow(2, 4);= 16

     // Ex - 4 aisa function jiske ander argument nhi hai()
    //  const hello =() => {
    //     console.log("hello world");
    //  };
     // print - hello(); = hello world
 
      // (4) Implicit Return Arrow Function

     //  const mul = (a, b) => a * b; // Ise single line me bhi likh sakte hai
       // print - mul(2, 19); = 38
   
       // (5) SetTime Out Function
    
    //    console.log("hi there!");
    //    setTimeout( () => {
    //   console.log("Apna College");
    //    }, 4000);
    //    console.log("welcome to");
    //    // print - hi there, welcome to , 4 sec before- Apna college
    //    console.log("welcome to");
    //    console.log("welcome to");
    //    console.log("welcome to");
    //    console.log("welcome to");
       // Isme multiple times karenge to bhi aisa he hoga pahele 4 times welcome to print hoga iske 4sec baad Apna college print hoga.

       // (6) SetInterval Function

        // console.log("hi there!");
        //   setInterval( () => {
        //   console.log("Apna College");
        //    }, 2000);  // 2sec
       
       // print - her 2sec baad apna college print hota rahga unlimeted times

       // aur unlimited times ko stop karne ke liye id banana hoga

    //    console.log("hi there!");
    //   let id = setInterval( () => {
    //    console.log("Apna College");
    //     }, 2000); 
    //     console.log(id);

    // // print - hi there! aur id-1 print hua and apnacollege 

    //     console.log("hi there!");
    //   let id2 = setInterval( () => {
    //    console.log("Hello World");
    //     }, 3000); 
    //     console.log(id2);
        // print - hi there, id- 2 3sec baad Hello World

        // (7) this with Arrow Function

        //  const student ={  // object
        //     name: "aman",
        //     marks: 95,
        //     prop:  this, // global scope
        //     getName: function() {
        //         console.log(this);  // this ko print karbana hai
        //         return this.name;
        //     }, 
        //     getMarks: () => {
        //         console.log(this); // parent's scope -> window
        //         return this.marks;
        //     },
        //     getInfo1: function() {
        //     setTimeout( ()=> {
        //         console.log("this"); //student
        //     }, 2000);  // print - this object
        //     },
        //     getInfo2: function() {
        //         setTimeout(function() {
        //             console.log("this"); // window
        //         }, 2000); // print - this object
        //         }, 
        //  };
         // print - studend= {f} student.getName();= 'aman'

          // (8) Practice Qs 
          // (1)

          // const square =(n) => n * n;

         //  console.log(square(4));

          // print- 16, square(3);= 9

         //(2)

          let id = setInterval(()=> {
            console.log("Hello World");
         }, 2000);

         setTimeout(()=>{
            clearInterval(id);
            console.log("clear interval run");
         }, 10000);

         // print - 5 times- Hello world aur 5times complete hone ke baad clear interval run.




      
 
      
    

