import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",

  initialState: {
    employee: [],
  },

  reducers: {
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
  },
});

// export des actions
export const { setEmployee } = employeeSlice.actions;

export const selectEmployee = (state) => state.employee.employee;

export default employeeSlice.reducer;

