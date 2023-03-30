import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { getBooks } = booksSlice.actions;

export default booksSlice.reducer;
