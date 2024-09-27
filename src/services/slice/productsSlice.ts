import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TProduct } from '../utils/types';
import { getProducts } from '../utils/api';

type TProductInitialState = {
    products: TProduct[];
    isLoading: boolean;
    error: boolean;
};
// 
const initialState: TProductInitialState = {
    products: [],
    isLoading: false,
    error: false
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await getProducts();
    console.log(response);
    return response
});


// слайс
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.products = [];

        });
        builder.addCase(fetchProducts.fulfilled.type, (state, action: PayloadAction<TProduct[]>) => {
            state.products = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.error = true;
            state.isLoading = false;
            state.products = [];
        });
    },
});


export default productsSlice.reducer
