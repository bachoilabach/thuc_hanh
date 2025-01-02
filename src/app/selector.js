import { createSelector } from '@reduxjs/toolkit';

export const productSelector = (state) => state.products.items;

export const cartSelector = (state) => state.cart.items;

export const filterSelector = (state) => state.filter.sort;

export const filterColorSelector = (state) => state.filter.color;

const priceNumber = (priceString) => Number(priceString.replace(/[^\d]/g, ''));

export const productsFilterSelector = createSelector(
	productSelector,
	filterSelector,
	filterColorSelector,
	(products, filter,filterColor) => {
		let filteredProducts = [...products];

		// Lọc theo giá
		if (filter === 'asc') {
			filteredProducts.sort(
				(a, b) => priceNumber(a.price) - priceNumber(b.price)
			);
		} else if (filter === 'desc') {
			filteredProducts.sort(
				(a, b) => priceNumber(b.price) - priceNumber(a.price)
			);
		}

		// Lọc theo màu sắc
		if (filterColor) {
			filteredProducts = filteredProducts.filter(
				(product) => product.color === filterColor
			);
		}

		return filteredProducts;
	}
);

export const productsStateSelector = (state) => state.products;
