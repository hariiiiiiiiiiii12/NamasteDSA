/*

1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0

*/

for (let i = 1; i <= 6; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    if (j % 2 != 0) {
      row = row + 1;
    } else {
      row = row + 0;
    }
  }
  console.log(row);
}
