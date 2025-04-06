//Use concat()  to join two arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
console.log("Combined Array:", combinedArray);

//Use push() to add an element "Kiwi" to he array fruits
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits Array with Kiwi:", fruits);

//Use unshift() to add two numbers 4 and 5 to the beginningof the array array1
const array1 = [1,, 2, 3];
array1.unshift(4, 5);
console.log("Array1 with added numbers:, array1);
    
//use pop() to remove the last element from the fruits array
fruits.pop();
console.log("Fruits Array after pop:", fruits);

//use shift to remove the first element from the array array2
array2.shift();
console.log("Array2 adter shift:", array2);

//use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("Sorted Fruits Array:", fruits);

//use slice() to create a new array containing a portion of the fruits
const slicedFruits = fruits.slice(1, 3);
console.log("Sliced Fruits Array :", slicedFruits);

//use splice() to insert and remove elements in the months array 
const months = ["Jan", "Feb", "Apr", "May"];
months.splice(2, 2, "Inserted1", "Inserted2");
console.log("Months array after splice:", months);
