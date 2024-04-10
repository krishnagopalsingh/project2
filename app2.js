   // Keyboard Events

    // keydown-

//  let inp = document.querySelector("input");

//   inp.addEventListener("keydown", function (event) {
//     console.log("key = ", event.key);
//     console.log("code = ",event.code);
//    console.log("key was pressed");
//   });

  // keyup-

//  inp.addEventListener("keyup", function () {
//     console.log("key was released");
//    });

 // kisi video game ka koi character move karbana hai to

 let inp = document.querySelector("input");

 inp.addEventListener("keydown", function (event) {
   console.log("key = ", event.key); // ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
  if(event.code =="ArrowUp") {
    console.log("character moves forward");
  } else if (event.code == "ArrowDown") {
    console.log("character moves backward");
  }  else if (event.code == "ArrowLeft") {
    console.log("character moves Left");
  }  else if (event.code == "ArrowRight") {
    console.log("character moves right");
  }

 });