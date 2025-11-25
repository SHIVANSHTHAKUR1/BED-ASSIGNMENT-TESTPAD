import React, { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories } from '../api';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        minPrice: '',
        maxPrice: '',
        page: 1
    });
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
                console.error('Error loading categories:', error);
            }
        };
        loadCategories();
    }, []);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const data = await fetchProducts(
                    filters.page,
                    filters.category,
                    filters.minPrice,
                    filters.maxPrice
                );
                setProducts(data.products);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error loading products:', error);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, [filters]);

    const handlePageChange = (newPage) => {
        setFilters({ ...filters, page: newPage });
    };

    return (
        <div className="container">
            <h1 className="page-title">Featured Products</h1>

            <div className="layout">
                <div className="sidebar">
                    <Filters
                        categories={categories}
                        filters={filters}
                        setFilters={setFilters}
                    />
                </div>

                <div className="main-content">
                    {loading ? (
                        <div className="loading-container">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <>
                            <div className="product-grid">
                                {products.map(product => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </div>

                            {products.length > 0 ? (
                                <Pagination
                                    currentPage={filters.page}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            ) : (
                                <div className="no-products">
                                    No products found matching your criteria.
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
