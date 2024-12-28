import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../jsons/Product';

const productSlice = createSlice({
	name: 'products',
	initialState: products,
	reducers: {},
});

export default productSlice;
