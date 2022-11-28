const array = [1, 2, 3];
console.log(array.constructor.prototype);
console.log(Array.prototype1);


console.log(Object.getOwnPropertyNames(Array.prototype));

Array.prototype.log = function () {
    console.log(this.join(' | '));
};


array.log();

const names = ['Sakibul', 'Sohan', 'Al Amin', 'Abir'];
names.log();


Array.prototype.loop = function (cb) {
    for (let i=0; i<this.length; i++){
        cb(this[i], i, this)
    }
}
names.loop(v => {
    console.log(`My name is ${v}`);
});


array.loop(v => {
    console.log(`V = ${v} V*2 = ${v*2}`);
});