import { create } from "zustand";
import {devtools,persist} from 'zustand/middleware'

const itemStore = (set,get)=>({
    cart:[],
    updateCart:(item)=>{
        set((state)=>{
           const existingCartIndex =state.cart.findIndex((cartItem)=>cartItem.id == item.id)
           const updateItems = [...state.cart]
            if(existingCartIndex>-1){
                updateItems[existingCartIndex] = item
            }else{
                updateItems.push(item)
            }
            return{
                cart:[...updateItems]
            }
        })
    },
    removeItem:(id)=>{
        set((state)=>{
            return{
                cart:state.cart.filter((item)=>item.id != id)
            }
        })
    }
})

const useCartStore = create(
    devtools(
        persist(itemStore,{
            name:"shoesCart"
        })
    )
)
export default useCartStore