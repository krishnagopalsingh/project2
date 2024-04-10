     //  (1) - using Axios

   //    let btn = document.querySelector("button");

    //    btn.addEventListener("click", async () => {
    //    //   console.log("button was clicked");
    //    let fact = await getFacts();
    //   //  console.log(fact);
    //    let p = document.querySelector("#result");
    //    p.innerText = fact;
    //    });
     
     
     
    //  let url = "https://catfact.ninja/fact";
    //  let url2 = "https://dog.ceo/api/breeds/image/random";  // dog API ke liye

    //  async function getFacts() {
    //     try {
    //         let res = await axios.get(url);
           
    //       //  console.log(res.data.fact);
    //       return res.data.fact;
           
    //     } catch (e) {
    //         console.log("error - ", e);
    //         return "No fact found";
    //     }
       
    //  }

      // (2) -  Dog picture API

    //   let btn = document.querySelector("button");
    //   let url2 = "https://dog.ceo/api/breeds/image/random";

    //    btn.addEventListener("click", async () => {
    //    let link = await  getImage();
    //  //  console.log(link);
    //    let img = document.querySelector("#result");
    //    img.setAttribute("src", link);
    //    console.log(link);
    // //    let fact = await getFacts();
      
    // //    let p = document.querySelector("#result");
    // //    p.innerText = fact;
    //    });
     
     
      
    //  async function getImage() {
    //     try {
    //         let res = await axios.get(url2);
    //       //  console.log(res.data.message);
    //       return res.data.message; // message ke under url hai
         
    //     } catch (e) {
    //         console.log("error - ", e);
    //        // return "No Image found";
    //        return "/"; // khali url return karege
    //     }
       
    //  }

       // (3) - Sending Headers

        // const url = "https://icanhazdadjoke.com/";

        // async function getJokes() {
        //     try {
        //         const config = { headers: { Accept: "application/json"} };

        //         let res = await axios.get(url, config);
        //         console.log(res.data);
        //     } catch(err) {
        //         console.log(err);
        //     }
        // }
 
          // (4) - Updating Query Strings
            // ye code run nhi ho raha hai

          // let url = "http://universities.hipolabs.com/search?name= ";
          //  let btn = document.querySelector("button");
     
          //   btn.addEventListener("click", async () => {
          //      // console.log("button was clicked");
          //     let country = document.querySelector("input").value;
          //    console.log(country);

          //      getColleges(country);
          //   });
          // // let country = "nepal";

          // async function getColleges(country) {
          //   try {
          //     let res =  await axios.get(url + country);
          //     console.log(res);
          //   } catch (e) {
          //       console.log("error : ", e);
          //       return [];
          //   }
          // }
              

           // ye code sahi hai 
            // ye code country ke liye hai



          // const url = "http://universities.hipolabs.com/search?name=";
          // const btn = document.querySelector("button");
          
          // btn.addEventListener("click", async () => {
          //     try {
          //         const country = document.querySelector("input").value;
          //         console.log(country);
          //        //  let colArr = await getColleges(country);
          //         let colArr = await getColleges(country);
          //        //  console.log(colArr);
          //         show(colArr);
          //     } catch (error) {
          //         console.log("Error:", error);  // error print karbeyega
          //     }
          // });
          //      function show(colArr) {
          //       let list = document.querySelector("#list");
          //       list.innerText = "";
          //       for (col of colArr){
          //         console.log(col.name);

          //         let li =  document.createElement("li");
          //         li.innerText = col.name;
          //         list.appendChild(li);
          //       }

          //      }

          // async function getColleges(country) {
          //     try {
          //         const res = await axios.get(url + country);
          //         return res.data;
          //        //  console.log(res.data)  // Assuming you want to log the data returned by the API
          //     } catch (error) {
          //         console.log("Error:", error);
          //     }
          // }
          
             // ye code state ke liye hai


          const url = "http://universities.hipolabs.com/search?state=";
          const btn = document.querySelector("#searchBtn");
          
          btn.addEventListener("click", async () => {
              try {

                  const state = document.querySelector("#stateInput").value;

                  console.log(state);
                 //  let colArr = await getColleges(country);
                  let colArr = await getColleges(state);
                 //  console.log(colArr);
                  show(colArr);
              } catch (error) {
                  console.log("Error:", error);
              }
          });
               function show(colArr) {
                let list = document.querySelector("#list");
                list.innerText = "";
                for (col of colArr){
                  console.log(col.name);

                  let li =  document.createElement("li");
                  li.innerText = col.name;
                  list.appendChild(li);
                }

               }

          async function getColleges(state) {
              try {
                  const res = await axios.get(url + state);
                  return res.data;
                 //  console.log(res.data)  // Assuming you want to log the data returned by the API
              } catch (error) {
                  console.log("Error:", error);
              }
          }     

           


          