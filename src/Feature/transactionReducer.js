// transactionReducer.js

import { createReducer } from '@reduxjs/toolkit';
import { updateTransactionHistory } from './action';

const initialState = [];

const transactionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateTransactionHistory, (state, action) => {
      if (state === null) {
        return [action.payload]; // If the state is null, initialize it with a new array
      }

      return [...state, action.payload]; // Add the new transaction to the existing state
    });
});

export default transactionReducer;
