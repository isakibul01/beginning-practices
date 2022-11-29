const courses = [
    {
        id: 'OC1',
        name: 'JavaScript - ALl You Need to Know',
        topic: 'JavaScript',
        price: 2599,
    },
    {
        id: 'OC2',
        name: 'Java - ALl You Need to Know',
        topic: 'Java',
        price: 2199,
    },
    {
        id: 'OC3',
        name: 'C - ALl You Need to Know',
        topic: 'C Programming',
        price: 2099,
    },
    {
        id: 'OC4',
        name: 'Python - ALl You Need to Know',
        topic: 'Python',
        price: 2499,
    },
    {
        id: 'OC5',
        name: 'PHP - ALl You Need to Know',
        topic: 'PHP',
        price: 1899,
    },
    {
        id: 'OC6',
        name: 'Dart - ALl You Need to Know',
        topic: 'Dart',
        price: 3099,
    },
];


const discountPrice = {
    OC1: 1099,
    OC2: 1199,
    OC3: 1299,
    OC4: 999,
    OC5: 1499,
    OC6: 1399,

};


const updatedCourse = courses.reduce((acc, cur) => {
    if (discountPrice[cur.id]) {
        cur.discountPrice = discountPrice[cur.id];
    } else {
        cur.discountPrice = 0;
    }
    acc.push(cur);
    return acc;
}, []);
console.log(updatedCourse);