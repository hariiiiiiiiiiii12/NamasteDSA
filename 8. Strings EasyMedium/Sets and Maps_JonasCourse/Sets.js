const barcaSet = new Set(['Lamine', 'Pedri', 'Pedri', 'Rafina']); // Pass an iterable to the set constructor Set()
console.log(barcaSet);

//Sets do not have key-value pairs. They are just like array except without duplicates.
// Order of element in set is irrelevant unlike arrrays

console.log(new Set('Hari')); // Strings are also iterables

console.log(barcaSet.size);
console.log(barcaSet.has('Lamine'));
barcaSet.add('Cubarsi');

// Accessing elements in Set
console.log(barcaSet[0]); // You cannot access using [] like you do in arrays.
// This is because there are no indexes in sets. If we think about ii, a set is used to check if a certain value is present in there or not.
// And there is no need of getting values from sets. All values are unique and their order doesnt matter and so there is no point in
// retrieving values from sets.

// Sets are iterables. And so looping is possible in sets.
for (const player of barcaSet) {
  console.log(player);
}

const staff = [
  'Manager',
  'Assistant Coach',
  'Assistant Coach',
  'Physio',
  'GK Coach',
  'GK Coach',
];

let uniqueStaffPositions = new Set(staff)
console.log(uniqueStaffPositions);

// Now how to convert a set to an array? WKT both sets and arrays are iterables.
// Spread operator works in all iterables. And so the spread operator works the same way on sets as it does on arrays
uniqueStaffPositions = [...new Set(staff)]
console.log(uniqueStaffPositions);

// Or else to find the unique staff count you can do the below
console.log(new Set([
  'Manager',
  'Assistant Coach',
  'Assistant Coach',
  'Physio',
  'GK Coach',
  'GK Coach',
]).size);



// OTHER USEFUL METHODS IN SETS INTRODUCED IN ES 2025 - You do not have it in this system's node js version

const italianFoods = new Set([
'pasta',
'gnocchi',
'tomatoes',
'olive oil',
'garlic',
'basil',
]);
const mexicanFoods = new Set([
'tortillas',
'beans',
'rice',
'tomatoes',
'avocado',
'garlic',
])


// Find which foods are common in both cuisine
const commonFoods = italianFoods.intersection(mexicanFoods)
console.log(commonFoods);