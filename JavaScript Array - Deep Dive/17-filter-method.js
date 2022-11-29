const studentArray = [
    {
    id: 1,
    name: 'Sakibul Islam',
    Gpa: 2.98,
    email: 'sakibul@gmail.com',
    due: true,
    dueAmount: 1000,
    },
    {
     id: 2,
     name: 'Abd Kaium',
     Gpa: 3.42,
     email: 'kaium@gmail.com',
     due: true,
    dueAmount: 1000,
    },
    {
    id: 3,
    name: 'Naharul Islam Apon',
    Gpa: 2.96,
    email: 'apon@gmail.com',
    due: true,
    dueAmount: 50000,
    },
    {
    id: 4,
    name: 'Riaz Uddin',
    Gpa: 3.34,
    email: 'riaz@gmail.com',
    due: false,
    dueAmount: 0,
    },
    {
    id: 5,
    name: 'Nahid Hasan',
    Gpa: 3.96,
    email: 'nahid@gmail.com',
    due: true,
    dueAmount: 2000,
    },
];


const lowGpa = studentArray.filter((value) => value.Gpa < 3);
console.log(lowGpa);



console.log('--------------------------------------');



const dueStudent = studentArray.filter((value) => value.due > 0);
console.log(dueStudent);



console.log('--------------------------------------');



//Send Inspiring message to the student Gpa under 3.00
const mappedStudents = studentArray.map((value) => {
    return {
        ...value,
        msg: `Hello ${value.name}, ${value.Gpa >= 3 ? 'Congratulation, try better!' : 'Please study hard!'}`,
    }
});
console.log(mappedStudents);