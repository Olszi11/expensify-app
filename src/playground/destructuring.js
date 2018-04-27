// const person = {
//     name: 'Kris',
//     age: 31,
//     location: {
//         city: 'London',
//         temp: 43
//     }
// };
// // const name = person.name;
// // const age = person.age;


// // const { name, age }=person;
// // console.log(`${name} is ${age}.`);


// // if(person.location.city && person.location.temp){
// //     console.log(`Its ${person.location.temp} in ${person.location.city}`)
// // }

// // const {city, temp} = person.location;
// // if(city && temp){
// //     console.log(`Its ${temp} in ${city}`);
// // }

// //jesli chce zmienic nazwe rename:

// const {city, temp:temperature} = person.location;
// if(city && temperature){
//     console.log(`Its ${temperature} in ${city}`);
// }

// //wartosci domyslne i rename
// const { name: firstname = 'Anonymouss', age }=person;
// console.log(`${firstname} is ${age}.`);

// //challenge

// // const book = {
// //     title: 'Ego is the enemy',
// //     author: 'Ryan Holiday',
// //     publisher: {
// //         name: 'Penguin'
// //     }
// // };

// // const { name: publisherName="Self-Publish" } = book.publisher;
// // console.log(`Publisher Name is: ${publisherName}`);










//Array Destucturing
const address = ['1299 S Edyty Street', 'Wroclaw', 'Poland', '31344'];

//const [street, city, country, zip] = address;
//omijanie niepotrzebnych elementow przy destrukturyzacji
const [, city, country="Spain"] = address;



//rename MOZNA NAZYWAC JAK SIE CHCE


//defulat wartosci jesli byloby pusty element to  pokazuje spain
//const address = ['1299 S Edyty Street', 'Wroclaw'];


// console.log(`You are in ${address[1]} ${address[2]}`);
console.log(`You are in ${city} ${country}`);


//challenge

const item  = ['coffee(hot)', '$2.00', '$2.50', '$4.50'];

const [coffee, , mediumCoffee] = item;
console.log(`Medium ${coffee} costs: ${mediumCoffee}`);
