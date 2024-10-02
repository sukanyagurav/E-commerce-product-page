import { create } from "zustand";
import {devtools,persist} from 'zustand/middleware'

const itemStore = (set,get)=>({
    cart:[],
    addItem:(item)=>{
        set((state)=>{
            const existingCartIndex = state.cart.findIndex((cartItem)=>cartItem.id ==item.id)
            const updatedItems = [...state.cart]
            const existingItem = state.cart[existingCartIndex]

            if(existingCartIndex > -1){
                if(existingItem.quantity <10){
                    const updatedItem = {
                        ...existingItem,
                        quantity:existingItem.quantity + 1,
                        price : existingItem.price + item.price
                    }
                    updatedItems[existingCartIndex]  = updatedItem
                }
            }else{
                updatedItems.push({...item,quantity:1})
            }
            return {
                cart:[...updatedItems]
            }
        })
    },
    removeItem:()=>{},
    clearCart:()=>{}
})

const useCartStore = create(
    devtools(
        persist(itemStore,{
            name:"shoesCart"
        })
    )
)
export default useCartStore