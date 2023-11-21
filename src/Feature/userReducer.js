import { createReducer } from '@reduxjs/toolkit';
import { setUser, updateUserBalance } from './action'; // Import the action creators

const initialState = null; // Initial state: null

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      return action.payload; // Update state with payload
    })
    .addCase(updateUserBalance, (state, action) => {
      // Update the user's balance in the state
      if (state && action.payload.userId && action.payload.amountToSubtract) {
        if (state.id === action.payload.userId) {
          return { ...state, balance: state.balance - action.payload.amountToSubtract };
        }
      }
      return state; // Return state unchanged if conditions are not met
    });
});

export default userReducer;
