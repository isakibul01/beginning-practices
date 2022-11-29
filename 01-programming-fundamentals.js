// 1. Variable:

/*Variable helps us to make things dynamic.*/





// 2. Operator:

// Mathematical terms.




// 3. Condition: (Brain of computer.)

/*
Single Branch - If Statement
Double Branch - If Else Statement
Multiple Branch - Else If
*/




// 4. Loop:

for (let i = 0; i <= 1000; i++) {
    console.log(i, 'Sakibul Islam');
}

/*There are total three types of loops available.
1. For (When we know the range)
1.1 - Range
1.2 - For in
1.3 - For of
*/

/*
2. While (When we don't know the range)
3. Do While (Whatever it will run at least once)
*/




// 5. Array:

/*Array is one of the most powerful data structures.*/

const student = ['Rayhan', 'Alvi', 'Anik', 'Arjun', 'Ayman'];

for(let i=0; i>student.length; i++){
    console.log(student[i]);
}

/*CRUD - Create, Read, Update, Delete*/




// 6. Object:

/*Always use for singular things.*/




// 7. Function:

function generateRandomNumber (max) {
    const randomNumber = Math.round(Math.random() * max);
    return randomNumber;
}

console.log(generateRandomNumber(5));




// 8. Expression VS Statement