import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: true,
  transfer0: true,
  transfer1: true,
  transfer2: true,
  transfer3: true,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleAllFilters: (state) => {
      state.all = !state.all;
      state.transfer0 = state.all;
      state.transfer1 = state.all;
      state.transfer2 = state.all;
      state.transfer3 = state.all;
    },
    toggleCurrentFilter: (state, action) => {
      state[action.payload] = !state[action.payload];
      if (state.transfer0 && state.transfer1 && state.transfer2 && state.transfer3) {
        state.all = true;
        return;
      }
      state.all = false;
    },
  },
});
export const { toggleAllFilters, toggleCurrentFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
