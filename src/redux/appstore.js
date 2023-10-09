import {configureStore} from "@reduxjs/toolkit"
import createPostSlice from "./createPostSlice"
const appstore=configureStore({
    reducer:{
      post:createPostSlice

    }
})

export default appstore