import React from 'react';
import './Products.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="product-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

const Products = ({ data }) => {
    if (!data) return null;

    return (
        <section className="products-section" id="products">
            <div className="products-container">
                <div className="products-header">
                    <h2>{data.title}</h2>
                    <p>{data.subtitle}</p>
                </div>
                <div className="products-grid">
                    {data.items.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
