import { configureStore } from '@reduxjs/toolkit';

import tabs from '../features/tabsSlice';
import filters from '../features/filtersSlice';

const store = configureStore({
  reducer: {
    tabs,
    filters,
  },
});

export default store;
