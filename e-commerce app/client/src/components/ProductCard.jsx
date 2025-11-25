import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
            </div>
            <div className="product-info">
                <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <span className="product-category">
                        {product.category}
                    </span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button className="add-to-cart-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
