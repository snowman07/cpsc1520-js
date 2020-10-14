let cats = ["marsh", "gambit", "ghost"];

console.log(cats);

// access marsh he's at index 0
console.log(cats[0]);

// access ghost he's at index 2
console.log(cats[2]);

// add portia
cats.push("portia");
console.log(cats);

// shift removes the first element
cats.shift();
console.log(cats);

// adda new element 
cats.unshift("marsh");
console.log(cats);

// get the length
console.log(cats.length);

// delete a cat.
delete cats[3]
console.log(cats);

// splice to remove
cats.splice(3, 1);
console.log(cats)

// splice to add
cats.splice(1, 0, "eggroll");
console.log(cats)