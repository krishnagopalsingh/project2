//   console.log("1");
//   console.log("2");
//   console.log("3");
//   console.log("4");
//   console.log("5");

// Loops
// (1) - For Loop

//   for (let i=1; i<=10; i++) {
//     console.log(i);
//   }
// print - 1,2,3,4,5

//  for (let i=10; i>=1; i--){
//     console.log(i);
//  } 
// print
// 5,4,3,2,1

//   for (let i=10; i>=1; i=i-3){
//     console.log(i);
//   }
  // print - 10,7,4,1 
  // Odd Number
//    for (let i=1; i<=15; i=i+2){
//     console.log(i);
//    }
   // print - 1;3;5;7;9;11;13;15

    // console.log("bckwrds");

    // for (let i=15; i>=1; i=i-2) {
    //     console.log(i);
    // }  

    // Even Numbers
    //  for (let i=2; i<=10; i=i+2) {
    //     console.log(i);
    //  }
     // print - 2,4,6,8,10

    //  console.log("backwards");
    //  for (let i=10; i>=2; i=i-2) {
    //     console.log(i);
    //  } 
     // print - 10,8,6,4,2

     // Infinite Loops
      // (1)
    //  for (let i=1; i>=0; i++){
    //     console.log(i);
    //  }
    //  //(2)
    //   for (let i=1; i<=5; i--){
    //     console.log(i);
    //   }
    //   // (3)
    //  for(let i=1; ; i++){
    //     console.log(i);
    //  }
     // print - 1,2,3,4,5 infinite tak chalta rahega

    // Multiplication table for 5
    // for(let i=5; i<=50; i=i+5){
    //     console.log(i);
    // }
    // // print - 5 ki table
    // for (let i=3; i<=30; i=i+3){
    //     console.log(i);
    // }
    // print - 3 ki table
    
    // Users se puch kar ki kon se number ki table print karbana hai

    //  let n = prompt ("write your number");
    //   n = parseInt(n);
    //   for (let i=n; i<=n*10; i=i+n){
    //     console.log(i);
    //   } 

    // Nested loops- loop ke under loop

//     for (let i=1; i<=3; i++){
//         console.log(`outer loop ${i}`);
//  for(let j=1; j<=3; j++){
//     console.log(j);
//  }
//     } 
   
//  (2) - While Loop

//   let i=1;

//   while(i<=5) {
//     console.log(i);
//     i++;
//   }

  // print - 1,2,3,4,5

//   let i=5;
  
//   while(i>=1) {
//     console.log(i);
//     i--;
//   }
    // print - 5,4,3,2,1

    // 20 tak number print karbana hai to

    // let i=0;
    // while(i<=20){
    //     console.log(i);
    //     i++;
    // }  

     // Favorite Movie

      //  const favMovie = "avatar";

      //  let guess = prompt("guess my favorite movie");

      //  while ( (guess != favMovie) && (guess != "quit")) {
      //    guess = prompt("wrong guess. please try again");
      //  }

      //   if (guess == favMovie) {
      //     console.log("congrats!!");
      //   }  else {
      //     console.log("you quit")
      //   } 

       // Break keyword
        
      //  let i=1;
      //  while(i<=5) {
      //   if(i == 3) {
      //     break;
      //   }
      //   console.log(i);
      //   i++;
      //  }

      //  console.log("we used break at 3");

         // print - 1,2 we used break at 3

         // Loops with Arrays

         // let fruits = ["mango", "apple", "banana", "litchi", "orange"];
        //   for (let i=0; i<fruits.length; i++) {
        //   console.log(i, fruits[i]);
        //  } 
         //  print - 0- 'mango' 1- 'apple' 2- 'banana' 3- 'litchi' 4- 'orangr'
 

          // agar hame odd index bus he print karbana hai to
          // for (let i=1; i<fruits.length; i=i+2) {
          //   console.log(i, fruits[i]);
          //  } 
            // print - 1- 'apple' 3- 'litchi'

            // agar hame even index bus print karbana hai to
             
            // for (let i=0; i<fruits.length; i=i+2) {
            //   console.log(i, fruits[i]);
            //  } 

             // print - 0- 'mango' 2- 'banana' 4- 'orange'

              // agar isme pineapple add kare to

               // fruits.push("pineapple");
              //  for (let i=0; i<fruits.length; i++) {
              //   console.log(i, fruits[i]);
              //  } 
               // print - 'pineapple' add ho jayega

               // Reverse me print karbaye to
               //for (let i=fruits.length-1; i>=0; i--) {
               // console.log(i, fruits[i]);
               // }

                // Loops with Nested Arrays

                //  let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]
                // ]
           
                // for (let i=0; i<heroes.length; i++) {
                //   console.log(i, heroes[i], heroes[i].length);
                //   for (let j=0; j<heroes[i].length; j++) {
                //     console.log(`j=${j}, ${heroes[i][j]}`);
                //   }
                // }

                // let student = [ ["aman", 95], ["shradha", 94.4], ["karan", 100]];

                // for(let i=0; i<student.length; i++) {
                //   console.log(`info of student #${i}`);
                //   for (let j=0; j<student[i].length; j++) {
                //    console.log(student[i][j]);
                //   }
                // 
                
          




