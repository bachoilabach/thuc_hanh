import axiosInstance from '../axiosConfig';

const fetchProductApi = async () => {
	const response = await axiosInstance.get('/api/products');
	return response.data;
};

const getProductById = async(productId)=>{
	const response = await axiosInstance.get(`/api/products?productId=${productId}`);
	return response.data;
}

export { fetchProductApi , getProductById};
