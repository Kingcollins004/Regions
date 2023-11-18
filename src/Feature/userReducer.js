// reducers.js
import { createReducer } from '@reduxjs/toolkit';
import { setUser } from './action';

const initialState = null;

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    return action.payload;
  });
});

export default userReducer;
