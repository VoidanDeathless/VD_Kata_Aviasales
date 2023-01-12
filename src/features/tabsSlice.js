import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTab: 0,
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    changeCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});
export const { changeCurrentTab } = tabsSlice.actions;
export default tabsSlice.reducer;
