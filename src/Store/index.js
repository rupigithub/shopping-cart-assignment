import {createStore} from "redux";
import {combineReducers} from "redux";

import ProductReducer from "./Productreducer";
// import WishListReducer from "./WishListReducer";
import CartReducer from "./Cartreducer";



const reducer = combineReducers({
    Products : ProductReducer,
    CartItems : CartReducer,
    // WishList : WishListReducer,
})

 export const Store = createStore(reducer);
 console.log(Store.getState())

// Store.dispatch(cartAddItems(1))
// Store.dispatch(cartRemoveItems(1))
// Store.dispatch(cartItemDecreaseQuantity(1))
// Store.dispatch(cartItemIncreaseQuantity(1))