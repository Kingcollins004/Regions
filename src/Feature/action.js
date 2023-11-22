// action.js

import { createAction } from '@reduxjs/toolkit';

// Action creator for setting user data
export const setUser = createAction('SET_USER');

// Action creator for updating user balance
export const updateUserBalance = createAction('UPDATE_USER_BALANCE');

export const updateTransactionHistory = createAction('UPDATE_TRANSACTION_HISTORY');

export const updateBalance = (newBalance) => {
  return {
    type: 'UPDATE_BALANCE',
    payload: newBalance,
  };
};

export const subtractFromBalance = (amountToSubtract) => {
  return {
    type: 'SUBTRACT_FROM_BALANCE',
    payload: amountToSubtract,
  };
};
