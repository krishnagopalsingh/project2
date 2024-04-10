    // Assignment -
    // (1)

   let button = document.createElement("button");
   let input = document.createElement("input");
   button.innerText = "Click me";

   document.querySelector("body").append(input);
   document.querySelector("body").append(button);

   // (2)

    button.setAttribute("id", "btn");
    input.setAttribute("placeholder", "username");

    // (3)

    let btn = document.querySelector("#btn");
    btn.classList.add("btnStyle");

    // aur text ass.9.js.html me hai

    // (4)

    let h1 = document.createElement("h1");
    h1.innerHTML = "<u> DOM Practice </u>";
    document.querySelector("body").append(h1);

    h1.classList.add("purple");

    // (5)

    let P = document.createElement("P");
    P.innerHTML = "Apna College <b>Delta</b> Practice";
    document.querySelector("body").append(P);

   

  