// Map is a data structure that you can use to map value to keys.
// Data is stored in key value pairs in map
// THE BIG DIFFERENCE BETWEEN MAPS AND OBJECTS IS THAT THE KEYS IN OBJECTS ARE ALWAYS ALMOST STRING BUT IN MAPS THE KEYS CAN BE OF ANY TYPE.
// LIKE THE KEYS IN MAPS CAN EVEN BE OBJECTS OR ARRAYS OR OTHER MAPS

const club = new Map();
console.log(club);
club.set('name', 'FC Barcelona');
club.set(1, 'Camp Nou');
console.log(club.set(2, 'Mointjuic')); // Calling set on maps not only add the key value pair but also returns the updated map as a whole.
// This behaviour allows us to chain them
console.log(
  club
    .set('Captain', 'Pedri')
    .set('Coach', 'Flick')
    .set('Attackers', ['Lewa', 'Rapha', 'Lamine', 'Rash', 'Roony'])
);

// To read data from map, we use get()
console.log(club.get('Captain'));

// has()
console.log(club.has('Attackers'));

// size
console.log(club.size);

// clear() will clear everything
//console.log(club.clear());

// Setting array as map key
club.set([1, 2], 'Test');
console.log(club);

console.log(club.get([1, 2])); // This returns undefined as [1,2] at 32 and [1,2] at 35 are 2 different arrays

let arr = [1, 2];
club.set(arr, 'Test2');
console.log(club.get(arr));

// THERE IS ANOTHER WAY TO POPULATE THE MAPS WITHOUT USING SET METHOD
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
]);

console.log(question);

for(const [key,value] of question){
    if(typeof key === 'number'){
        console.log(`${key}: ${value}`);
    }
}


// Converting map to array
console.log([...question]);