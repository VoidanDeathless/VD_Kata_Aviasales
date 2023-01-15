import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getSearchId = createAsyncThunk('tickets/getSearchId', () =>
  fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json())
);

export const getTickets = createAsyncThunk('tickets/getTickets', (searchId) =>
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`).then((res) => res.json())
);

const initialState = {
  searchId: '',
  tickets: [],
  ticketsPerPage: 5,
  isLoading: false,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    showMoreTickets: (state) => {
      state.ticketsPerPage += 5;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload.searchId;
        state.isLoading = false;
      })
      .addCase(getSearchId.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = action.payload.tickets;
        state.isLoading = false;
      })
      .addCase(getTickets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { showMoreTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
