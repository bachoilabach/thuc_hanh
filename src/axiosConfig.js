import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000', // URL của API
	timeout: 10000, // Thời gian timeout (ms)
	headers: {
		'Content-Type': 'application/json',
	},
});

// Thêm request interceptor (nếu cần)
axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Thêm response interceptor (nếu cần)
axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
