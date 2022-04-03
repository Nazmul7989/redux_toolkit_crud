import {combineReducers} from "redux";
import studentReducer from './studentSlice'


export default combineReducers({
    students  : studentReducer
})