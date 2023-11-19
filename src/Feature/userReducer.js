import { createReducer } from '@reduxjs/toolkit';
import { setUser } from './action'; // Import the 'setUser' action creator

const initialState = null; // Initial state: null

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => { // Handle 'setUser' action
    return action.payload; // Update state with payload
  });
});

export default userReducer;
