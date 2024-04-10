 //  Creating - Object-Literals
   // (1)

//   const student = {
//     name: "shradha",
//     age: 23,
//     marks: 94.4
//   };
 //  normal Arrays
 //  let student2 = ["shradha", 23, 94.4];

  // (2)

//   const item = {
//     price: 100.99,
//     discount:  50,
//     colors : ["red", "pink"]
//   };

 // (3)
  
//  let delhi = {
//     latitude: "28.7041 N",
//     longitude: "77.1025 E",
//  }; 
   
 // Creating a post- Thread / Twitter post - Task

//    const post = {
//     username: "@sauravsingh",
//     content: "This is my #firstPost",
//     likes: 150,
//     reposts: 5,
//     tags: ["@apnacollege", "@delta"]
//    }; 

  // Get Values - console me 

   // conversion in Get values
    
    // const obj = {
    //     1: "a",
    //     2: "b",
    //     true: "c",
    //     null: "d",
    //     undefined: "e",
    // };

     // Add / Update / Delete / Change values

    //  const student = {
    //     name: "shradha",
    //     age: 23,
    //     marks: 94.4,
    //     city: "Delhi"
    //  };

     // Nested Objects - Objects of Objects

      // const classInfo = {
      //   aman: {
      //       grade: "A+",
      //       city: "Delhi"
      //   },
      //    shradha:{
      //       grade: "A",
      //       city: "Pune"
      //    },
      //    karan: {
      //       grade: "o",
      //       city: "Mumbai"
      //    }
      // };

       // Array of Objects

      //   const classInfo = [
      //    {
      //       name: "aman",
      //       grade: "A+",
      //       city: "Delhi"
      //    },
      //    {
      //       name: "shradha",
      //       grade: "A",
      //       city: "pune"
      //    },
      //    {
      //       name: "karan",
      //       grade: "O",
      //       city: "Mumbai"
      //    }
      //   ]; 
        // aur note me hai console me

        // Math Object - Note Me hai

        // Random Integers - Note me hai

      // Practice Qs.- Note me hai
     // (1)
    //  Math.floor(Math.random()*100)+1;
    // print- 1to 100 tak range
      //(2)

    //  Math.floor(Math.random()*5)+1;
    // print- 1to 5 tak range

    // Guessing Game

     const max = prompt("enter the max number");
      // console.log(max);
      const random = Math.floor(Math.random() * max) + 1;
      // console.log(random);
      let guess = prompt("guess the number");

      while(true) {
         if(guess == "quit") {
            console.log("user quit");
            break;
         }
         if (guess == random) {
            console.log("you are right! congrats!!");
            break;
         } else if (guess < random) {
            guess = prompt (" hint: your guess was too small.please try again");
         } else {
            guess = prompt(" hint: your guess was too large.please try again");
         }
         
        //   else {
          //  guess = prompt("your guess was wrong. please try again");
         }
      
