import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/UserSlice.js'
import productReducer from '../features/ProductSlice.js'
const store = configureStore({

    reducer : {
     user : userReducer ,
     product : productReducer,
    }
})

export default store ;