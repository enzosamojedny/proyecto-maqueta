import './ProductDetail.css';

const ProductDetail = ({ product }) => {
    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <p>SKU: {product.sku}</p>
            <p className="quantity">{product.quantity}</p>
            <button className="button">Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
