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

//if local storage is empty, set the initial state to an empty array and if not, set the initial state to the local storage and save the last state in the local storage in an array into the setEmployee reducer
// export const fetchEmployee = () => (dispatch) => {
//   const employee = localStorage.getItem("employee")
//     ? JSON.parse(localStorage.getItem("employee"))
//     : [];
//   console.log(employee);
//   dispatch(setEmployee(employee));
// }
