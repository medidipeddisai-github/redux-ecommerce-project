import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[
        {
            id:1,
            product:"mens causual  ",
            description:"nice shirts and jerkins",
            completed:false
        },
        {
            id:2,
            product:"solid gold platinum ",
            description:"its looking so good",
            completed:false
        },

        {
            id:3,
            product:"sand disk ssd",
            description:"it has large space and working good ",
            completed:true
        }
    ]
}

const ratingsSlice=createSlice({
     name:"rating",
     initialState,
     reducers:{
        removeTodo:(state,action)=>{
           const remainingitems=state.items.filter((item)=>{
              return item.id !== action.payload
           })
           return{
            items:remainingitems
           }
        },
       toggleTodo:(state,action)=>{
        const updateitems=state.items.map((item,index) => {
            if(item.id===action.payload)
            {
               return {...item,completed: !item.completed}
            }
             return item
        });
        return {
            items:updateitems
        }

        },
        addTodo:(state,action)=>{
            state.items.push(action.payload)
         },
         updateTodo:(state,action)=>{
            const updateditems=state.items.map((item)=>{
                if(action.payload.id===item.id)
                {
                    return {...item,...action.payload}

                }
                return item
            })
            return {
                items:updateditems
            }
         }

     }
})

export const{removeTodo,toggleTodo,addTodo,updateTodo}=ratingsSlice.actions

export default ratingsSlice.reducer;