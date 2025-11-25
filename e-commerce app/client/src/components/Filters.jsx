import React from 'react';

const Filters = ({ categories, filters, setFilters }) => {
    const handleCategoryChange = (e) => {
        setFilters({ ...filters, category: e.target.value, page: 1 });
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value, page: 1 });
    };

    return (
        <div className="filters-card">
            <h3 className="filters-title">Filters</h3>

            <div className="filter-group">
                <label className="filter-label">Category</label>
                <select
                    value={filters.category}
                    onChange={handleCategoryChange}
                    className="filter-select"
                >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="filter-label">Price Range</label>
                <div className="price-inputs">
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min"
                        value={filters.minPrice}
                        onChange={handlePriceChange}
                        className="filter-input"
                    />
                    <span className="price-separator">-</span>
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max"
                        value={filters.maxPrice}
                        onChange={handlePriceChange}
                        className="filter-input"
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
