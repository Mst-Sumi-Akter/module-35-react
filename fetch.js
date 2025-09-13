// const person = {
//     name : 'sumi',
//     age : 22,
//     country : 'bangladesh',
//     friends : ['nipa','mimi','moon'],
//     family : {
//         fatherName : "alom",
//         mothersName : "asma"
//     }
// }
// const jsonData = JSON.stringify(person);
// console.log(jsonData);
// const plainData = JSON.parse(jsonData);
// console.log(plainData);



const person = {
    name : 'sumi',
    age : 22,
    country : 'bangladesh',
    friends : ['nipa','mimi','moon'],
    family : {
        fatherName : "alom",
        mothersName : "asma"
    }
}
const keys =Object.keys(person);
console.log(keys);
const values = Object.values(person);

console.log(values);