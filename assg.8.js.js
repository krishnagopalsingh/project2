//  Assignment-

// (1)

//  let nums =[1, 2, 3, 4, 5];
//  const square = nums.map((num) => num * num);
//  console.log(square);
//  let sum = square.reduce((acc, cur) => acc + cur, 0);
//  let avg = sum / nums.length;
//  console.log(avg);

 // print - Square - [1,4,9,16,25], average - 11

 // (2)

 //  let numbers = [2, 4, 6, 8, -2, -4];
  // console.log(numbers.map((number) => number + 5));

  // print - [7, 9, 11, 13, 3, 1] - add+5

  // (3)

 //  let strings = ["adam", "bob", "catlyn", "donald", "eve"];
 //  console.log(strings.map((string) => string.toUpperCase()));

  // print - (5) ['ADAM', 'BOB', 'CATLYN', 'DONALD', 'EVE'] - UpperCase

  // (4)

//   const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v * 2),
//   ];

//   doubleAndReturnArgs([1, 2, 3], 4, 4); // [1, 2, 3, 8, 8]
//   doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]

  // print - [1, 2, 3, 8, 8], [2, 20, 8]

  // (5)
 
  const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
  mergeObjects ({ a: 1, b: 2}, {c: 3, d: 4}); // {a:1, b:2, c:3, d:4}
