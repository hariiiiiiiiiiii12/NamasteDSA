/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    
    let queue = [];

    // finding the rotten orange indices and pushing it to queue
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 2){
                queue.push([i,j,0]);
            }
        }
    }

    let maxMinutes = 0;
    // Making the adjacent fresh oranges rotten
    while(queue.length){
        let [x,y,minutes] = queue.shift();
        if(y < n-1 && grid[x][y+1] == 1){ // right
            grid[x][y+1] = 2;
            queue.push([x,y+1,minutes+1])
        }
        if(y > 0 && grid[x][y-1] == 1){ // left
            grid[x][y-1] = 2;
            queue.push([x,y-1,minutes+1])
        }
        if(x > 0 && grid[x-1][y] == 1){ // top
            grid[x-1][y] = 2;
            queue.push([x-1,y,minutes+1])
        }
        if(x < m-1 && grid[x+1][y] == 1){ // bottom
            grid[x+1][y] = 2;
            queue.push([x+1,y,minutes+1])
        }
        maxMinutes = Math.max(minutes, maxMinutes);
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                return -1;
            }
        }
    }

    return maxMinutes;

};