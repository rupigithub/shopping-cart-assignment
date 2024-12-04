//actions type
const CART_ADD_ITEMS = 'cart/addItems'
const CART_REMOVE_ITEMS = 'cart/removeItems'
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemsQuantity'
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemsQuantity'

//actions creactor
export function cartAddItems(productData){
    return {
        type: CART_ADD_ITEMS,
        payload: productData
    }
}
export function cartRemoveItems(productId){
    return {
        type: CART_REMOVE_ITEMS,
        payload: {productId}
    }
}
export function cartItemDecreaseQuantity(productId){
    return {
        type: CART_ITEM_DECREASE_QUANTITY,
        payload: {productId}
    }    
}
export function cartItemIncreaseQuantity(productId){
    return {
        type: CART_ITEM_INCREASE_QUANTITY,
        payload: {productId}
    }    
}

//reducer export function
export default function CartReducer(state = [], action){
    switch(action.type){
        case CART_ADD_ITEMS:
            const existingItem = state.find((cartItem) => cartItem.productId === action.payload.productId)
            if(existingItem){
                return state.map((cartItem) => {
                    if(cartItem.productId === existingItem.productId){
                        return {...cartItem, quantity: cartItem.quantity+1 }
                    }
                    return cartItem
                })
            }
            return [...state, {...action.payload, quantity: 1}]
            
        case CART_REMOVE_ITEMS:
            return state.filter((cartItem)=> cartItem.id !== action.payload.productId)

        case CART_ITEM_DECREASE_QUANTITY:
            return state
            .map((cartItem) =>{
            if(cartItem.productId === action.payload.productId){
                        return {...cartItem, quantity: cartItem.quantity-1}
                    }
                    return cartItem
                })
                .filter((cartItem) => cartItem.quantity > 0)

        case CART_ITEM_INCREASE_QUANTITY:
            return state.map((cartItem) =>{
                    if(cartItem.productId === action.payload.productId){
                        return{...cartItem, quantity: cartItem.quantity+1}
                    }
                    return cartItem
                })
        default: return state        
                 
    }
    
}