    // (1) Async Function-

  // async function greet() {
  //  abc. abc(); // is statement ka koi matlab nhi hai esliye ye error aaiyega
     // throw "some random error"; // throw ek keyword hota hai jishse kisi bhi error ko throw kar sakte hai
   // return "hello";
//     return "hello!";
//   }

//    greet()
//    .then((result) => {
//     console.log("promise was rejected");
//     console.log("result was : ", result);
//    })

//    .catch((err) => {
//     console.log("promise was rejected with err : ", err);
//    });

    // ab agar isme error throw kar diya to 

//     async function greet() {
//    throw "weak connection";  // error throw 
//         return "hello!";
//   }

//    greet()
//    .then((result) => {
//     console.log("promise was rejected");
//     console.log("result was : ", result);
//    })

//    .catch((err) => {
//     console.log("promise was rejected with err : ", err);
//    });

//     // hum chache to (=>) arrow function ko bhi async bana sakte hai
//      let hello = async () => {
//         return 5;
//      }

  // (2) Await Keyword - 

//    function getNum() {
//    //  console.log(5);  // print - 5
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
    
//     let num = Math.floor(Math.random() * 10) +1;
//     console.log (num);
//     resolve();
//     }, 1000);
//    });
//    }

//    async function demo() {
//     await getNum();
//    await  getNum();
//     getNum();
//    }

   // print - pahale 8 print hoga fir 1sec baad 6 fir 1sec baad 2

   // Await keyword ka use colorChange wale function me

//    h1 = document.querySelector("h1");

//          function changeColor(color, delay) {
//            return  new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 h1.style.color = color;
//                 console.log(` color changed to ${color}!`);
//                 resolve("color changed");
//             }, delay);
          
//             });
             
//          } 

//            async function demo() {
//           await  changeColor("red", 1000);
//           await  changeColor("orange", 1000);
//             await changeColor("green", 1000);
//             changeColor("blue", 1000);
//            }

           // abhi sab color ek saath change ho rahe hai
           // ab await keyword use karne se sab 1sec baad print honge

           // (3) Handling Rejection with Await

        //    h1 = document.querySelector("h1");

        //    function changeColor(color, delay) {
        //      return  new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //            let num = Math.floor(Math.random() * 5) + 1;
        //            if (num > 3) {
        //             reject("promise rejected");
        //            }

        //             h1.style.color = color;
        //           console.log(` color changed to ${color}!`);
        //           resolve("color changed");
        //       }, delay);
            
        //       });
               
        //    } 
  
        //      async function demo() {
        //         try{
        //             await  changeColor("red", 1000);
        //             await  changeColor("orange", 1000);
        //               await changeColor("green", 1000);
        //              await changeColor("blue", 1000);  
        //         }  catch (err) {
        //             console.log("error caught");
        //             console.log(err);
        //         }
              

        //       let a = 5;
        //       console.log(a);
        //       console.log("new number = ", a + 
              
        //       3);
        //      }


        //  (7) Accessing JSON data - 

      //   let jsonRes =
      //   '{ " fact": Approximately 1/3 of cat owners think their pets are able to read their minds.",length":78}';

      //   // console.log(jsonRes);

      //  let validRes = JSON.parse(jsonRes);
      //  console.log(validRes, fact);

      //  let student = {
      //   name: "shradha",
      //   marks: 95,
      //  };

      // (14)- Our First API Request

      // let url = "https://catfact.ninja/fact ";

      // fetch(url);

      //   .then((res) => {
      //    console.log(res);
      // })

      //  .carch((err) => {
      //    console.log("ERROR - ", err);
      //  });

      // (15) - using Fetch with async/await

      // let url = "https://catfact.ninja/fact2 ";

      // async function getFacts() {
         
      //    let res = await fetch(url);
      //    let data = await res.json();
      //    console.log(data.fact);
      // }

      // agar hamara url wrong ho gaya to error aaiyga to usko door karne ke liye hamare pass try & catch ka use karenge

   //    let url = "https://catfact.ninja/fact2 ";

   //    async function getFacts() {
   //       try {
   //       let res = await fetch(url);
   //       let data = await res.json();
   //       console.log(data.fact);

   //    }  catch (e) {
   //       console.log("error - ", e);
   //    }
   //     console.log("bye");
   // }

   // aur agar hum iske ssath chaining (aur calls ) karna chahte hai to kar sakte hai

   let url = "https://catfact.ninja/fact ";

   async function getFacts() {
      try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.fact);

      let res2 = await fetch(url);
      let data2 = await res2.json();
      console.log(data2.fact);


   }  catch (e) {
      console.log("error - ", e);
   }
    console.log("bye"); 
}