import axiosInstance from '../axiosConfig';

const getAllCartItemsApi = async () => {
	const response = await axiosInstance.get('/api/cart');
	return response.data;
};

const addCartItemApi = async (productId) => {
	const response = await axiosInstance.post('/api/cart/add-to-cart', {
		productId,
	});
	return response.data;
};

const removeCartItemApi = async (productId) => {
	const response = await axiosInstance.delete(`/api/cart/remove-from-cart`, {
		data: { productId }, 
	});
	return response.data; 
};

export { getAllCartItemsApi, addCartItemApi, removeCartItemApi };
