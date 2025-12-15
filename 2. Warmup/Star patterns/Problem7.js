/*
        *
      * *
    * * *     
  * * * *
* * * * *     

*/


for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let z = 0; z < 5 - i; z++) {
    row = row + ' ';
  }
  for (let j = 0; j < i; j++) {
    row = row + '*';
  }
  console.log(row);
}
