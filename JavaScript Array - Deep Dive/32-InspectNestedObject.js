//Incomplete

const javaScript = {
    name: 'JavaScript: The Easy Way',
    author: {name: 'John Doe', email: 'john@gamil.com'},
    contents: {video: {count: 200}}
};


const nodeJs = {
    name: 'Dive Into NodeJs',
    author: {name: 'Brad Trave', email: 'brad@gmail.com'},
    content: {video: {count: 125}}
};


const react = {
    name: 'React: All You Need to Know',
    author: {name: 'Clever Programmer', email: 'clever@gmail.com'},
    content: {video: {count: 125}, article: {count: 15}, quiz: {count: 100}},
}



const inspectArticle = (course) =>{
    const path = 'contents.article.count'
    return path.split('.').reduce((acc, field) => {
        if(acc) {
            return acc[field]
        }
        return 0;
    }, course)
}


const courses = [javaScript, nodeJs, react];

//Inspecting Article Number
courses.forEach((courses) => {
    console.log(`${courses.name} has - Article: ${inspectArticle(courses)}`);
});
