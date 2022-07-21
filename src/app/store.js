import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../feature/books/BookSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    booksReducer: booksReducer
  },
});

export default store;