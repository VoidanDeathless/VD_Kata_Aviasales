import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getSearchId = createAsyncThunk('tickets/getSearchId', () =>
  fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json())
);

export const getTickets = createAsyncThunk('tickets/getTickets', (searchId) =>
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })
    .catch(() => [])
);

const initialState = {
  searchId: '',
  tickets: [],
  ticketsPerPage: 5,
  sortType: '',
  isLoading: true,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    showMoreTickets: (state) => {
      state.ticketsPerPage += 5;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload;
      state.ticketsPerPage = 5;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload.searchId;
      })
      .addCase(getSearchId.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = state.tickets.concat(action.payload.tickets);
        state.isLoading = !action.payload.stop;
      })
      .addCase(getTickets.rejected, (state) => {
        state.isLoading = true;
      });
  },
});
export const { showMoreTickets, changeSortType } = ticketsSlice.actions;
export default ticketsSlice.reducer;
