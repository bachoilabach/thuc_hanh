import { createSelector } from '@reduxjs/toolkit';

export const productSelector = (state) => state.products;

export const cartSelector = (state) => state.cart;

export const filterSelector = (state) => state.filter.sort;

const priceNumber = (priceString) => Number(priceString.replace(/[^\d]/g, ''));

export const productsFilterByPriceSelector = createSelector(
	productSelector,
	filterSelector,
	(products, filter) => {
		console.log();
		switch (filter) {
			case 'asc':
				return [...products].sort(
					(a, b) => priceNumber(a.price) - priceNumber(b.price)
				);
			case 'desc':
				return [...products].sort(
					(a, b) => priceNumber(b.price) - priceNumber(a.price)
				);
			default:
				return products;
		}
	}
);
