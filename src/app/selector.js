import { createSelector } from '@reduxjs/toolkit';

export const productSelector = (state) => state.products.items;

export const cartSelector = (state) => state.cart.items;

export const filterSelector = (state) => state.filter.sort;

export const filterColorSelector = (state) => state.filter.color;

export const filterGenderSelector = (state) => state.filter.gender

const priceNumber = (priceString) => Number(priceString.replace(/[^\d]/g, ''));

export const productsFilterSelector = createSelector(
	productSelector,
	filterSelector,
	filterColorSelector,
	filterGenderSelector,
	(products, filter,filterColor,filterGender) => {
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

		if(filterGender){
			filteredProducts = filteredProducts.filter(
				(product) => product.gender === filterGender
			)
		}

		return filteredProducts;
	}
);

export const productsStateSelector = (state) => state.products;
