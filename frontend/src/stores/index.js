import { configureStore } from '@reduxjs/toolkit';
import usuarioReducer from './usuarioSlice';

export const store = configureStore({
  reducer: {
    user: usuarioReducer,
  },
});
