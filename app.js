// let btn = document.querySelector("button");
 
// btn.addEventListener("click", function(){
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// });

   // This in event Listeners

//   let btn = document.querySelector("button");
//   let p = document.querySelector("p");
//   let h1 = document.querySelector("h1");
//   let h3 = document.querySelector("h3");

//   function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
//   }

//   btn.addEventListener("click", changeColor);
//   p.addEventListener("click", changeColor);
//   h1.addEventListener("click", changeColor);
//   h3.addEventListener("click", changeColor);

 // Keyboard Events - event arguments

//   let btn = document.querySelector("button");
//   btn.addEventListener("click", function (event) {
//     console.log(event);
//     console.log("button clicked");
//   });

//   // double click (dblclick)
  
//   btn.addEventListener("dblclick", function (event) {
//     console.log(event);
//     console.log("button clicked");
//   });  
  
 // keyboard Events

   let inp = document.querySelector("input");
   inp.addEventListener("keydown", function () {
    console.log("key was pressed");
   });

 