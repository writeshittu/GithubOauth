import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import reposReducer from "./Slices/repoSlice";

export const store = configureStore({
  reducer: {
    userProfile: userReducer,
    userRepository: reposReducer,
  },
});
