// PRACTICE //


// ARRAYS //

// given an array 

const elementsArr = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen"] 

// 1. Can you write a function that `console.log`s each element like so: "hydrogen is an element", "helium is an element"... etc

elementsArr.forEach( (element) => console.log( `${element} is an element` ) )

// 2. Can you write a function that returns a NEW ARRAY for each element like so: "hydrogen is an element", "helium is an element" 
// BONUS: can you write the function so it returns a NEW ARRAY with each element like so: "hydrogen is element number 1", "helium is element number 2" 

const someNewName = elementsArr.map( (element) => `${element} is an element` )
console.log(someNewName)

const bonusArray = elementsArr.map( (element, i) => `${element} is element number ${i + 1}` )
console.log(bonusArray)

// 3. Can you write a function to find THE FIRST word that starts with the letter "b"?
// HINT: You may have to look up a method that finds elements based on a condition...

const foundElement = elementsArr.find( (element) => element.charAt(0) === 'b' )
console.log(foundElement)

// 4. Can you write a function to find EVERY word that starts with the letter "b"?
// HINT: You may have to look up a method that finds many elements based on a condition...

const allFoundElements = elementsArr.filter( (element) => element.charAt(0) === 'b' )
console.log(allFoundElements)



// OBJECTS //

// given an object 

const chettObj = { name: "Chett", cats: ["Ursula", "Octavia", "Luna", "Raja", "Aloysius", "Audacious"] }

// 1. can you console.log the name inside the object?

console.log( chettObj.name )


// 2. can you console.log the number of cats in the object like so: "{name} has {number of cats} cats"?
// NOTE: The number of cats should match the number of cats in the cats array, DO NOT HARD CODE IT TO ALWAYS BE `6`
// HINT: Look up string interpolation to plug in the names!

console.log( `${chettObj.name} has ${chettObj.cats.length} cats` )


// 3. can you amend the console.log above so it reads: "{name} has {number of cats} cats named {cat name}, {cat name}, {cat name}"
// HINT: For now you can access the cats one at a time like so: cat[0], cat[1], etc.

console.log( `${chettObj.name} has ${chettObj.cats.length} cats named ${chettObj.cats[0]}, ${chettObj.cats[1]}, ${chettObj.cats[2]}, ${chettObj.cats[3]}, ${chettObj.cats[4]}, ${chettObj.cats[5]}` )



// 4. for the cat names above, can you make it so it dynamically iterates through the cat names instead of hard coding them? 
// HINT: look up `.join`

chettObj.cats.join(", ")
