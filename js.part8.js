 // 1 - Array Methods
  // (1) - For Each-
  // 1.implemention 

//    let arr = [1,2,3,4,5];
//    let print = function (el) {
//     console.log(el);
//    };

//    arr.forEach(print);
   // print- 1,2,3,4,5

   // 2.implemention

//    let arr = [1,2,3,4,5];
//    arr.forEach(function (el) {
//     console.log(el);
//    });
   // print - same output aaiga dono implemention me 1,2,3,4,5

   // yahi same implemention arrow function (=>) ke liye bhi kar sakte hai
//    let arr = [1,2,3,4,5];

//    arr.forEach( (el) => {
//     console.log(el);
//    });

//    arr.forEach(function (el) {
//     console.log(el);
//    });
   // print - 1,2,3,4,5 - 1,2,3,4,5 pahle arrow function print hoga fir normal function print hoga.

    // forEach function ko Object ke liye bhi use kar sakte hai
//     let arr = [{
//         name: "aman",
//         marks: 95,
//     },
//     {
//         name: "shradha",
//         marks: 94.4,
//     },
//     {
//         name: "rajat",
//         marks: 92,
//     },
// ];

//  arr.forEach((student) => {
//     console.log(student.marks);
//  });
 // print - marks- 95,94.4,92
  
 //(2) - map

//    let num = [1,2,3,4];

//    let double = num.map((el) => {
//    // return el * 2; // isme hum chahe to square bhi print karba sakte hai
//     return el * el;  
//    });

   // print - double = (4)[2,4,6,8]
   // square print - double = (4)[1,4,9,16]

//    let students = [
//     {
//             name: "aman",
//             marks: 95,
//         },
//         {
//             name: "shradha",
//             marks: 94.4,
//         },
//         {
//             name: "rajat",
//             marks: 92,
//         },
//     ];
     
