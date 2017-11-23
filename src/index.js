import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters'
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({
  type: 'ADD_EXPENSE',
  description: 'Water bill',
  note: 'Water bill',
  amount: '4500'
}));

store.dispatch(addExpense({
  description: 'Gus bill',
  note: 'Gus bill',
  amount: '0',
  createdAt: 1000
}));

store.dispatch(addExpense({
  type: 'ADD_EXPENSE',
  description: 'Rent',
  note: 'Water bill',
  amount: '20950'
}));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
