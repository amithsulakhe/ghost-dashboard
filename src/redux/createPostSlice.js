import { createSlice } from "@reduxjs/toolkit";

const createPostSlice=createSlice({
    name:"Posts",
    initialState:{
        postData:[]
    },
    reducers:{
        addlistofPost:(state,action)=>{
            state.postData=action.payload
        }
    }
})

export const {addlistofPost}=createPostSlice.actions
export default createPostSlice.reducer