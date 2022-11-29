//Understand Compose
const add10 = (n) => n + 10;
const times3 = (n) => n * 3;
const div2 = (n) => n / 2;

const n = 5;
const x = div2(times3(add10(n)));
console.log(x);



//Pipe Function - Shortest Way
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), n);
const result = pipe(add10, times3, div2)(n);
console.log(result);



//Compose Function - Long Way
const compose = (...fns) => {
    return (x) => {
        return fns.reduce((v, f) => f(v), x);
    }
}
const result2 = compose(add10, times3, div2)(n);
console.log(result2);
