// redux-help/slices/cart.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../../helper/AxiosInstance";
import { isLoading } from "expo-font";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};
// Thunk để thực hiện đăng nhập
export const loginUser = createAsyncThunk(
  "auth/login",
  async (body, { rejectedWithValue }) => {
    try {
      const response = await AxiosInstance().post("/users/login", body);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  // nội bộ app
  reducers: {
    logOut: (state) => {
      (state.user = null), (state.token = null);
    },
  },
  // bên ngoài app
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, aciton) => {
        console.log(
          "action playload Login ....",
          aciton.payload
        )((state.isLoading = false)),
          (state.isSuccess = true),
          (state.user = aciton.payload.user),
          (state.token = aciton.payload.token),
          (state.errorMessage = "");
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.errorMessage = "Đăng nhập thất bại"),
          (state.user = null);
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
