import ProductDetail from '../src/components/productDetail/ProductDetail';
import { ChakraProvider,Flex } from '@chakra-ui/react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const productData = [{
  name: 'Green Sofa',
  description: 'Immerse yourself in comfort and style with our Green Elegance Sofa. Crafted with precision, this sofa combines modern design with a touch of sophistication. ',
  price: '$29.99',
  sku: 'ABC123',
  quantity: 50,
  image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fH',
}];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};
const App = () => {
  return (
    <ChakraProvider>
      <Flex direction='column' align='center' justify='center' minH='100vh'>
        <Slider {...settings}>
        {productData.map((product, index) => (
            <ProductDetail key={index} product={product} />
          ))}
          </Slider>
          </Flex>
    </ChakraProvider>
  );
};

export default App;
