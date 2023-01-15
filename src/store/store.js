import { configureStore } from '@reduxjs/toolkit';

import tabs from '../features/tabsSlice';
import filters from '../features/filtersSlice';
import tickets from '../features/ticketsSlice';

const store = configureStore({
  reducer: {
    tabs,
    filters,
    tickets,
  },
});

export default store;
