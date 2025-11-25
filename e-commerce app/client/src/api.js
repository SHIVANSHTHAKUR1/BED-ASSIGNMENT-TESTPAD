import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const fetchProducts = async (page, category, minPrice, maxPrice) => {
    const params = { page };
    if (category) params.category = category;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    const response = await axios.get(API_URL, { params });
    return response.data;
};

export const fetchCategories = async () => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
};
