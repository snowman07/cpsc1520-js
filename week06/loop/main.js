let cats = ["marsh", "gambit", "ghost"];
let counter = 0;
let maxIterations = 20;
let exampleString = "";

// for of, it's nicer on arrays.
// a cat petting example.
for (cat of cats) {
  // marsh pooped on the floor, so no one gets pets
  // uncomment if he does.
//   if (cat === "gambit") {
//     break;
//   }

  // ghost has been scratching golfbag so he gets pets.
  // uncomment the following if he is scratching the golf bag.
//   if (cat === "ghost") {
//     continue;
//   }
  
  console.log("pet: "+cat);
  console.log(cats.indexOf(cat)); // another way to get it.
}

// access array elements with a for loop
// for (let i=0; i < cats.length; i++) {
//   console.log("iteration " + i);
//   console.log(cats[i]);
// }

// accessing array elements with while loop.
// while (counter < cats.length) {
//   console.log("iteration " + counter);
//   console.log(cats[counter]);
//   counter++;
// }






// while loop.
// the block (what's in the {} ) is going to get executed
// until the condition in the () is false.
// uncomment to see the tree of hashtags.
// while (counter < maxIterations) {
//   exampleString += "#";
//   console.log(exampleString);
//   counter++;
// }

// for loop
// first is the defining the counter
// seconde is the condition
// third is how much to increase the counter each iteration.
// for (let i=0; i < maxIterations; i++) {
//   console.log(i);
// }