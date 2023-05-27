import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth, IUser } from "./auth.types";

const initialState: IAuth = {
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state: IAuth, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    removeUserInfo: (state: IAuth, action: PayloadAction<undefined>) => {
      state.user = undefined;
    },
  },
});
export default authSlice.reducer;
export const { setUserInfo, removeUserInfo } = authSlice.actions;
