import {combineReducers} from "redux";
import studentSlice from './StudentReducer'


export default combineReducers({
    students  : studentSlice
})