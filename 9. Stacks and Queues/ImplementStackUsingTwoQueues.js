
var MyStack = function() {
    this.q1 = [];
    this.q2 = []
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length - 1; // reach till second last element
    for(let i = 0; i < n; i++){
        this.q2.push(this.q1.shift());
    }

    let lastElementToBePopped = this.q1.shift(); // last element of q1 is dequed and q1 is empty now

    // switch q1 and q2 as main queue q1 has become empty at this point.
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return lastElementToBePopped;

};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length - 1;
    for(let i = 0; i < n; i++){
        this.q2.push(this.q1.shift());
    }

    let topElementToBeReturned = this.q1.shift();
    this.q2.push(topElementToBeReturned);

    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return topElementToBeReturned;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.q1.size < 1){
        return true;
    }
    else{
        return false;
    }
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */