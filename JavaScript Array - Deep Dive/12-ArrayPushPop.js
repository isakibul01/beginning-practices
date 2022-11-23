const Stack = require('./11-Stack');

const stack = new Stack();

const text = 'Hello';

for(let i=0; i<text.length; i++){
    stack.push(text.charAt(i));
}

let reversedText = '';
while(!stack.isEmpty()){
    console.log(`[Popped]`);
    console.log(stack);
    reversedText += stack.pop();
}

console.log(reversedText);
console.log(stack);




//JavaScript Array - Built-In Stack
const text1 = 'Hello';
const newStack = [];

for(let i=0; i<text1.length; i++){
    newStack.push(text1.charAt(i));
}
console.log(newStack);

let result = '';
while(newStack.length) result+= newStack.pop();
console.log(result);