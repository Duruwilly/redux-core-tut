import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff


// reducer - function that used to update store 
// there are two arguments that are to be passed in the reducer/store - state, action
// state - which is the old state/state before update
// action - the action that is to be performed on the state.. i.e what happened/what update
// when it comes to reducer, we have one of two options, we either return the updated state i.e the initial state after we perform the action to update it or the old state i.e the state before we perform the action to update it which we always need to return as a default state.


import { createStore } from 'redux';
import reducer from "./reducer";

// when we are working with react-redux library, we are looking for two things - Provider which wraps our whole application and  connect which we are going to use in our component where we are going to access the informations
import { Provider } from "react-redux";

// when we create a store in redux, we have access to getState function... store.getState(). with getState, we just need to get back our state

// when we create a store in redux, we also have access to the dispatch method which perform the action on the state and send the actions to the store which render it to the ui
// dispatch method - send actions to the store
// the actions which is an object property must have the TYPE property - i.e which kind of actions that is to be performed.
// the state shouldn't be mutated.

// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 5
};


// store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
