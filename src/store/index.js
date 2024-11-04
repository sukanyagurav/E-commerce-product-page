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

    // removeItem:(id)=>{
    //     set((state)=>{
    //         const existingCartIndex =state.cart.findIndex((cartItem)=>cartItem.id ==id)
    //         const updatedItems = [...state.cart]
    //         const existingItem = updatedItems[existingCartIndex]
    //         console.log(id)
    //         if(existingItem.quantity > 1){  
    //             const updatedItem = {
    //                 ...existingItem,
    //                 quantity:existingItem.quantity - 1,
    //                 price : existingItem.price - existingItem.price
    //             }
    //             updatedItems[existingCartIndex]  = updatedItem
    //         }else{
    //             updatedItems.splice(existingCartIndex,1)
    //         }

    //         return {
    //             cart:[...updatedItems]
    //         }
    //     })
    // },
    getProductQuantiy:(id)=>{
        // const existingCartIndex =get().cart.findIndex((cartItem)=>cartItem.id ==id)
        // const existingItem = get().cart[existingCartIndex]
        // if(existingItem){
        //     return existingItem.quantity
        // }else{
        //     return 0
        // }
        return get().cart.quantity ? get().cart.quantity : 0
    },
    setQuantity:(quantity)=>{
        set((state)=>{
             const existingCartIndex =state.cart.findIndex((cartItem)=>cartItem.id == quantity.id)
             const existingItem = state.cart[existingCartIndex]
             console.log(quantity)
              if(existingItem?.quantity){
                return {
                    ...existingItem,
                    quantity:quantity
                }
              }
        })  
    },

    updateCart:(item)=>{
        set((state)=>{
            return {
                cart:[...item]
            }
        })
    },
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