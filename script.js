// Opgave 1
// const person = {
//     firstname: "Simone",
//     lastname: "Slagslunde",
//     age: 20,
//     hometown: "Vanløse",
//     pet: "Kat",
//     petname: "Snehvide",
// }

// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.age);


// console.log(person["hometown"]);
// console.log(person["pet"]);
// console.log(person["petname"]);


// Opgave 2
const person = {
    firstname: "Simone",
    lastname: "Slagslunde",
    married: false,
    age: 20,
    hometown: "Vanløse",
    hobbies: ["Singing", "Watching Series", "BL", "Gaming"],
    pet: {
        type: "Kat",
        name: "Snehvide",
    },
};

person.hobbies.forEach(function (hobby) {
    console.log(hobby);
})

console.log(person.married);
console.log(person.pet.type);
console.log(person.pet.name);