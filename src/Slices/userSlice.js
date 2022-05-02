import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  error: "",

  data: null,
  status: "idle", //"loading" | "failed" | "idle" | "successed",
};

export const getUsers = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/olaiide?client_id='c6458d61ad516ce425c3'&client_secret=a4bc61170fcffd03fd8cf75840cefee812875959`
      // `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(response.data, "res");
    return response.data;
  } catch (error) {}
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => state.user,
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllState = (state) => state.user.user;

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
