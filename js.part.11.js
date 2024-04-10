    // function one() {
    //     return 1;
    // }

    // function two() {
    //     return one() + one();
    // }

    // function three() {
    //     let ans = two() + one();
    //     console.log(ans);
    // }

    // three();

    // setTimeout(() => {
    //     console.log("apna college");
    // }, 2000);

    // setTimeout(() => {
    //     console.log("hello world");
    // }, 2000);

    // console.log("hello...");


    // Callback Hell


     // 1. tarika

    // h1 = document.querySelector("h1");
    
    // setTimeout(() => {
    //     h1.style.color = "red";
    // }, 1000);

    // setTimeout(() => {
    //     h1.style.color = "orange";
    // }, 2000);

    // setTimeout(() => {
    //     h1.style.color = "green";
    // }, 3000);

    // 2.tarika

  //   h1 = document.querySelector("h1");

  //   function changeColor(color, delay, nextColorChange) {
  //       setTimeout(() => {
  //           h1.style.color = color;
  //           if(nextColorChange) nextColorChange();
  //       }, delay);
  //     //   h1.style.color = color;
  //   } 
      
  // //  changeColor("red", 1000);

  //   changeColor("red", 1000, () => {
  //       changeColor("orange", 1000, () => {
  //           changeColor("green", 1000, () => {
            
  //           changeColor("yellow", 1000, () => {
  //          changeColor("blue", 1000);
  //           });
  //           });
  //       });
  //   });
         // CallBacks nesting -> CallBack Hell

   // changeColor("orange" , 2000);
   //  changeColor("green", 3000);

    // setTimeout(changeColor("red"), 1000);
    
    // setTimeout(changeColor("red"), 2000);

    // setTimeout(changeColor("red"), 3000);


    // Promises - 

    // function savetoDb(data) {
    //   let internetSpeed = Math.floor(Math.random() * 10) + 1;
    //   if (internetSpeed > 4) {
    //     console.log("your data was saved : ", data);
    //   } else {
    //      console.log("weak connection. data not saved");
    //   }
    // }
    
    //  savetoDb("apna college");

    // ab ise me callback kouse karte hai 1.success 2.failure

    //  function savetoDb(data, success, failure) {
    //   let internetSpeed = Math.floor (Math.random() * 10) + 1;
    //   if (internetSpeed > 4) {
    //     success();
    //   } else {
    //     failure();
    //   }
    //  } 
      
    //  savetoDb(
    //   "apna college",
    //  () => {
    //   console.log(" success : your data was saved");
    //   savetoDb(
    //     "hello world",
    //     () => {

    //       console.log("success2: data2 saved");
    //       savetoDb (
    //         "shradha",
    //         () => {
    //           console.log("success3 : data3 saved");
    //         },
    //         () => {
    //           console.log("failure3 : weak connection");
    //         }
    //       );
    //     },
    //     () => {
    //       console.log("  failure2 : weak connection");
    //     }
    //   );
    //  },
    //   () => {
    //     console.log("weak connection. data not saved");
    //   }

    //  );

    // Refactoring with promises
    // resolve & reject

    // function savetoDb(data) {
    //   // success, failure
    //   return new Promise((resolve, reject) => {
    //     let internetSpeed = Math.floor (Math.random() * 10) + 1;
    //    if (internetSpeed > 4) {
    //     resolve(" success : data was saved");
    //    }  else {
    //     reject(" failure : weak connection");
    //    }

    //   });
    // }

    //  savetoDb("apna college");


      // then() & catch() method
         // 1.tarika 

      //  let request = savetoDb("apnacollege");
      //  request 
      //  .then(() => {
      //   console.log("promise was resolved");
      //   console.log(request);
      //  })
      //  .catch(() => {
      //   console.log("promise was rejected");
      //   console.log(request);
      //  });
       
       // 2.tarika

      //  savetoDb("apna college");
      //  .then(()=> {
      //   console.log("promise was resolved");
      //  })
      //  .catch(() => {
      //   console.log("promise was rejected");
      //  });

       // Promise Chaining 
       // 1. tarika

      // savetoDb("apna college")
      // .then(() => {
      //   console.log("data1 saved.");
      //   savetoDb("helloworld") .then(() => {
      //     console.log("data2 saved");
      //   });
      // })
      //  .catch(() => {
      //   console.log("promise was rejected");
      //  });
  
        // 2.tarika- imporoved kar ke 

      //   savetoDb("apna college")
      // .then(() => {
      //   console.log("data1 saved.");
      //    return savetoDb("helloworld");
      //   })
      //   .then(() => {
      //     console.log("data2 saved");
      //     return savetoDb("shradha");
      //   })
      //   .then (() => {
      //     console.log("data3 saved");
      //   })
      //  .catch(() => {
      //   console.log("promise was rejected");
      //  });

        // Results & Errors in Promises

        
      //   savetoDb("apna college")
      // .then((result) => {
      //   console.log("data1 saved");
      //   console.log("result of promise: ", result);
      //    return savetoDb("helloworld");
      //   })
      //   .then((result) => {
      //     console.log("data2 saved");
      //     console.log(" result of promise: ", result);
      //     return savetoDb("shradha");
      //   })
      //   .then ((result) => {
      //     console.log("data3 saved");
      //     console.log(" result of promise: ", result);
      //   })
      //  .catch((error) => {
      //   console.log("promise was rejected");
      //   console.log("error of promise: ", error);
      //  });

       // Refactoring Old Code

       h1 = document.querySelector("h1");

         function changeColor(color, delay) {
           return  new Promise((resolve, reject) => {
              setTimeout(() => {
                h1.style.color = color;
                resolve("color changed");
            }, delay);
          
            });
             
         } 
          
         // isko callback hell me bhi convert kar sakte hai

            changeColor("red", 1000)
            .then(() => {
              console.log("red color was completed");
              return changeColor("orange", 1000);
            })
            .then(() => {
              console.log("orange color was completed");
              return changeColor("green", 1000);
            })
            .then(() => {
              console.log("green color was completed");
              return changeColor("blue", 1000);
            })
            .then(() => {
              console.log("blue color was completed");
            });
        //  changeColor("red", 1000, () => {
        //      changeColor("orange", 1000, () => {
        //          changeColor("green", 1000, () => {
                 
        //          changeColor("yellow", 1000, () => {
        //         changeColor("blue", 1000);
        //          });
        //          });
        //      });
        //  });

        