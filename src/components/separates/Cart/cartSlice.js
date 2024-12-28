import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			console.log({state,action})
			const productIndex = state.findIndex(
				(item) => item.id === action.payload.id
			);
			if (productIndex !== -1) {
				state[productIndex].amount += 1;
			} else {
				state.push({ ...action.payload, amount: 1 });
			}
			toast.success("Đã thêm vào giỏ")
		},
		removeFromCart: (state,action) => {
			console.log({state,action})
			return state.filter((item) => item.id !== action.payload); 
		}
	},
});

export default cartSlice;
