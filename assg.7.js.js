 // Assignment 

 // (1)
//  const arrayAverage = (arr) => {
//     let total =0;
//     for (let number of arr) {
//         total += number;
//     }
//     return total / arr.length;
//  };
//   let arr = [1,2,3,4,5,6];
//   console.log(arrayAverage(arr));

  // print - 3.5

  // (2)

//   let num = 4;
//   const isEven = (num) => num % 2 == 0;

  // print - num = 4

   // (3)

//    const object = {
//     message: 'Hello, World!',

//     logMessage() {
//         console.log(this.message);
//     }
    
//    };

//      setTimeout(object.logMessage,1000);

    // Output- undefined - Hello World

    //(4)

     let length = 4;
     function callback() {
        console.log(this.length);
     }
     const object = {
        length: 5,
        method (callback) {
            callback.call(this);  // Explicitly setting the
        },
     };
      object.method(callback, 1, 2);

      // output - 5

     

   
