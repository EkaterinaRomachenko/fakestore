import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../services/slice/productsSlice';

export const store = configureStore({
    reducer: {
        productsSlice
    },
})