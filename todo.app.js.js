  let btn = document.querySelector("button");
  let ul = document.querySelector("ul");
  let inp = document.querySelector("input");

  btn.addEventListener("click", function() {
    let item = document.createElement("li"); // li ke liye item create
    item.innerText = inp.value; // innerText ki value

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

     item.appendChild(delBtn);
    ul.appendChild(item);   // ul ke under childElement add karna chahate hai as a items ko
    // console.log("clicked!");
    console.log(inp.value);
    inp.value = "";
  });
   
  ul.addEventListener("click", function (event) {

    if (event.target.nodeName == "BUTTON") {
      let listItem =  event.target.parentElement;
      listItem.remove();
      console.log("delected");
      
    //   console.log(listItem);
    //     console.log("delete");
    }    
    
      // console.dir(event.target.nodeName);
     //  console.log("button clicked");
  });


//    let delBtns = document.querySelectorAll(".delete");
//    for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//       //   console.log("element deleted"); // element print karbne ke liye
//        par.remove(); 
//     });
//    }