/*Stack is a data structure which is built-in in JavaScript array.

Stack has two principle operation:
-Push: It adds element to the collection.
-Pop: It removes the most recently added element that was not remove yet.
*/

//LIFO - Last in Fast out.
//Stack Overflow, Stack Underflow.


//Implement a Stack:

const MAX_SIZE = 30;

class Stack {
    constructor() {
        this.list = new Array(MAX_SIZE);
        this.top = -1;
    }

    push(item) {
        if (this.top >= MAX_SIZE){
            console.log('Stack Overflow');
            return false;
        }
        this.list[++this.top] = item;
        return true;
    }

    pop() {
        if(this.isEmpty()){
            console.log('Stack Underflow');
            return false;
        }
        let item = this.list[this.top];
        delete this.list[this.top];
        this.top--;
        return item;
    }

    peek() {
        if (this.isEmpty()){
            console.log('Stack Underflow');
            return false;
        }
        return this.list[this.top];
    }

    isEmpty() {
        return this.top < 0;
    }
}

module.exports = Stack;