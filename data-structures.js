// ARRAYS

// 0. What is an array?

// Technically an object
// has indexes / indices instead of normal keys

// const arr1 = ["Chett", "Tiller", true, 21]

// console.log(arr1[0]) // "Chett" --> arrays start at 0!


// 1. What is a `for` loop? How can we use it to loop 10 times?

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }


// 2. What is a `while` loop? How can we use it to loop 10 times?

// let index = 0

// while (index < 10) {
//     console.log(index)
//     index++
// }

// 3. What is an array? How can we use a `for` loop to do something for every item in an array?

const people = ["Justin", "Joyce", "Sebastien", "Thorn", "Amrita"]

// generic for loop
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// while loop
// index = 0

// while (index < people.length) {
//     console.log(people[index])
//     index++
// }

// for of loop
// for (person of people) {
//     console.log( person )
// }


// 4. What is an array method? How do we use the `.forEach` method?
// 4.5. What is a callback function?

const printPerson = person => console.log(`Hello I am ${person}`)

// people.forEach( printPerson )

// a callback is a function used by another function 

people.forEach( (person, index) => console.log(`${index} - ${person}`) )
// the above uses an anonymous function and also a second parameter for the index

// 5. What is the difference between a `.map` and a `.forEach` with an array?


// OBJECTS

function pushIt() {
    console.log("PUSH IT")
}

const chetObj = { 
    name: "Chett", 
    age: 21, 
    numCats: 2, 
    hasCats: true, 
    push: pushIt, 
    0: "I AM KEY ZERO",
    firstCat: {
        name: "Octavia",
        age: 10,
        favoriteTreats: [ 'Tuna', "Mackeral", "Fried Oysters" ]
    },
    secondCat: {
        name: "Ursula",
        age: 10
    }
}


// 1. What is a Javascript Object? What is a key and what is a value?

// keys point to their values, for example a key of name has a value of "Chett"

// 2. How can you select the value inside an object based on its key?

// dot notation or using the key with brackets
chetObj.name
chetObj['name'] // used very rarely for things like 0 or 1
chetObj[0]

// 3. How can you set a new value in an object? How can you change the value of a key?

chetObj.name = "Sebastien"
chetObj['name'] = "Sebastien" // used more rarely

// 4. How can you select from nested objects? What does nested object even mean?

// object inside an object 
// can use multiple chains of dot notation or bracket notation to drill down to what you want
chetObj.firstCat.favoriteTreats[2]
