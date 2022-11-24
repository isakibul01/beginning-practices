/*
Map: When we need to modify or change every element of an array we will use Map.
It update any existing array or create a new array where every element of the array is available.

Filter: When we need to find out any specific element of an array depending on any specific logic we will use filter.
It has no update or modification and not return any new array. It will return elements depending on any specific logic.

*We can use Map & Filter at a time by marching them.
*/



const studentArray = [
    {id: 1, name: 'Sakibul Islam', Gpa: 3.20, email: 'sakibul@gmail.com'},
    {id: 2, name: 'Abd kaium', Gpa: 3.42, email: 'kaium@gmail.com'},
    {id: 3, name: 'Naharul Islam Apon', Gpa: 2.58, email: 'apon@gmail.com'},
    {id: 4, name: 'Riaz Uddin', Gpa: 3.34, email: 'riaz@gmail.com'},
    {id: 5, name: 'Ashikujjaman Ashik', Gpa: 2.80, email: 'nahid@gmail.com'},
];

/*
We will send mail to the students with gpa under 3 from the array. At first we will find out students with low gpa by using filter and then we will send email.
*/

const emailTemplates = studentArray.filter((value) => value.Gpa < 3 ).map((value) => {
    return {
        ...value,
        title: 'Result Published!',
        msg: 'Your gpa is low. Please study hard!',
    }
});
console.log(emailTemplates);