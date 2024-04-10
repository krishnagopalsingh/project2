  
    //  let url = "https://catfact.ninja/fact ";

    //  fetch(url);

    //     .then((res) => {
    //     console.log(res);
    //    //  res.json() .then((data) => {
    //       //  console.log(data);
    //       return res.json();
    //    // });
    //  })
    //    .then((data) => {
    //     console.log("data1 = ", data.fact);
    //     return fetch(url);
    //    })
    //    .then((res) => {
    //     return res.json();
    //    })
    //    .then((data2) => {
    //     console.log("data2 = ", data2.fact);
    //    })
    //   .catch((err) => {
    //     console.log("ERROR - ", err);
    //   });

    //   console.log("i am happy"); // pahale yahi print hoga fir API calls backend me chalti rahagi

    let url = "https://catfact.ninja/fact";

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data1 =", data.fact);
        return fetch(url); // Fetch again if necessary
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data2) => {
        console.log("data2 =", data2.fact);
      })
      .catch((err) => {
        console.error("ERROR -", err);
      });
    
    console.log("I am happy");
    