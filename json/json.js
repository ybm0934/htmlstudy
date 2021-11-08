// 1. Object to Json
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log('${name} can jump!');
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit);
console.log(json);


// 2. Json to Object
// parse(json)