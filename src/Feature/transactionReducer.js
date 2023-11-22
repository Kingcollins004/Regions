// transactionReducer.js

import { createReducer } from '@reduxjs/toolkit';
import { updateTransactionHistory } from './action';

const initialState = [];

const transactionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateTransactionHistory, (state, action) => {
      return action.payload;
    });
});

export default transactionReducer;
