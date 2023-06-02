import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../store/storeSlice.js";

export default configureStore({
  reducer: {
    employee: employeeSlice,
  }
});
