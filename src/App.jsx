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
},
{
  name: 'Yellow Sofa',
  description: 'Immerse yourself in comfort and style with our Yellow Elegance Sofa. Crafted with precision, this sofa combines modern design with a touch of sophistication. ',
  price: '$49.99',
  sku: 'ABC1234',
  quantity: 30,
  image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
},
{
  name: 'Black Sofa',
  description: 'Immerse yourself in comfort and style with our Black Elegance Sofa. Crafted with precision, this sofa combines modern design with a touch of sophistication. ',
  price: '$80.99',
  sku: 'ABC1235',
  quantity: 10,
  image: 'https://images.unsplash.com/photo-1581699461793-bec4b43073b7?q=80&w=1427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
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
