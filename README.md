# Javascript Fundamentals

If you right click this file and select `Open Preview` it will show a prettier version of this file.

## Learning Goals:

- The `for` and `while` loops

- Callback functions
      
- Advanced array iteration (forEach and map)

- Default arguments

- BONUS: Keyboard shortcuts! Please ask about them!

## Practice 

Code out your solutions in `practice.js`. You can continue to test your code using the devtools or any other method you know of (for example you can use `node practice.js` in the appropriate area of the terminal).

### Arrays

Given an array:

```javascript
const elementsArr = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen"] 
```

1. Can you write a function that `console.log`s each element like so: "hydrogen is an element", "helium is an element"... etc

2. Can you write a function that returns a NEW ARRAY for each element like so: "hydrogen is an element", "helium is an element" 

    *BONUS: can you write the function so it returns a NEW ARRAY with each element like so: "hydrogen is element number 1", "helium is element number 2"*

3. Can you write a function to find THE FIRST word that starts with the letter "b"?

    *HINT: You may have to look up a method that finds elements based on a condition...*

4. can you write a function to find EVERY word that starts with the letter "b"?

    *HINT: You may have to look up a method that finds many elements based on a condition...*

### Objects

Given an object :

```javascript
const chettObj = { name: "Chett", cats: ["Ursula", "Octavia", "Luna", "Raja", "Aloysius", "Audacious"] }
```

1. Can you console.log the name inside the object?

2. can you console.log the number of cats in the object like so: `"{name} has {number of cats} cats"`?

    *NOTE: The number of cats should match the number of cats in the cats array, DO NOT HARD CODE IT TO ALWAYS BE `6`*

    *HINT: Look up string interpolation to plug in the names!*

3. Can you amend the console.log above so it reads: `"{name} has {number of cats} cats named {cat name}, {cat name}, {cat name}"`

    *HINT: For now you can access the cats one at a time like so: `cat[0]`, `cat[1]`, etc.*

4. For the cat names above, can you make it so it dynamically iterates through the cat names instead of hard coding them? 

    *HINT: look up `.join`*