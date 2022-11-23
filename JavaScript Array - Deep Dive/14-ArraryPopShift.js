const Queue = require('./13-Queue');

const queue = new Queue();

queue.enqueue('Task One');
queue.enqueue('Task Two');
queue.enqueue('Task Three');
queue.showQueue();

queue.dequeue();
queue.showQueue();

console.log(queue.next());
console.log(queue);



//JavaScript Array - Built-In Stack
const q = [];

q.push('Item One');
q.push('Item Two');
q.push('Item Three');
console.log(q);

q.shift();
q.shift();
console.log(q);