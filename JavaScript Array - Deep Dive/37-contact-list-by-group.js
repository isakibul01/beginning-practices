const contacts = [
    {
        name: 'Sakibul',
        phone: '+8801780-775100',
        gmail: 'sakibul@gmail.com',
    },
    {
        name: 'Sohan',
        phone: '+8801780-768400',
        gmail: 'sohan@gmail.com',
    },
    {
        name: 'Faurk',
        phone: '+8801980-775120',
        gmail: 'faruk@gmail.com',
    },
    {
        name: 'Yousuf',
        phone: '+8801780-776220',
        gmail: 'yousuf@gmail.com',
    },
    {
        name: 'Jaynab',
        phone: '+8801780-205180',
        gmail: 'jaynab@gmail.com',
    },
    {
        name: 'Rabeya',
        phone: '+8801780-687432',
        gmail: 'rabeya@gmail.com',
    },
    {
        name: 'Bappi',
        phone: '+8801729-343100',
        gmail: 'bappi@gmail.com',
    },
    {
        name: 'Mojahid',
        phone: '+8801720-375165',
        gmail: 'mojahid@gmail.com',
    },
    {
        name: 'Talha',
        phone: '+8801750-775156',
        gmail: 'sakibul@gmail.com',
    },
    {
        name: 'Kaium',
        phone: '+8801730-774562',
        gmail: 'kaium@gmail.com',
    },
];

//Sorting Contact 
contacts.sort((a, b) => {
    if(a.name > b.name) return 1;
    if(a.name <b.name) return -1;
    return 0;
});
console.log(contacts);



//Grouping Contact
const group = contacts.reduce((acc, cur) => {
    let groupName = cur.name.charAt(0).toUpperCase();
    if(acc[groupName]) {
        acc[groupName].push(cur);
    } else {
        acc[groupName] = [cur];
    }

    return acc;
}, {});

console.log(group);



//Grouping & Showing Table
const displayList = (group) => {
    console.log('Displaying Contact Information.');
    console.log('----------------------------------------');

    const keys = Object.keys(group);
    keys.forEach((key) => {
        console.log(`Group: ${key}`);
        console.table(group[key])
    });
};

displayList(group);