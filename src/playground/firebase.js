import * as firebase from 'firebase';

//connection with database
const config = {
    apiKey: "AIzaSyB4PEpmqBOj4KPO-FsIV2KBdmtHqFZzIbU",
    authDomain: "expensify-7cfb3.firebaseapp.com",
    databaseURL: "https://expensify-7cfb3.firebaseio.com",
    projectId: "expensify-7cfb3",
    storageBucket: "expensify-7cfb3.appspot.com",
    messagingSenderId: "792152506674"
};

firebase.initializeApp(config); 

const database = firebase.database();


// database.ref().set({
//     name: 'Kris olszowy',
//     age: 25,
//     stressLevel: 5,
//     job: {
//         title: 'software dev',
//         company: 'Google'
//     },
//     location: {
//         city: 'Wroclaw',
//         country: 'Poland'
//     }
// }).then(()=>{
//     console.log('Data is saved!');
// }).catch((error)=>{
//     console.log('This failed: ', error);
// })  


// acces to database get to reference to area, expenses, notes

// database.ref().set('This is my data');

// database.ref('age').set(27);

// database.ref('location/city').set('Warsaw');


// database.ref('attributes').set({
//     height: 173,
//     weight: 70
// }).then(()=>{
//     console.log('Second set call worked!')
// }).catch((error)=>{
//     console.log('Things didnt for the second error: ',error)
// })

//remove
// database.ref('isSingle').remove()
//     .then(()=>{
//         console.log('Removed succeded');
//     }).catch((error)=>{
//         console.log('Remove failed ' + error)
//     })

//remove root
// database.ref().remove()
//     .then(()=>{
//         console.log('Removed succeded');
//     }).catch((error)=>{
//         console.log('Remove failed ' + error)
//     })

//remove with set
//  database.ref('isSingle').set(null);


//update updates only root level, nested object nie updateduje zagniezdzonych
// database.ref().update({
//     job: 'Sales manager',
//     location:{
//         city: 'Boston'
//     }
// })

//upadate again
// database.ref().update({
//     job: 'Sales manager',
//     'location/city': 'Boston'
// });


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

//fetch

// database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error)=>{
//         console.log('Error fetching data', error);
//     })

//fetach again

// const onValueChange = database.ref()
//     .on('value', (snapshot)=>{
//         console.log(snapshot.val());
//     },(e)=>{
//         console.log('Error with data fetching', e);
//     })


// setTimeout(()=>{
//     database.ref('age').set(93);
// },3500)

// setTimeout(()=>{
//     database.ref().off(onValueChange);
// },7000)

// setTimeout(()=>{
//     database.ref('age').set(29);
// },10500)

// database.ref()
//     .on('value', (snapshot)=>{
//        const val = snapshot.val();
//        console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//     },(e)=>{
//         console.log('Error with data fetching', e);
// })
    

//array

// const firebaseNotes= {
//     notes: {
//         dadsadas:{
//             title: 'first note',
//             body: 'This is my note'
//         },
//         dasdsas: {
//             title: 'second note',
//             body: 'This is my note two'
//         }
//     }
// }
// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'This is my note'
// },{
//     id: '32as',
//     title: 'second note',
//     body: 'This is my note two'

// }];

// database.ref('notes').set(notes);
// database.ref('notes')


//dodawanie do firebase elementow talbicowych

// database.ref('notes').push({
//     title: 'Course Topic',
//     body: 'React Native, angular'
// });

// database.ref('notes/-LBD7tcAqgnjevXVFx53').update({
//     body:'Buy food'
// });

// database.ref('expenses').push({
//     description: 'Desc',
//     note: 'My note',
//     amount: 32455,
//     createdAt: 2345
// })
// database.ref('expenses').push({
//     description: 'Desc2',
//     note: 'My note',
//     amount: 325,
//     createdAt: 235
// })
database.ref('expenses').push({
    description: 'Desc3',
    note: 'My note',
    amount: 55,
    createdAt: 45
})



//fetch expenses

// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses = [];

//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });


// database.ref('expenses')
// .on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// },(e)=>{
//     console.log('Error with data fetching', e);
// });


//child removed event 
database.ref('expenses').on('child_removed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});

//child_changed

database.ref('expenses').on('child_changed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});

//child_added rowniez dla isnitejacych sie wywoluje

database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
})

