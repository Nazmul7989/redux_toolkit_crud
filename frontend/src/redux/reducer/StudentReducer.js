import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    students: []
}

export const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        updateStudent: (state, action) => {
            state.students = action.payload
        },
    },
})


export const { updateStudent } = studentSlice.actions

export default studentSlice.reducer