//     let gpa = students.map((el) => {
//         return el.marks / 10;
//     });
    // print - gpa - (3)[9.5,9.440001,9.2]

    // (3) - Filter

    // let nums = [1,2,3,4,7,8,2,9,10,12,11];
    // let ans = nums.filter((el) => {
    //    //  return el % 2 == 0; // even => true, odd => false
    //    //  return el % 2 != 0; // odd => true, even => false
    //     return el < 5; // agar hame wo number chaiye jo 5 se chota ho (<5)
    // });
    // // print - even numbers - (6)[2,4,8,2,10,12]
    // // print - odd numbers - (5) [1,3,7,9,11]
    // // print - <5 ke liye - (5)[1,2,3,4,2]

    //  // (4) - Every - console me  AND logical operator ki tarah work karta hai
    //  [1,2,3,4].every((el) => (el%==0)); // false
    //  [2,4,6].every((el) => (el%=0));  // true

    //  // (5) Some - some bhi same every ki tarah he work karta hai bus ye 
    //   //  logical OR operator ki tarah work karta hai

     // (6) - Reduce

    //  let nums = [1,2,3,4];
    //  let finalVal = nums.reduce((res, el) => {
    //     console.log(res);  // result print karbane ke liye 
    //   return res + el;
    //  });
    //  console.log(finalVal);

     // print - 10  1, 3. 6, 10

     // (7) Reduce - Maximum in Array

    //  let arr = [1,4,2,5,6,7,2,9,2];

    //  max = -1;

    //  for (let i = 0;i < arr.length; i++) {
    //     if(max < arr[i]) {
    //         max = arr[i];
    //     }
    //  }
    //  console.log(max);

     //print - 9  
     // isi same logice ko dusere type se bhi kar sakte hai with the help of reduce function

   //   let arr = [1,4,2,5,6,7,2,9,2];

   //   let max = arr.reduce((max, el) => {
   //      if (max < el) {
   //          return el;
   //      } else{
   //          return max;
   //      }
   //   });

   //   console.log(max);

      // print - 9 isme bhi same he print hoga

      //  Practice Qs -
      // (1)

      // let nums = [10,20,30,40];
      // let ans = nums.every((el) => el % 10 == 0);
      // console.log(ans);

      // print - true

      // (2)

      // let nums = [10,20,30,40,5];
      // let min = nums.reduce((min, el) => {
      //    if(min < el) {
      //       return min;
      //    } else {
      //       return el;
      //    }
      // });

      // console.log(min);

      // print - 5

      // is logice ko function ke fom me convert kar sakte hai

      // function getMin(nums) {
      //    let min = nums.reduce((min, el) => {
      //       if (min < el) {
      //          return min;
      //       } else {
      //          return el;
      //       }
      //    });

      //    return min;
      // }

      // let nums = [10, 20, 30, 40, 5];

      // print - getMin(nums); = 5

      // Default Parameters

      // function sum(a, b = 2) {
      //    return a + b;
      // }
      //   sum (1, 3); // 4
      //   sum (1);  // a = 1, b = undefined

        // print - sum(1, 3); = 4

        // Spread - 
       //  function func (...arr) {
         // do something
        // }
        // Spread note me hai

        // Spread (Array Literals)

       // let arr = [1,2,3,4,5];
       // let newArr = [...arr];

        // Note me
          
       //  let chars = [..."hello"];
        // print - (5)['h','e','l','l','o']

      //   let odd = [1,3,5,7,9];
      //   let even = [2,4,6,8,10];

      //   let nums = [...odd, ...even];
        // print - nums= (10)[1,3,5,7,9,2,4,6,8,10]

        // Spread Object Literals-

      //   const data = {
      //    email: "ironman@gmail.com",
      //    password: "abcd",
      //   };

      //   const dataCopy = {...data, id: 123, country: "India" };


      //   // Print-  {email: 'ironman@gmail.com', password: 'abcd', id: 123, country: 'India'}
      //    // array ko spread ki help se object me convert karna
      //   let arr =[1,2,3,4,5];  // val
      //   let obj1 = {...arr}; // obj => key:val

        // print -  obj1  = {0:1,1:2,2:3,3:4,4:5}

        // string ko bhi store kara sakte hai
       // let obj2 = {..."hello"};
        // print - obj2- {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

        // Rest -

      //   function sum(...args) { // arguments
         
      //    for (let i = 0; i < args.length; i++) {
      //       console.log("you gave us: ", args[i]);
      //    }
      //   }

        // print - sum(1) = you gave us:1
                 //  sum(,2) = you gave us:1, you gave us:2

          // inbuilt - array

         //  function min(a,b,c,d) { // isko hum khali bhi print karba sakte hai () tab bhi same he print hoga
         //    console.log(arguments.length);
         //  }
          // print - min(1,2,3,4) = Arguments(4)[1,2,3,4], length- 4
          // ye axactely arguments array nhi hai agar hum is argument ke under kuch push kar de to hamare pass error aaiyega.
         //   function min() {
         //    console.log(arguments);
         //    console.log(argument.length);
         //    arguments.push(1);
         //   }
           // print - isme argument aur length print ho jaiyega but push function print nhi hoga error aaiyega

         //   function sum(){
         //    return arguments.reduce ((sum, el) => sum + el);
         //   }
           // print - ye prin tnhi hoga error aaiyega kyuki ye array nhi hai isliye reduce method work nhi karega.

           // Rest ke saath array method ko use kiya ja sakta hai
            // function sum(...args){
            //    return args.reduce((sum,el) => sum + el);
            // }
            //print -sum(1,2,3,4); = 10

            // hum chache to Math.min and Math.max ki copy bhi bana sakte hai

            // function min(...args){
            //    return args.reduce((min, el) => {
            //       if(min > el){
            //          return el;
            //       } else{
            //          return min;
            //       }
            //    });
            // } 
            // print - min(1,2,3,4); = 1

            // Destructuring-

            // let names = ["tony", "bruce", "peter", "steve"];
            // let winner = names[0];
            // let runnerup = names[1];
            // let secondRunnerup = names[2];
            // is pure code ko chota kar sakte which ishrlp Destructuring
           //  let [winner, runnerup, secondRunnerup] = names;  

            // print winner=tony  runnerup-bruce

           //  Destucturing (object)

            const student = {
              name: "karan",
              age: 14,
              class: 9,
              subjects: ["hindi", "english", "math", "science"],
              username: "karan@123",
              password: "abcd" 
              
            };

            // let username = student.username;
            // let password = student.password;

            // print - username = 'karan@123', password = 'abcd'

            // Destucturing ko use kar sakte hai

            // let { username: user, password: secret, } = student;
            

            
             
      
            




            









        


     

      





    