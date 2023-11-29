// userReducer.js

import { createReducer } from '@reduxjs/toolkit';
import { setUser, updateUserBalance } from './action';

const initialState = null;

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      // Handle the setUser action here
      return action.payload;
    })
    .addCase(updateUserBalance, (state, action) => {
      if (state && action.payload.userId && action.payload.amountToSubtract) {
        if (state.id === action.payload.userId) {
          return { ...state, balance: state.balance - action.payload.amountToSubtract };
        }
      }
      return state;
    });
});

export default userReducer;
