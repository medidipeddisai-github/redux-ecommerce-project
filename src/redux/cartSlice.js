import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState={
    items:localStorage.getItem("cartitems")?JSON.parse(localStorage.getItem("cartitems")):[],
    cardTotalQuantity:0,
    cartTotalAmount:0
    
 
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
      addCartitem:(state,action)=>{
       

        const itemexists=state.items.findIndex((item)=>item.id===action.payload.id);
        console.log(itemexists)

         if(itemexists === -1)
         {
            state.items.push(action.payload)
             toast.success("product added to cart",{position:"top-right"})
         }
         else{
            state.items[itemexists].quantity++;
            toast.info("product quantity incremented",{position:"top-right"})
            // console.log(state.items[itemexists] )
         }
         localStorage.setItem("cartitems",JSON.stringify(state.items))
         
       },
       removeItems :(state,action) => {
          const remainingItems=state.items.filter((item) => {
              return item.id !==action.payload.id
          })
          
          state.items=remainingItems;
          localStorage.setItem("cartitems",JSON.stringify(remainingItems));
          toast.error("product was deleted from cart",{position:"bottom-right"});
       },
       decrementCartQty:(state,action)=>{
       const itemexists= state.items.findIndex((item)=>item.id===action.payload.id)
          if(state.items[itemexists].quantity===1)
          {
            const remainingItems=state.items.filter((item) => {
                return item.id !==action.payload.id 
          })
          state.items=remainingItems;
          localStorage.setItem("cartitems",JSON.stringify(remainingItems));
          toast.error("product was deleted from cart",{position:"bottom-right"});
         
        }    
          else  
          {
            state.items[itemexists].quantity--;
            localStorage.setItem("cartitems",JSON.stringify(state.items));
            toast.info("product was decremented",{position:"bottom-right"});
          }       
       },
       clearCart:(state)=>{
          
          state.items=[]
          
          localStorage.setItem("cartitems",JSON.stringify(state.items));
          toast.info("products cleared",{position:"bottom-right"});
       },
       getTotalItems:(state,action)=>{
         const totalProducts=state.items.reduce((total,item)=>{
           return total=total+item.quantity
         },0);
         state.cardTotalQuantity=totalProducts
       },
       getTotalAmount:(state,action)=>{
        const totalAmount=state.items.reduce((total,item)=>{
          return total=total+item.quantity*item.price
        },0);
        state.cartTotalAmount=totalAmount
      }
       
    }
})

export const { addCartitem,removeItems,decrementCartQty,clearCart, getTotalItems,getTotalAmount} = cartSlice.actions
export default cartSlice.reducer;