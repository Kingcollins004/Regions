// userReducer.js

import { createReducer } from '@reduxjs/toolkit';
import { setUser, updateUserBalance } from './action';

const initialState = null;

// userReducer.js

const userReducer = createReducer(initialState, (builder) => {
  builder
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
