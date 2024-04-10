 // Form Event

//  let form = document.querySelector("form");
  
//   form.addEventListener("submit", function(event) {
//   //  console.log("form submitted");
//   // prevent Default ke liye
//    event.preventDefault();  // (/action ko rokne ke liye)
//     alert("form submitted");

//   }); 
    // Extracting Form Data
    // let form = document.querySelector("form");
  
    // form.addEventListener("submit", function(event) {
    //   event.preventDefault();  

     //  let inp = document.querySelector("input");
      // form keunder aur bhi cheje enter kare to
      // let user = document.querySelector("#user");
      // let pass = document.querySelector("#pass");
      // console.log(user.value);
      // console.log(pass.value);

      // // simple alert create karte hai
      // alert (`Hi ${user.value}, your password is set to ${pass.value}`);

      // console.dir(inp);
     // console.log(inp.innerText);
     //  console.log(inp.value);

     // form le internal elements ko acces karne ka dusra tarika
    //   console.dir(form);


    // });

    // More Events- (1) - change events
    
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });

    let user = document.querySelector("#user");

    user.addEventListener("change", function () {
     // console.log("input changed");
      // change event
      console.log("change event");
      console.log("final value = ", this.value);
    }); 

    // Input events

    user.addEventListener("change", function () {
      console.log("input event");
      console.log("final value = ", this.value);
    }); 