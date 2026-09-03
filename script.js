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
// const person = {
//     firstname: "Simone",
//     lastname: "Slagslunde",
//     married: false,
//     age: 20,
//     hometown: "Vanløse",
//     hobbies: ["Singing", "Watching Series", "BL", "Gaming"],
//     pet: {
//         type: "Kat",
//         name: "Snehvide",
//     },
// };

// person.hobbies.forEach(function (hobby) {
//     console.log(hobby);
// })

// console.log(person.married);
// console.log(person.pet.type);
// console.log(person.pet.name);


// Opgave 3
// const gmmtv = [
//     {
//         name: "Santa Pongsapak", age: 22, job: "Actor, Singer and model"
//     },
//     {
//         name: "Perth Tanapon", age: 25, job: "Actor, Singer and model"
//     },
//     {
//         name: "Bright Vachirawit", age: 28, job: "Actor, Singer and model"
//     },
// ];

// const rootElement = document.querySelector(".root")

// gmmtv.forEach(function (gmm) {
//     const divElement = document.createElement("div");
//     divElement.textContent =
//         gmm.name + ', Age: ' + gmm.age + ', Job: ' + gmm.job;
//     rootElement.append(divElement);
// })


// Opgave 4 og 5
// const gmmtv = [
//     {
//         name: "Santa Pongsapak", age: 22, job: "Actor, Singer and model"
//     },
//     {
//         name: "Perth Tanapon", age: 25, job: "Actor, Singer and model"
//     },
//     {
//         name: "Bright Vachirawit", age: 28, job: "Actor, Singer and model"
//     },
// ];

// const rootElement = document.querySelector(".root")

// gmmtv.forEach(function (gmm) {
//     const divElement = document.createElement("div");
//     divElement.classList.add("gmm");
//     divElement.textContent =
//         `${gmm.name}, Age: ${gmm.age}, Job: ${gmm.job}`;
//     rootElement.append(divElement);
// })