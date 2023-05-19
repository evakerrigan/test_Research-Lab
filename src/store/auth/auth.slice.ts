import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./auth.types";

const initialState: AuthState["isAuth"] = {
  value: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});
