import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductApi } from '../../../api/productApi';

const productSlice = createSlice({
	name: 'products',
	initialState: {
		status: 'idle',
		items: []
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProduct.pending, (state) => {
			state.status  = 'loading'
		}),
		builder.addCase(fetchProduct.fulfilled, (state,action) => {
			state.status = 'succeded'
			state.items = action.payload
		}),
		builder.addCase(fetchProduct.rejected, (state) => {
			state.status = 'failed'
		})
	}
});

export const fetchProduct = createAsyncThunk('products/fetchProducts', async()=>{
	const res = await fetchProductApi();
	return res
})

export default productSlice;
