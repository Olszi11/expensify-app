import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})


store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: 1524819538224}));
store.dispatch(addExpense({description: 'Gas bill', amount: 43, createdAt: 1524819538234}));
store.dispatch(addExpense({description: 'Rent', amount: 4313500, createdAt: 1524819538244}));




const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
