import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
    name: "employee",
    initialState: {
       employee: []
    },
    reducers: {
        setEmployee: (state, action) => {
            return { ...state, employee: [...action.payload]};
        },
        newEmployee: (state, action) => {
            return { ...state, employee: [...state.employee, action.payload]};
        }
    }
});

export const { setEmployee, newEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;