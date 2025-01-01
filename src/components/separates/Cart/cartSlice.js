import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addCartItemApi, getAllCartItemsApi, removeCartItemApi } from '../../../api/cartApi';

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {
		status: 'idle',
		items: [],
	},
	reducers: {
		removeFromCart: (state, action) => {
			return state.filter((item) => item._id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCart.pending, (state) => {
			state.status = 'loading';
		}),
			builder.addCase(fetchCart.fulfilled, (state, action) => {
				(state.status = 'succeeded'), (state.items = action.payload);
			}),
			builder.addCase(addToCart.fulfilled, (state, action) => {
				state.status = 'succeeded';
				const cartItem = action.payload;
				console.log(cartItem);
				state.items.push(action.payload);
			}),
			builder.addCase(removeFromCart.fulfilled, (state, action) => {
				state.status = 'succeeded';
				console.log(state.items)
				state.items = state.items.filter(
					(item) => item.productId._id !== action.payload.productId
				);
			});
	},
});

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
	const res = await getAllCartItemsApi();
	return res.cartItems;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
	try {
		const productId = product._id;
		const res = await addCartItemApi(productId);
		toast.success('Đã thêm vào giỏ hàng');
		return res.detailCartItem;
	} catch (error) {
		toast.error('Lỗi khi thêm sản phẩm vào giỏ');
		throw error;
	}
});

export const removeFromCart = createAsyncThunk(
	'cart/removeFromCart',
	async (productId) => {
		try {
			const res = await removeCartItemApi(productId);
			toast.success('Đã xóa khỏi giỏ hàng');
			console.log(res.cartItem)
			return res.cartItem;
		} catch (error) {
			toast.error('Lỗi khi xóa sản phẩm khỏi giỏ giỏ');
			throw error;
		}
	}
);

export default cartSlice;
