import { createStore } from "redux";
import { CLEAR_CART, DECREASE, INCREASE, REMOVE, GET_TOTALS } from "./actions";

function reducer(state, action) {
 if (action.type === CLEAR_CART) {
 return {...state, cart:[]}
 }

 // if action.type === DECREASE, we first declare a variable and set it to an empty array, and we use an if statement and say if action.payload.amount === 1, then we set the variable declared i.e the tempCart to the state.cart.filter i.e we filter the cart item and return if the cartItem.id is == to or match the action.payload.id else we shouldnt return it to the array so the array should be empty.
 // else tempCart should be = state.cart.map and we map through the cart item and if the cartItem.id === the action.payload.id we should set the cartItem to an object.. we spread the old state and set the amount to the cartItem.amount - 1. the we return the cartItem
 // we returned the old state and the mutated object in the state. i.e the cart
 if (action.type === DECREASE) {
  let tempCart = [];
  if(action.payload.amount === 1) {
   tempCart = state.cart.filter(cartItem => cartItem.id !== action);
  } else {
   tempCart = state.cart.map(cartItem => {
    if (cartItem.id === action.payload.id) {
     cartItem = { ...cartItem, amount: cartItem.amount - 1}
    }
    return cartItem
   })
  }
  return{ ...state, cart: tempCart }
 }

 // if action.type === increase, we firstly declare a variable and set the variable to the cart item i.e state.cart and we mapped through the cart item and we say: if the cartItem.id is equal to the action.payload.id passed on the dispatch method on the component used, we should return: we first spread the old cartItem and since we want to only increase the amount when we click on the increase button, we set the amount to the cartItem.amount + 1 and set it to the cartItem else we should just return the default cartItem.
 // then we return the old state by spreading it and setting the cart to the newAmount variable.
 if (action.type === INCREASE) {
  const newAmount = state.cart.map(cartItem => {
   if(cartItem.id === action.payload.id) {
    cartItem = {...cartItem, amount: cartItem.amount + 1}
   }
   return cartItem
  });
  return {...state, cart:newAmount}
 }
 // if action.type === REMOVE, we spread the whole old state and what we want to do on the state which is the each cart item that we want to remove. since the filter method returns a new array, hence, we filter the cart item and passs in a parameter on the filter method and say we should return return the cartItem.id that doesnt match the action.payload.id
 if (action.type === REMOVE) {
  return {
   ...state, cart:  state.cart.filter(cartItem => cartItem.id !==action.payload.id)
  }
 }

 // okaaayy., in this example, we want to update the amount on the cart bag if we decrease or increase our cart item and also get the total. so we first destructure total and amount from our cart and use the reduce method and in the reduce method we pass in two parameters which are the cartTotal and cartItem and the cartTotal is what we want to return after we have performed our calculation on the array we want to map on and the cartItem is what hold our item in the cart.
 // then we destructure the price and the amount from the cartItem since that is what we need to work on. then we return the cartTotal.amount += amount. i.e we add the two and assign it to amount which has an initial value of zero.
 // then to get the total, we declared a variable and set it to price of each item multiply by the amount. and we return cartTotal.total += itemTotal i.e we add and assign cartTotal.total to itemTotal. 
 if (action.type === GET_TOTALS) {
  let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
   const { price, amount } = cartItem;
   const itemTotal = price * amount;

   cartTotal.total += itemTotal;
   cartTotal.amount += amount;

   return cartTotal
  }, {
   total: 0,
   amount: 0
  });
  total = parseFloat(total.toFixed(2));
  return { ...state, total, amount };
 }
 return state;
 // switch(action.type) {
 //  case CLEAR_CART: 
 //  return { ...state, cart: [] };
 //  case DECREASE:
 //   return console.log('you decreased amount')

 //   case INCREASE:
 //    return console.log('you increase amount');
 //    case REMOVE:
 //    return console.log('you remove amount');
 //  default:
 //   return state;
 // }
}

export default reducer;
