import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getStudents = createAsyncThunk('students/getStudents',async ()=>{

    const res = await axios.get('http://localhost:8000/api/student');
    return res.data.students;

})

const initialState = {
    students: [],
}

export const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        updateStudent: (state, {payload}) => {
            state.students = payload
        },
    },
    extraReducers: {
        [getStudents.pending]: (state)=>{

        },
        [getStudents.fulfilled]: (state,{payload})=>{
            return {...state,students: payload}
        },
        [getStudents.rejected]: ()=>{

        },
    }
})


export const { updateStudent } = studentSlice.actions

export default studentSlice.reducer