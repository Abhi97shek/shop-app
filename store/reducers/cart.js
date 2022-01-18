import CartItem from "../../models/cart-item";
import { ADD_TO_CART } from "../actions/cart";
const initalState = {
    items:{},
    totalAmount:0
};


const cartReducer = (state = initalState,action)=>{

    switch(action.type)
    {
        case ADD_TO_CART:
            {
                const addedProduct = action.product;
                const prodPrice = addedProduct.price;
                const productTitle = addedProduct.title;

                if(state.items[addedProduct.id])
                {
                    const updatedCart = new CartItem(
                        state.items[addedProduct.id].quantity+1,
                        prodPrice,
                        productTitle,
                        state.items[addedProduct.id].sum + prodPrice
                        );


                        return {
                            ...state,
                            items:{
                                ...state.items,
                                [addedProduct.id]:updatedCart,
                                totalAmount: state.totalAmount + prodPrice
                            }
                        }
                }
                else
                {
                    const newCartItem = new CartItem(1,prodPrice,productTitle,prodPrice);
                    return {
                        ...state,
                       items:{
                           ...state.items,
                           [addedProduct.id]:newCartItem,
                           totalAmount: state.totalAmount + prodPrice
                       }
                    }
                }

            }
    }
    return state;

};


export default cartReducer;