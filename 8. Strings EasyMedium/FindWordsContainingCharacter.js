// Approach 1

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
/*
var findWordsContaining = function (words, x) {
    let output = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                console.log('Entered');
                output.push(i);
                break;
            }
            else {
                continue;
            }
        }
    }

    return output;
};

// m - no of words, n - max length of each word
// Time complexity - O(m*n), Space compleity is O(1) and not O(n) because the output array that is created
// is expected in the question. Watch Akshay's vide for explanation.
*/