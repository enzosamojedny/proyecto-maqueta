import ProductDetail from '../src/components/productDetail/ProductDetail';

const productData = {
  name: 'Producto 1',
  description: 'Product description...',
  price: '$29.99',
  sku: 'ABC123',
  quantity: 50,
};

const App = () => {
  return (
    <div>
      <h1>Product Detail</h1>
      <ProductDetail product={productData} />
    </div>
  );
};

export default App;
