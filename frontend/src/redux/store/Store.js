import { configureStore } from '@reduxjs/toolkit'
import RootReducer from "../reducer/RootReducer";

export default configureStore({
    reducer: RootReducer,
})