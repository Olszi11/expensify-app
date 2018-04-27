// // import { createStore } from 'redux';  

// // const store = createStore((state={count: 0}, action)=>{
// //     switch(action.type){
// //         case 'INCREMENT':
// //             const incrementBy =  typeof action.incrementBy === 'number' ? action.incrementBy : 1;
// //             return {
// //                 count: state.count + incrementBy
// //             };
// //         case 'DECREMENT':
// //             const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
// //             return{
// //                 count: state.count - decrementBy
// //             }
// //         case 'SET':
// //             return{
// //                 count: action.count
// //             }
// //         case 'RESET':
// //             return{
// //                 count: 0
// //             }
// //         default:
// //             return state;
// //     }
// // });



// // //lekcja1
// // //state-currentstate (prevstate)
// // //getState zwraca

// // //lekcja2
// // //Actions - than an object that gets sent to the store
// // //person: walk, stop_walking, sit, work, stop_working - state changes!

// // //for counter, increment, decrement, reset
// // //akcje wysylane sa do stora w zaleznosci o tego jak chcemy zeby wygladal dany stan

// // //increment count
// // /*
// // TYPE akcji, wysylamy do do stora, metoda stora dispatch
// // store.dispatch pozwala nam na wyslanie infromacji do stora
// // call dispatch
// // jak sie dostac do action object,ktoryzmieni stan stora
// // przekazujemy go to funkcji tworzocej store jako drugi argument
// // */


// // //LEKCJA 3
// // /*jak ogladac zminy w store rerender application
// // jak dispatchowac ackje i przekazywac je do stora  

// // jak mozmey reduxa store obserwowac
// // */
// // //funkcja ta JEST WYWYOLWYNA ZA KAZDYA ZMIANA STATE W STORZE
// // /*
// // mozemy zatrzymac tam gdie chcemy 
// //  */
// // // store.subscribe(()=>{
// // //     console.log(store.getState());
// // // });

// // const unsubscribe = store.subscribe(()=>{
// //     console.log(store.getState());
// // });

// // /*ackcje maja type i dynamic info
// // redux musi miec type
// // mozna wpiywac jakies dodatkowe wlasciwosci np incrementBy*/
// // store.dispatch({
// //     type: 'INCREMENT',
// //     incrementBy: 5
// // })
// // store.dispatch({
// //     type: 'INCREMENT'
// // })

// // // unsubscribe();

// // store.dispatch({
// //     type: 'RESET'
// // })

// // store.dispatch({
// //     type: 'DECREMENT',
// //     decrementBy: 10
// // })

// // store.dispatch({
// //     type: 'DECREMENT'
// // })

// // store.dispatch({
// //     type: 'SET',
// //     count: 101
// // })

























// //Lekcja 4
// /*
// Action generators - function taht return action objects
//  */
// //Action generator, GENERUJMY dispatch zeby nie popelnic np.literoweki
// // const add= (data) =>{
// //     return data.a + data.b;
// // }
// // console.log(add({a:1, b:12}));
// //destrukturyzacja
// // const add= ({a,b},c) =>{
// //     return a + b;
// // }
// // console.log(add({a:1, b:12},100));





// // const incrementCount = (payload={}) =>({
// //     type: 'INCREMENT',
// //     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// // });
    
// //destrukturyzacja inrcrementCount
// const incrementCount = ({incrementBy = 1}={}) =>({
//     type: 'INCREMENT',
//     incrementBy: incrementBy // mozna samo incrementBy
// });

// const decrementCount = ({decrementBy = 1}={}) =>({
//     type: 'DECREMENT',
//     decrementBy: decrementBy
// })

// const setCount = ({count}={}) => ({
//     type: 'SET',
//     count: count
// })

// const resetCount = () => ({
//     type:'RESET'
// })

// import { createStore } from 'redux';  
// //reducers
// //1. Reducers are pure functions (output determinuje tylko input, tylko rzeczy ktore przekazujemy, nic wiecej)
// /*nie jest pure function!
// let a=10;
// const add = (b)=>{
//     return a+b;
// }*/
// /*pure function
// const add = (a,b)=>{
//     return a+b;
// }
//  */
// //2. Never change state or action, nie zmieniamy akcji ani state przekazywanego tworzymy nowe


// /*
// Pojedyncze źródło prawdy - stan całej aplikacji przetrzymywany jest w drzewie obiektów wewnątrz pojedynczego obiektu store
// Stan jest tylko do odczytu - jedynym sposobem na zmianę stanu jest wywołanie akcji, która zwraca obiekt opisujący co powinno się stać
// Zmiany wykonywane są w ramach czystych funkcji - aby określić jak drzewo stanu transformowane jest przez akcje musisz tworzyć “czyste reducery”

// */

// const countReducer=(state={count: 0}, action)=>{
//     switch(action.type){
//         case 'INCREMENT':
//             return {
//                 count: state.count + action.incrementBy
//             };
//         case 'DECREMENT':
//             return{
//                 count: state.count - action.decrementBy
//             }
//         case 'SET':
//             return{
//                 count: action.count
//             }
//         case 'RESET':
//             return{
//                 count: 0
//             }
//         default:
//             return state;
//     }
// }
// const store = createStore(countReducer);


// const unsubscribe = store.subscribe(()=>{
//     console.log(store.getState());
// });


// // store.dispatch({
// //     type: 'INCREMENT',
// //     incrementBy: 5
// // })

// store.dispatch(incrementCount({incrementBy:5}));

// store.dispatch(incrementCount());

// // store.dispatch({
// //     type: 'RESET'
// // })
// store.dispatch(resetCount());
// // store.dispatch({
// //     type: 'DECREMENT',
// //     decrementBy: 10
// // })

// // store.dispatch({
// //     type: 'DECREMENT'
// // })

// store.dispatch(decrementCount({decrementBy:5}));

// // store.dispatch({
// //     type: 'SET',
// //     count: 101
// // })

// store.dispatch(setCount({count:20}));










/*trening moj */

// import { createStore } from 'redux';

// const store = createStore((state={count: 0}, action)=>{
//     switch(action.type){
//         case 'INCREMENT':
//             const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
//             return{
//                 count:  state.count + incrementBy
//             };
//         case 'DECREMENT':
//             const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
//             return{
//                 count:  state.count - decrementBy
//             };

//         case 'RESET':
//             return{
//                 count:  0
//             };

//         case 'SET':
//             return{
//                 count: action.count
//             };

//         default:
//             return state;
//     }
// })


// store.subscribe(()=>{
//     console.log(store.getState());
// });

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 4
// })

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 3
// })

// store.dispatch({
//     type: 'RESET'
// })

// store.dispatch({
//     type: 'INCREMENT'
// })

// store.dispatch({
//     type: 'SET',
//     count: 120
// })



import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 }={}) =>({
    type: 'INCREMENT',
    incrementBy
    
})

const decrementCount = ({ decrementBy = 1 }={}) =>({
    type: 'DECREMENT',
    decrementBy   
})

const setCount = ({count} = {} ) =>({
    type: 'SET',
    count
})

const resetCount = () =>({
    type: 'RESET'
})


const countReducer = ((state={count: 0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
            
            return{
                count:  state.count + action.incrementBy
            };
        case 'DECREMENT':
        
            return{
                count:  state.count - action.decrementBy
            };

        case 'RESET':
            return{
                count:  0
            };

        case 'SET':
            return{
                count: action.count
            };

        default:
            return state;
    }
})

const store = createStore(countReducer);


store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 2}));

store.dispatch(resetCount());
store.dispatch(setCount({count:5431}))