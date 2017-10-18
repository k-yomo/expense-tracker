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
  description: 'Water',
  note: 'Water bill',
  amout: '200'
}));

store.dispatch(addExpense({
  description: 'Gus',
  note: 'Gus bill',
  amout: '1000'
}));

store.dispatch(setTextFilter("water"));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
