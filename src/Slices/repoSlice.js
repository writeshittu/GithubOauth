import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  repos: null,
  status: "idle", //"loading" | "failed" | "idle" | "successed",
  error: "",
};

export const getRepos = createAsyncThunk("user", async () => {
  try {
    // const response = await axios.get(
    // `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    // );
    const response = await axios.get(
      `https://api.github.com/users/writeshittu/repos?per_page=5&sort=created:asc&client_id='c6458d61ad516ce425c3'&client_secret=a4bc61170fcffd03fd8cf75840cefee812875959`
    );
    console.log(response.data, "reposs");
    return response.data;
  } catch (error) {}
});

const userRepositorySlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    getRepo: (state) => state.repos,
  },
  extraReducers(builder) {
    builder
      .addCase(getRepos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRepos.fulfilled, (state, action) => {
        state.status = "successed";
        state.repos = action.payload;
      })
      .addCase(getRepos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllState = (state) => state.user;

export const { getRepo } = userRepositorySlice.actions;
export default userRepositorySlice.reducer;
