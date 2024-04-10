  // DOM Events

  // (1) Inline Events - index.html me hai

  // (2) Mouse/ Pointer Event - 1. - Onclick

//   let btn = document.querySelector("button");
//    console.dir(btn);

//    btn.onclick = function() {
//    // console.log("button was clicked");
//     alert("button was clicked"); // alert bhi create kar sakte hai
//    };

 // ak alag se function create kar sakte hai iska he
  // ye single button ko choose kar sakte hai

//   function sayHello(){
//    alert("Hello!");
//   }
//    btn.onclick = sayHello;

    // Multiple Buttons ko bhi choose kar sakte hai

    // let btns = document.querySelectorAll("button");
    // for (btn of btns) {
    //     btn.onclick =  sayHello;
    //     // onmouseenter ke liye
    //     btn.onmouseenter = function(){
    //         console.log("you entered a button");
    //     };
    //     console.dir(btn);
    // } 
    // function sayHello(){
    //     alert("Hello!");
    //    }

     // (3) - Event Listener

    //  let btns = document.querySelectorAll("button");

    //   for (btn of btns) {
    //      btn.onclick =  sayHello;
    //      btn.onclick = sayName;
    //   }

    //    function sayHello(){
    //     alert("Hello!");
    //    } 

    //    function sayName(){
    //     alert("Apna College");
    //    }

       // ab EventListener ka use karenge
      //  let btns = document.querySelectorAll("button");

      //  for (btn of btns) {
      //  //  btn.addEventListener("click", sayHello);
      // //   btn.addEventListener("click", sayName);
      //   // isme he dblclick (double click) ke liye
      //   btn.addEventListener("dblclick", function(){
      //       console.log("you double clicked me");
      //   });
      //  }

      //  function sayHello(){
      //   alert("Hello!");
      //  } 

      //  function sayName(){
      //   alert("Apna College");
      //  }

       // Event Listeners for Elements

  //     let p = document.querySelector("p");
  
  //   p.addEventListener("click", function() {
  // console.log("parah was clicked");
  // });

  //  let box = document.querySelector(".box");
  //  box.addEventListener("mouseenter", function () {
  //   console.log("mouse inside box");
  //  });

   // This in event Listeners

    