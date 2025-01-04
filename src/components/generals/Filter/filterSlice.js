import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: 'filterSlice',
	initialState: {
		sort: 'auto',
		color: '',
		gender: '',
	},
	reducers: {
		setSort: (state, action) => {
			state.sort = action.payload;
		},
		setColor: (state, action) => {
			state.color = action.payload;
		},
		setGender: (state, action) => {
			state.gender = action.payload;
		},
	},
});

export default filterSlice;
